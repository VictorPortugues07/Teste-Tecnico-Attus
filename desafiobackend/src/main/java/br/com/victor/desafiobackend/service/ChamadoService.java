package br.com.victor.desafiobackend.service;

import br.com.victor.desafiobackend.dto.ChamadoRequestDTO;
import br.com.victor.desafiobackend.dto.ChamadoResponseDTO;
import br.com.victor.desafiobackend.dto.ResumoChamadosDTO;
import br.com.victor.desafiobackend.exception.RecursoNaoEncontradoException;
import br.com.victor.desafiobackend.model.Chamado;
import br.com.victor.desafiobackend.model.StatusChamado;
import br.com.victor.desafiobackend.repository.ChamadoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ChamadoService {

    private final ChamadoRepository repository;

    @Transactional
    public ChamadoResponseDTO criar(ChamadoRequestDTO dto) {
        log.info("Iniciando abertura de chamado para o equipamento: {}", dto.equipamento());
        Chamado chamado = Chamado.builder()
                .equipamento(dto.equipamento())
                .descricao(dto.descricao())
                .status(StatusChamado.ABERTO)
                .build();
        return ChamadoResponseDTO.fromEntity(repository.save(chamado));
    }

    @Transactional(readOnly = true)
    public Page<ChamadoResponseDTO> listar(Pageable pageable) {
        log.info("Buscando chamados de forma paginada.");
        return repository.findAll(pageable).map(ChamadoResponseDTO::fromEntity);
    }

    @Transactional(readOnly = true)
    public ResumoChamadosDTO obterResumo() {
        long abertos = repository.countByStatus(StatusChamado.ABERTO);
        long emAnalise = repository.countByStatus(StatusChamado.EM_ANALISE);
        long concluidos = repository.countByStatus(StatusChamado.CONCLUIDO);
        return new ResumoChamadosDTO(abertos, emAnalise, concluidos, abertos + emAnalise + concluidos);
    }

    public ChamadoResponseDTO buscarPorId(Long id) {
        return ChamadoResponseDTO.fromEntity(obterEntidade(id));
    }

    private Chamado obterEntidade(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Chamado não encontrado com ID: " + id));
    }

    @Transactional
    public ChamadoResponseDTO atualizarStatus(Long id, StatusChamado novoStatus) {
        Chamado chamado = obterEntidade(id);
        chamado.setStatus(novoStatus);
        return ChamadoResponseDTO.fromEntity(repository.save(chamado));
    }

    @Transactional
    public ChamadoResponseDTO atualizar(Long id, ChamadoRequestDTO dto) {
        log.info("Atualizando dados do chamado ID: {}", id);
        Chamado chamado = obterEntidade(id);
        chamado.setEquipamento(dto.equipamento());
        chamado.setDescricao(dto.descricao());

        return ChamadoResponseDTO.fromEntity(repository.save(chamado));
    }

    @Transactional
    public void deletar(Long id) {
        if (!repository.existsById(id)) {
            throw new RecursoNaoEncontradoException("Não foi possível excluir: Chamado não encontrado.");
        }
        repository.deleteById(id);
        log.info("Chamado com ID {} excluído com sucesso.", id);
    }
}