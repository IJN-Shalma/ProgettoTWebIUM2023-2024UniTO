package com.example.springbootserver;

import com.example.springbootserver.club.ClubService;
import com.example.springbootserver.competition.Competition;
import com.example.springbootserver.competition.CompetitionService;
import com.example.springbootserver.player.Player;
import com.example.springbootserver.player.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    private final ClubService clubService;
    private final CompetitionService competitionService;
    private final PlayerService playerService;

    @Autowired
    public Controller(ClubService clubService, CompetitionService competitionService, PlayerService playerService){
        this.clubService = clubService;
        this.competitionService = competitionService;
        this.playerService = playerService;
    }

    @GetMapping("/players/topPlayers")
    public List<Player> getTopPlayers(){
        return playerService.getTopPlayers();
    }

    @GetMapping("/players/{ids}")
    public List<Player> getPlayerById(@PathVariable  List<Long> ids) {
        return playerService.getPlayersById(ids);
    }

    @GetMapping("/players/club/{clubId}")
    public List<Player> getPlayersByClub(@PathVariable  Long clubId) {
        return playerService.getPlayersByClub(clubId);
    }

    @GetMapping("/competitions/domestic")
    public List<Competition> getDomesticCompetitions() {
        return competitionService.getDomesticCompetitions();
    }

    @GetMapping("/competitions/international")
    public List<Competition> getInternationalCompetitions() {
        return competitionService.getInternationalCompetitions();
    }
}
