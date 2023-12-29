package com.example.springbootserver.competition;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompetitionController {
    private final CompetitionService competitionService;

    @Autowired
    public CompetitionController(CompetitionService competitionService) {
        this.competitionService = competitionService;
    }

    /* Competition */
    @GetMapping("/competitions/")
    public List<Competition> getCompetitions() {
        return competitionService.getAllCompetitions();
    }

    @GetMapping("/competitions/{competitionId}")
    public Competition getCompetitionById(@PathVariable String competitionId) {
        return competitionService.getCompetitionById(competitionId);
    }

    @GetMapping("/competitions/domestic")
    public List<Competition> getDomesticCompetitions() {
        return competitionService.getDomesticCompetitions();
    }

    @GetMapping("/competitions/international")
    public List<Competition> getInternationalCompetitions() {
        return competitionService.getInternationalCompetitions();
    }

    @GetMapping("/competitions/countries")
    public List<CompetitionCountry> getCountries() {
        return competitionService.getAllCountries();
    }

}
