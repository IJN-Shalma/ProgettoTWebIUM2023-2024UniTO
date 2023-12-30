package com.example.springbootserver.competition;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name= "Competition")
public class CompetitionController {
    private final CompetitionService competitionService;

    @Autowired
    public CompetitionController(CompetitionService competitionService) {
        this.competitionService = competitionService;
    }

    @Operation(summary = "Get list of all competitions")
    @GetMapping("/competitions/")
    public List<Competition> getCompetitions() {
        return competitionService.getAllCompetitions();
    }

    @Operation(summary = "Get competition by Id")
    @GetMapping("/competitions/{competitionId}")
    public Competition getCompetitionById(@PathVariable String competitionId) {
        return competitionService.getCompetitionById(competitionId);
    }

    @Operation(summary = "Get domestic competitions")
    @GetMapping("/competitions/domestic")
    public List<Competition> getDomesticCompetitions() {
        return competitionService.getDomesticCompetitions();
    }

    @Operation(summary = "Get international competitions")
    @GetMapping("/competitions/international")
    public List<Competition> getInternationalCompetitions() {
        return competitionService.getInternationalCompetitions();
    }

    @Operation(summary = "Get list of countries where competitions are held in")
    @GetMapping("/competitions/countries")
    public List<CompetitionCountry> getCountries() {
        return competitionService.getAllCountries();
    }
}
