const { Team } = require('../Team.js');

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team({
      name: 'Ducks', wins: 6, losses: 2, overtimeLosses: 2,
    });
  });

  it('у `Team` есть атрибут name', () => {
    expect(team.name).toEqual('Ducks');
  });

  it('у `Team` есть атрибут wins', () => {
    expect(team.wins).toEqual(6);
  });

  it('у `Team` есть атрибут losses', () => {
    expect(team.losses).toEqual(2);
  });

  it('у `Team` есть атрибут overtimeLosses', () => {
    expect(team.overtimeLosses).toEqual(2);
  });
});
