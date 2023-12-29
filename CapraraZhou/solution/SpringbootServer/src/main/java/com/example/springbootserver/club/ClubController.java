package com.example.springbootserver.club;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClubController {
    private final ClubService clubService;

    @Autowired
    public ClubController(ClubService clubService) {
        this.clubService = clubService;
    }

    /* Club */
    @GetMapping("/clubs/competition/{competitionId}")
    public List<Club> getClubsByCompetitionId(@PathVariable String competitionId){
        return clubService.getClubsByCompetitionId(competitionId);
    }

    @GetMapping("/clubs/{clubId}")
    public Club getClubById(@PathVariable Long clubId){
        return clubService.getClubById(clubId);
    }

}
