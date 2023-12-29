package com.example.springbootserver.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerController {

    private final PlayerService playerService;


    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    /* Player */
    @GetMapping("/players/topPlayers")
    public List<Player> getTopPlayers(){
        return playerService.getTopPlayers();
    }

    @GetMapping("/players/{playersIds}")
    public List<Player> getPlayerById(@PathVariable List<Long> playersIds) {
        return playerService.getPlayersById(playersIds);
    }

    @GetMapping("/players/club/{clubId}")
    public List<Player> getPlayersByClubId(@PathVariable Long clubId) {
        return playerService.getPlayersByClub(clubId);
    }

    @GetMapping("/players/name/{id}")
    public List<PlayerName> getPlayerNameById(@PathVariable Long id) {return playerService.getPlayerNameById(id);}


}
