package com.example.springbootserver.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }

    public List<Player> getTopPlayers() {
        return playerRepository.getTopPlayers();
    }

    public List<Player> getPlayersById(List<Long> ids){
        return playerRepository.getPlayersById(ids);
    }

    public List<Player> getPlayersByClub(Long clubId) {
        return playerRepository.getPlayersByClubId(clubId);
    }

    public List<PlayerName> getPlayerNameById(Long id) {return playerRepository.getPlayerNameById(id);}

    public List<Player> getPlayersSuggestions(String term) {
        return playerRepository.getPlayersSuggestions(term);
    }

    public List<Player> getAllPlayers(){
        return playerRepository.getAll();
    }
}
