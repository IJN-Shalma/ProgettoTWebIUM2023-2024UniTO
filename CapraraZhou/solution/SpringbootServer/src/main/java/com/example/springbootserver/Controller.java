package com.example.springbootserver;

import com.example.springbootserver.club.ClubService;
import com.example.springbootserver.competition.CompetitionService;
import com.example.springbootserver.player.Player;
import com.example.springbootserver.player.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
