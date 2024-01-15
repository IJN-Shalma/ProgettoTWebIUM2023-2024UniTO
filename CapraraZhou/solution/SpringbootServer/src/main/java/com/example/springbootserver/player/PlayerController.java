package com.example.springbootserver.player;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name= "Player")
public class PlayerController {

    private final PlayerService playerService;


    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @Operation(summary = "Get the top three most valuable players")
    @GetMapping("/players/topPlayers")
    public List<Player> getTopPlayers(){
        return playerService.getTopPlayers();
    }

    @Operation(summary = "Get list of players by their Ids")
    @GetMapping("/players/{playersIds}")
    public List<Player> getPlayerById(@PathVariable List<Long> playersIds) {
        return playerService.getPlayersById(playersIds);
    }

    @Operation(summary = "Get list of players by club Id")
    @GetMapping("/players/club/{clubId}")
    public List<Player> getPlayersByClubId(@PathVariable Long clubId) {
        return playerService.getPlayersByClub(clubId);
    }

    @Operation(summary = "Get player's name by id")
    @GetMapping("/players/name/{id}")
    public List<PlayerName> getPlayerNameById(@PathVariable Long id) {
        return playerService.getPlayerNameById(id);
    }

    @Operation(summary = "Get list of suggested players by Name")
    @GetMapping("/players/suggestions/{term}")
    public List<Player> getPlayerNameBySuggestion(@PathVariable String term) {
        return playerService.getPlayersSuggestions(term);
    }

    @Operation(summary = "Get all players")
    @GetMapping("/players")
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }
}
