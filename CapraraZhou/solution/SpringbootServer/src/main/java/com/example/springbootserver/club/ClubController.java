package com.example.springbootserver.club;

import com.example.springbootserver.player.PlayerName;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name= "Club")
public class ClubController {
    private final ClubService clubService;

    @Autowired
    public ClubController(ClubService clubService) {
        this.clubService = clubService;
    }

    @Operation(summary = "Get lists of clubs that play in a competition")
    @GetMapping("/clubs/competition/{competitionId}")
    public List<Club> getClubsByCompetitionId(@PathVariable String competitionId){
        return clubService.getClubsByCompetitionId(competitionId);
    }

    @Operation(summary = "Get club by Id")
    @GetMapping("/clubs/{clubId}")
    public Club getClubById(@PathVariable Long clubId){
        return clubService.getClubById(clubId);
    }

    @Operation(summary = "Get list of suggested clubs by Name")
    @GetMapping("/clubs/suggestions/{term}")
    public List<Club> getClubNameBySuggestion(@PathVariable String term) {
        return clubService.getClubsSuggestions(term);
    }
}
