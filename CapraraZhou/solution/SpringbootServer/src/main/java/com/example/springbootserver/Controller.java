package com.example.springbootserver;

import com.example.springbootserver.club.Club;
import com.example.springbootserver.club.ClubService;
import com.example.springbootserver.competition.Competition;
import com.example.springbootserver.competition.CompetitionCountry;
import com.example.springbootserver.competition.CompetitionService;
import com.example.springbootserver.player.Player;
import com.example.springbootserver.player.PlayerService;
import com.example.springbootserver.player.PlayerName;
import com.example.springbootserver.playerValuation.PlayerValuation;
import com.example.springbootserver.playerValuation.PlayerValuationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    private final ClubService clubService;
    private final CompetitionService competitionService;
    private final PlayerService playerService;

    private final PlayerValuationService playerValuationService;

    @Autowired
    public Controller(ClubService clubService, CompetitionService competitionService, PlayerService playerService, PlayerValuationService playerValuationService){
        this.clubService = clubService;
        this.competitionService = competitionService;
        this.playerService = playerService;
        this.playerValuationService = playerValuationService;
    }


    /* Player */
    @GetMapping("/players/topPlayers")
    public List<Player> getTopPlayers(){
        return playerService.getTopPlayers();
    }

    @GetMapping("/players/{playersIds}")
    public List<Player> getPlayerById(@PathVariable  List<Long> playersIds) {
        return playerService.getPlayersById(playersIds);
    }

    @GetMapping("/players/club/{clubId}")
    public List<Player> getPlayersByClubId(@PathVariable Long clubId) {
        return playerService.getPlayersByClub(clubId);
    }

    @GetMapping("/players/name/{id}")
    public List<PlayerName> getPlayerNameById(@PathVariable Long id) {return playerService.getPlayerNameById(id);}

    /* Competition */
    @GetMapping("/competitions/")
    public List<Competition> getCompetitions() {
        return competitionService.getAllCompetitions();
    }

    @GetMapping("/competitions/{competitionId}")
    public Competition getCompetitionById(@PathVariable String competitionId) {
        return competitionService.getCompetitionById(competitionId);
    }

    @GetMapping("/competitions/domestic")
    public List<Competition> getDomesticCompetitions() {
        return competitionService.getDomesticCompetitions();
    }

    @GetMapping("/competitions/international")
    public List<Competition> getInternationalCompetitions() {
        return competitionService.getInternationalCompetitions();
    }

    @GetMapping("/competitions/countries")
    public List<CompetitionCountry> getCountries() {
        return competitionService.getAllCountries();
    }

    /* PlayerValuation */
    @GetMapping("/valuations/{playerId}")
    public List<PlayerValuation> getPlayerValuations(@PathVariable Long playerId){
        return playerValuationService.getPlayerValuations(playerId);
    }

    /* Club */
    @GetMapping("/clubs/competition/{competitionId}")
    public List<Club> getClubsByCompetitionId(@PathVariable String competitionId){
        return clubService.getClubsByCompetitionId(competitionId);
    }

    @GetMapping("/clubs/{clubId}")
    public Club getClubById(@PathVariable Long clubId){
        return clubService.getClubById(clubId);
    }
}
