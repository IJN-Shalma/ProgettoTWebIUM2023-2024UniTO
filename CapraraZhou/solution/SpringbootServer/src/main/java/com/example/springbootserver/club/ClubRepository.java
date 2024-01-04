package com.example.springbootserver.club;


import com.example.springbootserver.player.PlayerName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    List<Club> findAllByDomesticCompetitionId(String competitionId);

    @Query(value = "SELECT * FROM clubs c WHERE LOWER(c.name) LIKE LOWER(concat('%', :term, '%')) LIMIT 2", nativeQuery = true)
    List<Club> getClubsSuggestions(String term);
}
