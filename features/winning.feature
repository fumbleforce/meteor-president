Feature: Contender wins
  
  Once a contender wins, we want to show a victory screen
  and allow for a reset

  As a voter
  I want to see a victory screen when the race is over
  So that I can reset the race
  
  Background:
    Given There are four candidates
    And No votes are cast
  
  @focus
  Scenario: St. Bernard wins
    Given "Dolan Drumpf" gets 10 votes
    And "Hillbilly Clintstones" gets 25 votes
    And "St. Bernard" gets 101 votes
    And "Teddy Cruuzevelt" gets 3 votes
    Then I see the victory screen
    And "St. Bernard" is on the victory screen
