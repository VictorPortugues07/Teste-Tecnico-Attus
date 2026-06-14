package br.com.victor.desafiobackend.dto;

public record ResumoChamadosDTO(
        long abertos,
        long emAnalise,
        long concluidos,
        long total
) {
}