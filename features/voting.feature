Feature: See results
  
  This is the presidential race!
  The winner is up to you. On this page you can view the current
  positions of the candidates.

  As a voter
  I want to vote for my favorite candidate
  So that I can help my candidate win
  
  Background:
    Given There are four candidates
    And No votes are cast
  
  Scenario: No votes cast and I vote
    When I vote for "St. Bernard"
    Then "St. Bernard" is at first place
    And I see he has 1 point
  
  Scenario: Many votes
    Given "Dolan Drumpf" gets 50 votes
    And "Hillbilly Clintstones" gets 35 votes
    And "St. Bernard" gets 60 votes
    And "Teddy Cruuzevelt" gets 90 votes
    Then "Teddy Cruuzevelt" is at first place
    And "St. Bernard" is at second place
