 const {numPointsScored, shoeSize, teamColors, teamNames, playerNumbers, playerStats, bigShoeRebounds, mostPointsScored, winningTeam, playerWithLongestName, doesLongNameStealATon} = require("../index.js");

describe('Basketball Stats', () => {
  
  describe('numPointsScored', function () {
    test('should return points scored by a player', () => {
      expect(numPointsScored('Alan Anderson')).toEqual(22);
      expect(numPointsScored('Ben Gordon')).toEqual(33);
    });
  });

  describe('shoeSize',() => {
    test('should return shoe size of a player', () => {
      expect(shoeSize('Alan Anderson')).toEqual(16);
      expect(shoeSize('Ben Gordon')).toEqual(15);
    });
  });
  
  describe('teamColors', () => {
    test('should return team colors', () => {
      expect(teamColors('Brooklyn Nets')).toEqual(['Black', 'White']);
      expect(teamColors('Charlotte Hornets')).toEqual(['Turquoise', 'Purple']);
    });
  });
  
  describe('teamNames', () => {
    test('should return team names', () => {
      expect(teamNames()).toEqual(['Brooklyn Nets', 'Charlotte Hornets']);
    });
  });

  describe('playerNumbers', () => {
    test('should return player numbers of a team', () => {
      expect(playerNumbers('Brooklyn Nets')).toEqual([0, 30, 11, 1, 31]);
      expect(playerNumbers('Charlotte Hornets')).toEqual([4, 0, 2, 8, 33]);
    });
  });

  describe('playerStats', function () {
    test('should return stats of a player',  () => {
      expect(playerStats('Alan Anderson')).toEqual({
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      });

      expect(playerStats('Ben Gordon')).toEqual({
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      });
    });
  });

  describe('bigShoeRebounds', () => {
    test('should return number of rebounds for the player with the biggest shoe',  () => {
      expect(bigShoeRebounds()).toEqual(12);
    });
  });

  describe("mostPointsScored", ()=> {
    test("Should return a number indicating the most points scored from the gameData object", ()=>{
      expect(mostPointsScored()).toEqual(33);
    });
  });

  describe("winningTeam", ()=>{
    test("Should return the winning team by comparing which team scored the most points", () => {
      expect(winningTeam()).toEqual("Brooklyn Nets");
    });
  });

  describe("playerWithLongestName", ()=>{
    test("Should return the player with the longest name from the gameObject() data", ()=> {
      expect(playerWithLongestName()).toEqual("Bismack Biyombo");
    });
  });

  describe("doesLongNameStealaTon", () => {
    test("Should return a boolean value indicating whether the player with the longest name has the most steals in a game obtained from gameObject", () => {
      expect(doesLongNameStealATon()).toBe(false);
    });
  })
});

