package br.com.victor.desafiobackend.controller;

import br.com.victor.desafiobackend.dto.ChamadoRequestDTO;
import br.com.victor.desafiobackend.dto.ChamadoResponseDTO;
import br.com.victor.desafiobackend.dto.ResumoChamadosDTO;
import br.com.victor.desafiobackend.model.StatusChamado;
import br.com.victor.desafiobackend.service.ChamadoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/chamados")
@RequiredArgsConstructor
@Tag(name = "Chamados", description = "Endpoints para gerenciamento de manutenções")
public class ChamadoController {

    private final ChamadoService service;

    @Operation(summary = "Criar um novo chamado")
    @PostMapping
    public ResponseEntity<ChamadoResponseDTO> criar(@Valid @RequestBody ChamadoRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.criar(dto));
    }

    @Operation(summary = "Listar chamados com paginação")
    @GetMapping
    public ResponseEntity<Page<ChamadoResponseDTO>> listar(@PageableDefault(size = 10, sort = "dataAbertura") Pageable pageable) {
        return ResponseEntity.ok(service.listar(pageable));
    }

    @Operation(summary = "Obter métricas para o dashboard")
    @GetMapping("/resumo")
    public ResponseEntity<ResumoChamadosDTO> obterResumo() {
        return ResponseEntity.ok(service.obterResumo());
    }

    @Operation(summary = "Atualizar status do chamado (Kanban)")
    @PatchMapping("/{id}/status")
    public ResponseEntity<ChamadoResponseDTO> atualizarStatus(
            @PathVariable Long id,
            @RequestParam String novoStatus) {
        return ResponseEntity.ok(service.atualizarStatus(id, StatusChamado.valueOf(novoStatus)));
    }

    @Operation(summary = "Buscar chamado por ID")
    @GetMapping("/{id}")
    public ResponseEntity<ChamadoResponseDTO> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    @Operation(summary = "Atualizar dados do chamado")
    @PutMapping("/{id}")
    public ResponseEntity<ChamadoResponseDTO> atualizar(@PathVariable Long id, @Valid @RequestBody ChamadoRequestDTO dto) {
        return ResponseEntity.ok(service.atualizar(id, dto));
    }

    @Operation(summary = "Excluir um chamado")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}