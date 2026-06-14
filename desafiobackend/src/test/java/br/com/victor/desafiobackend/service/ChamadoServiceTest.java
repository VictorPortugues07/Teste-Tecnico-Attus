package br.com.victor.desafiobackend.service;

import br.com.victor.desafiobackend.dto.ChamadoRequestDTO;
import br.com.victor.desafiobackend.dto.ChamadoResponseDTO;
import br.com.victor.desafiobackend.exception.RecursoNaoEncontradoException;
import br.com.victor.desafiobackend.model.Chamado;
import br.com.victor.desafiobackend.model.StatusChamado;
import br.com.victor.desafiobackend.repository.ChamadoRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ChamadoServiceTest {

    @Mock
    private ChamadoRepository repository;

    @InjectMocks
    private ChamadoService service;

    @Test
    @DisplayName("Deve criar um chamado com sucesso")
    void testCriarChamadoSucesso() {
        ChamadoRequestDTO dto = new ChamadoRequestDTO("Impressora", "Não liga");
        Chamado chamadoSalvo = Chamado.builder().id(1L).equipamento("Impressora").descricao("Não liga").status(StatusChamado.ABERTO).build();

        when(repository.save(any(Chamado.class))).thenReturn(chamadoSalvo);
        ChamadoResponseDTO result = service.criar(dto);

        assertNotNull(result);
        assertEquals("Impressora", result.equipamento());
        verify(repository, times(1)).save(any(Chamado.class));
    }

    @Test
    @DisplayName("Deve buscar chamado por ID com sucesso")
    void testBuscarPorIdSucesso() {
        Long id = 1L;
        Chamado chamado = Chamado.builder().id(id).equipamento("PC").descricao("Lento").status(StatusChamado.ABERTO).build();
        when(repository.findById(id)).thenReturn(Optional.of(chamado));

        ChamadoResponseDTO result = service.buscarPorId(id);

        assertEquals(id, result.id());
        assertEquals("PC", result.equipamento());
    }

    @Test
    @DisplayName("Deve lançar exceção quando não encontrar chamado por ID")
    void testBuscarPorIdNaoEncontrado() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RecursoNaoEncontradoException.class, () -> service.buscarPorId(1L));
    }

    @Test
    @DisplayName("Deve atualizar status do chamado com sucesso")
    void testAtualizarStatusSucesso() {
        Long id = 1L;
        Chamado chamado = Chamado.builder().id(id).status(StatusChamado.ABERTO).build();
        when(repository.findById(id)).thenReturn(Optional.of(chamado));
        when(repository.save(any(Chamado.class))).thenReturn(chamado);

        service.atualizarStatus(id, StatusChamado.EM_ANALISE);

        assertEquals(StatusChamado.EM_ANALISE, chamado.getStatus());
        verify(repository).save(chamado);
    }
}