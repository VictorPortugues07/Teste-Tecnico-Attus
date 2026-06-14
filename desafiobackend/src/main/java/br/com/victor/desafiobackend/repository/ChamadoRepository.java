package br.com.victor.desafiobackend.repository;

import br.com.victor.desafiobackend.model.Chamado;
import br.com.victor.desafiobackend.model.StatusChamado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChamadoRepository extends JpaRepository<Chamado, Long> {
    long countByStatus(StatusChamado status);
}
