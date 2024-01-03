package com.example.springbootserver.club;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubService {
    private final ClubRepository clubRepository;

    @Autowired
    public ClubService(ClubRepository clubRepository){
        this.clubRepository = clubRepository;
    }

    public List<Club> getClubsByCompetitionId(String competitionId) {
        return clubRepository.findAllByDomesticCompetitionId(competitionId);
    }

    public Club getClubById(Long clubId) {
        return clubRepository.getReferenceById(clubId);
    }

    public List<Club> getClubsSuggestions(String term) {
        return clubRepository.getClubsSuggestions(term);
    }
}
