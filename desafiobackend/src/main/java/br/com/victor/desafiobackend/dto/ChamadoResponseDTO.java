package br.com.victor.desafiobackend.dto;

import br.com.victor.desafiobackend.model.Chamado;
import br.com.victor.desafiobackend.model.StatusChamado;
import java.time.LocalDateTime;

public record ChamadoResponseDTO(
        Long id,
        String equipamento,
        String descricao,
        StatusChamado status,
        LocalDateTime dataAbertura
) {

    public static ChamadoResponseDTO fromEntity(Chamado chamado) {
        return new ChamadoResponseDTO(
                chamado.getId(),
                chamado.getEquipamento(),
                chamado.getDescricao(),
                chamado.getStatus(),
                chamado.getDataAbertura()
        );
    }
}