package br.com.victor.desafiobackend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ChamadoRequestDTO(

        @NotBlank(message = "O equipamento não pode estar em branco")
        @Size(max = 100, message = "O nome do equipamento deve ter no máximo 100 caracteres")
        String equipamento,

        @NotBlank(message = "A descrição do problema é obrigatória")
        @Size(max = 500, message = "A descrição deve ter no máximo 500 caracteres")
        String descricao

) {
}
