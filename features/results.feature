Feature: See results
  
  This is the presidential race!!
  The winner is up to you. On this page you can view the current
  positions of the candidates.

  As a voter
  I want to see the current state of the race
  So that I can cheer my favorite on!
  
  Background:
    Given I am on the results page page
    And There are four candidates
    And No votes are cast
  
  Scenario: No votes cast
    Given No votes are cast
    Then The rank is random
    And everyone are at the starting position
  
  Scenario: Drumpf leads by 10 votes
    Given "Dolan Drumpf" has 10 votes
    Then "Dolan Drumpf" is at first place
