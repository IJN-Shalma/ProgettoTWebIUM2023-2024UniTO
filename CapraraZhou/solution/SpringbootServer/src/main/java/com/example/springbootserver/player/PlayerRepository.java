package com.example.springbootserver.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query(value = "SELECT * FROM players p WHERE p.market_value_in_eur IS NOT NULL ORDER BY market_value_in_eur DESC LIMIT 3", nativeQuery = true)
    List<Player> getTopPlayers();

    @Query(value = "SELECT * FROM players p WHERE p.player_id IN(:ids)", nativeQuery = true)
    List<Player> getPlayersById(List<Long> ids);

    @Query(value = "SELECT * FROM players p WHERE p.current_club_id = :clubId", nativeQuery = true)
    List<Player> getPlayersByClubId(Long clubId);

    @Query(value = "SELECT name as playerName, player_id as id FROM players p WHERE p.player_id = :id", nativeQuery = true)
    List<PlayerName> getPlayerNameById(Long id);
}
