package com.example.springbootserver.playerValuation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerValuationRepository extends JpaRepository<PlayerValuation, Long> {
    @Query(value = "SELECT * FROM player_valuations pv WHERE pv.player_id = :playerId ORDER BY pv.date DESC LIMIT 10", nativeQuery = true)
    List<PlayerValuation> findAllByPlayerId(Long playerId);

    @Query(value = "SELECT * FROM player_valuations pv", nativeQuery = true)
    List<PlayerValuation> getAllPlayerValuations();
}
