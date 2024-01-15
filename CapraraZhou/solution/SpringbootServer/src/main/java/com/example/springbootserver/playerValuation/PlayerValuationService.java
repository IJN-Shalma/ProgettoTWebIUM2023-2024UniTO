package com.example.springbootserver.playerValuation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerValuationService {
    private final PlayerValuationRepository playerValuationRepository;

    @Autowired
    public PlayerValuationService(PlayerValuationRepository playerValuationRepository){
        this.playerValuationRepository = playerValuationRepository;
    }

    public List<PlayerValuation> getPlayerValuations(Long playerId) {
        return playerValuationRepository.findAllByPlayerId(playerId);
    }

    public List<PlayerValuation> getAllPlayerValuations(){
        return playerValuationRepository.getAllPlayerValuations();
    }
}
