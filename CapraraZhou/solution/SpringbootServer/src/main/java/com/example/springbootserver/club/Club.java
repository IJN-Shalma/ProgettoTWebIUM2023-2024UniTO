package com.example.springbootserver.club;

import jakarta.persistence.*;

@Entity
@Table(name = "clubs")
public class Club {
    @Id
    @Column(name = "club_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "club_code")
    private String clubCode;

    @Column(name = "name")
    private String name;

    @Column(name = "domestic_competition_id")
    private String domesticCompetitionId;

    @Column(name = "total_market_value")
    private Integer totalMarketValue;

    @Column(name = "squad_size")
    private Integer squadSize;

    @Column(name = "average_age")
    private double averageAge;

    @Column(name = "foreigners_number")
    private Integer foreignersNumber;

    @Column(name = "foreigners_percentage")
    private double foreignersPercentage;

    @Column(name = "national_team_players")
    private Integer nationalTeamPlayers;

    @Column(name = "stadium_name")
    private String stadiumName;

    @Column(name = "stadium_seats")
    private Integer stadiumSeats;

    @Column(name = "net_transfer_record")
    private String netTransferRecord;

    @Column(name = "coach_name")
    private String coachName;

    @Column(name = "last_season")
    private Integer lastSeason;

    @Column(name = "url")
    private String url;

    public Club(Long id, String clubCode, String name, String domesticCompetitionId, int totalMarketValue, int squadSize, double averageAge, int foreignersNumber, double foreignersPercentage, int nationalTeamPlayers, String stadiumName, int stadiumSeats, String netTransferRecord, String coachName, int lastSeason, String url) {
        this.id = id;
        this.clubCode = clubCode;
        this.name = name;
        this.domesticCompetitionId = domesticCompetitionId;
        this.totalMarketValue = totalMarketValue;
        this.squadSize = squadSize;
        this.averageAge = averageAge;
        this.foreignersNumber = foreignersNumber;
        this.foreignersPercentage = foreignersPercentage;
        this.nationalTeamPlayers = nationalTeamPlayers;
        this.stadiumName = stadiumName;
        this.stadiumSeats = stadiumSeats;
        this.netTransferRecord = netTransferRecord;
        this.coachName = coachName;
        this.lastSeason = lastSeason;
        this.url = url;
    }

    public Club(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClubCode() {
        return clubCode;
    }

    public void setClubCode(String clubCode) {
        this.clubCode = clubCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDomesticCompetitionId() {
        return domesticCompetitionId;
    }

    public void setDomesticCompetitionId(String domesticCompetitionId) {
        this.domesticCompetitionId = domesticCompetitionId;
    }

    public Integer getTotalMarketValue() {
        return totalMarketValue;
    }

    public void setTotalMarketValue(Integer totalMarketValue) {
        this.totalMarketValue = totalMarketValue;
    }

    public Integer getSquadSize() {
        return squadSize;
    }

    public void setSquadSize(Integer squadSize) {
        this.squadSize = squadSize;
    }

    public double getAverageAge() {
        return averageAge;
    }

    public void setAverageAge(double averageAge) {
        this.averageAge = averageAge;
    }

    public Integer getForeignersNumber() {
        return foreignersNumber;
    }

    public void setForeignersNumber(Integer foreignersNumber) {
        this.foreignersNumber = foreignersNumber;
    }

    public double getForeignersPercentage() {
        return foreignersPercentage;
    }

    public void setForeignersPercentage(double foreignersPercentage) {
        this.foreignersPercentage = foreignersPercentage;
    }

    public Integer getNationalTeamPlayers() {
        return nationalTeamPlayers;
    }

    public void setNationalTeamPlayers(Integer nationalTeamPlayers) {
        this.nationalTeamPlayers = nationalTeamPlayers;
    }

    public String getStadiumName() {
        return stadiumName;
    }

    public void setStadiumName(String stadiumName) {
        this.stadiumName = stadiumName;
    }

    public Integer getStadiumSeats() {
        return stadiumSeats;
    }

    public void setStadiumSeats(Integer stadiumSeats) {
        this.stadiumSeats = stadiumSeats;
    }

    public String getNetTransferRecord() {
        return netTransferRecord;
    }

    public void setNetTransferRecord(String netTransferRecord) {
        this.netTransferRecord = netTransferRecord;
    }

    public String getCoachName() {
        return coachName;
    }

    public void setCoachName(String coachName) {
        this.coachName = coachName;
    }

    public Integer getLastSeason() {
        return lastSeason;
    }

    public void setLastSeason(Integer lastSeason) {
        this.lastSeason = lastSeason;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
