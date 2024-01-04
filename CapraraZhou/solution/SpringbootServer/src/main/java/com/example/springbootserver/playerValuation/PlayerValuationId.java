package com.example.springbootserver.playerValuation;

import jakarta.persistence.Column;

import java.io.Serializable;
import java.time.LocalDateTime;

public class PlayerValuationId implements Serializable {
    private Long playerId;

    private LocalDateTime datetime;

    PlayerValuationId(){};

    public PlayerValuationId(Long playerId, LocalDateTime datetime) {
        this.playerId = playerId;
        this.datetime = datetime;
    }
}
