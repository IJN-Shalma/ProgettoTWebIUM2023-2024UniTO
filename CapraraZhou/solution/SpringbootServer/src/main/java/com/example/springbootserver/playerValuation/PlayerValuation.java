package com.example.springbootserver.playerValuation;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "player_valuations")
public class PlayerValuation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "player_id")
    private Long playerId;

    @Column(name = "last_season")
    private Integer lastSeason;

    @Column(name = "datetime")
    private LocalDateTime datetime;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "dateweek")
    private LocalDate dateweek;

    @Column(name = "market_value_in_eur")
    private Integer marketValueInEur;

    @Column(name = "n")
    private Integer n;

    @Column(name = "current_club_id")
    private Integer currentClubId;

    @Column(name = "player_club_domestic_competition_id")
    private String playerClubDomesticCompetitionId;

    public PlayerValuation(Long playerId, Integer lastSeason, LocalDateTime datetime, LocalDate date, LocalDate dateweek, Integer marketValueInEur, Integer n, Integer currentClubId, String playerClubDomesticCompetitionId) {
        this.playerId = playerId;
        this.lastSeason = lastSeason;
        this.datetime = datetime;
        this.date = date;
        this.dateweek = dateweek;
        this.marketValueInEur = marketValueInEur;
        this.n = n;
        this.currentClubId = currentClubId;
        this.playerClubDomesticCompetitionId = playerClubDomesticCompetitionId;
    }

    public PlayerValuation() {}

    public Long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Long playerId) {
        this.playerId = playerId;
    }

    public Integer getLastSeason() {
        return lastSeason;
    }

    public void setLastSeason(Integer lastSeason) {
        this.lastSeason = lastSeason;
    }

    public LocalDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(LocalDateTime datetime) {
        this.datetime = datetime;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDateweek() {
        return dateweek;
    }

    public void setDateweek(LocalDate dateweek) {
        this.dateweek = dateweek;
    }

    public Integer getMarketValueInEur() {
        return marketValueInEur;
    }

    public void setMarketValueInEur(Integer marketValueInEur) {
        this.marketValueInEur = marketValueInEur;
    }

    public Integer getN() {
        return n;
    }

    public void setN(Integer n) {
        this.n = n;
    }

    public Integer getCurrentClubId() {
        return currentClubId;
    }

    public void setCurrentClubId(Integer currentClubId) {
        this.currentClubId = currentClubId;
    }

    public String getPlayerClubDomesticCompetitionId() {
        return playerClubDomesticCompetitionId;
    }

    public void setPlayerClubDomesticCompetitionId(String playerClubDomesticCompetitionId) {
        this.playerClubDomesticCompetitionId = playerClubDomesticCompetitionId;
    }
}