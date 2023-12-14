package com.example.springbootserver.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query(value = "SELECT * FROM players p " +
            "WHERE p.market_value_in_eur IS NOT NULL " +
            "ORDER BY market_value_in_eur DESC " +
            "LIMIT 3",nativeQuery = true)
    List<Player> getTopPlayers();
}
