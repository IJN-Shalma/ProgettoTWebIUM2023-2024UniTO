package com.example.springbootserver.playerValuation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerValuationController {
    private final PlayerValuationService playerValuationService;

    @Autowired
    public PlayerValuationController(PlayerValuationService playerValuationService) {
        this.playerValuationService = playerValuationService;
    }

    /* PlayerValuation */
    @GetMapping("/valuations/{playerId}")
    public List<PlayerValuation> getPlayerValuations(@PathVariable Long playerId){
        return playerValuationService.getPlayerValuations(playerId);
    }
}
