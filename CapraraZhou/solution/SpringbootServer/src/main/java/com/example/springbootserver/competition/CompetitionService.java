package com.example.springbootserver.competition;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitionService {

    private final CompetitionRepository competitionRepository;

    @Autowired
    public CompetitionService(CompetitionRepository competitionRepository){
        this.competitionRepository = competitionRepository;
    }

    public List<Competition> getCompetitions() {
        return competitionRepository.findAll();
    }

    public List<Competition> getDomesticCompetitions() {
        return competitionRepository.findAllByDomesticLeagueCodeIsNotNull();
    }

    public List<Competition> getInternationalCompetitions() {
        return competitionRepository.findAllByDomesticLeagueCodeIsNull();
    }
}
