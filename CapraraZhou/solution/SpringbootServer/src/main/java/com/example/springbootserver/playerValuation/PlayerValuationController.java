package com.example.springbootserver.playerValuation;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name= "Player Valuation")
public class PlayerValuationController {
    private final PlayerValuationService playerValuationService;

    @Autowired
    public PlayerValuationController(PlayerValuationService playerValuationService) {
        this.playerValuationService = playerValuationService;
    }

    @Operation(summary = "Get list of all players valuations")
    @GetMapping("/valuations")
    public List<PlayerValuation> getAllPlayerValuations(){
        return playerValuationService.getAllPlayerValuations();
    }

    @Operation(summary = "Get list of player valuations")
    @GetMapping("/valuations/{playerId}")
    public List<PlayerValuation> getPlayerValuations(@PathVariable Long playerId){
        return playerValuationService.getPlayerValuations(playerId);
    }
}
