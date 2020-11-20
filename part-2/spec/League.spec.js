const { Team } = require('../Team.js');
const { PointsCalculator } = require('../PointsCalculator.js');
const { League } = require('../League.js');

describe('League', () => {
  let blues;
  let capitals;
  let coyotes;
  let ducks;
  let flames;
  let jets;
  let penguins;
  let redWings;
  let teams = [];

  let calculator;

  let league;

  beforeAll(() => {
    blues = new Team({
      name: 'Blues', wins: 7, losses: 2, overtimeLosses: 1,
    });
    capitals = new Team({
      name: 'Capitals',
      wins: 5,
      losses: 4,
      overtimeLosses: 1,
    });
    coyotes = new Team({
      name: 'Coyotes',
      wins: 1,
      losses: 6,
      overtimeLosses: 3,
    });
    ducks = new Team({
      name: 'Ducks', wins: 6, losses: 0, overtimeLosses: 4,
    });
    flames = new Team({
      name: 'Flames',
      wins: 3,
      losses: 7,
      overtimeLosses: 0,
    });
    jets = new Team({
      name: 'Jets', wins: 9, losses: 0, overtimeLosses: 1,
    });
    penguins = new Team({
      name: 'Penguins',
      wins: 4,
      losses: 4,
      overtimeLosses: 2,
    });
    redWings = new Team({
      name: 'Red Wings',
      wins: 8,
      losses: 2,
      overtimeLosses: 1,
    });
    teams = [blues, capitals, coyotes, ducks, flames, jets, penguins, redWings];

    calculator = new PointsCalculator();
    league = new League({ teams, calculator });
  });

  it('у `league` есть атрибут teams', () => {
    expect(league.teams).toEqual(teams);
  });

  it('у `league` есть атрибут calculator', () => {
    expect(league.calculator).toEqual(calculator);
  });

  describe('🏆метод класса standings() у `League`', () => {
    it(' возвращает список команд, отсортированных по очкам в порядке убывания', () => {
      expect(league.standings()).toEqual([
        jets,
        redWings,
        ducks,
        blues,
        capitals,
        penguins,
        flames,
        coyotes,
      ]);
    });
  });

  describe('🏆метод класса playoffTeams() у `League`', () => {
    it(' возвращает половину teams в лиге', () => {
      expect(league.playoffTeams()).toEqual([jets, redWings, ducks, blues]);
    });
  });

  describe('🏆метод класса positionFor() у `League', () => {
    it('возвращает позицию команды по имени команды переданной в качестве аргумента метода ', () => {
      expect(league.positionFor('Jets')).toEqual(1);
      expect(league.positionFor('Flames')).toEqual(7);
    });
  });
});
