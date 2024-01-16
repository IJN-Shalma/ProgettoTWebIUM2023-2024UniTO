package com.example.springbootserver.competition;

import com.example.springbootserver.player.PlayerName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, String> {

    List<Competition> findAllByDomesticLeagueCodeIsNotNull();

    List<Competition> findAllByDomesticLeagueCodeIsNull();

    @Query(value = "SELECT DISTINCT countr_name as countryName FROM competitions WHERE countr_name NOTNULL", nativeQuery = true)
    List<CompetitionCountry> findAllCountries();

    List<Competition> findCompetitionByCountryNameIs(String countryName);

    @Query(value = "SELECT * FROM competitions c WHERE LOWER(c.name) LIKE LOWER(concat('%', :term, '%')) LIMIT 2", nativeQuery = true)
    List<Competition> getCompetitionsSuggestions(String term);

    @Query(value = "SELECT name, competition_id as competitionId FROM competitions c", nativeQuery = true)
    List<CompetitionId> getCompetitionIdName();
}
