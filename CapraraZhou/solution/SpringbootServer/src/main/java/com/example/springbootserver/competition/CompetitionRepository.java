package com.example.springbootserver.competition;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, String> {

    List<Competition> findAllByDomesticLeagueCodeIsNotNull();

    List<Competition> findAllByDomesticLeagueCodeIsNull();
}
