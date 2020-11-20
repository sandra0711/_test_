const { Team } = require('../Team.js');
const { PointsCalculator } = require('../PointsCalculator.js');

describe('PointsCalculator', () => {
  let ducks;
  let calculator;

  beforeEach(() => {
    ducks = new Team({
      name: 'Ducks', wins: 6, losses: 2, overtimeLosses: 2,
    });
    calculator = new PointsCalculator();
  });

  it('высчитывает очки для команды', () => {
    expect(calculator.pointsForTeam(ducks)).toEqual(14);
  });
});
