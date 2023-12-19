package com.example.springbootserver.competition;

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
}
