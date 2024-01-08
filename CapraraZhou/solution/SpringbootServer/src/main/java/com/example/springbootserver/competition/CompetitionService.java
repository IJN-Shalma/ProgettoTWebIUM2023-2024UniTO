package com.example.springbootserver.competition;

import com.example.springbootserver.player.PlayerName;
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

    public List<Competition> getDomesticCompetitions() {
        return competitionRepository.findAllByDomesticLeagueCodeIsNotNull();
    }

    public List<Competition> getInternationalCompetitions() {
        return competitionRepository.findAllByDomesticLeagueCodeIsNull();
    }

    public Competition getCompetitionById(String competitionId) {
        return competitionRepository.getReferenceById(competitionId);
    }

    public List<Competition> getCompetitionsByNation(String countryName){
        return competitionRepository.findCompetitionByCountryNameIs(countryName);
    }

    public List<CompetitionCountry> getAllCountries() {
        return competitionRepository.findAllCountries();
    }

    public List<Competition> getAllCompetitions(){return competitionRepository.findAll();}

    public List<Competition> getCompetitionsSuggestions(String term) {
        return competitionRepository.getCompetitionsSuggestions(term);
    }
}
