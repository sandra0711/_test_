const { PointsCalculator } = require('./PointsCalculator.js');


class League {
  constructor(options = {}) {
    this.teams = options.teams || [];
    this.calculator = options.calculator || new PointsCalculator();
  }
  standings() {
    return this.teams.sort((a, b) => (this.calculator.pointsForTeam(b) - this.calculator.pointsForTeam(a)));
  }
  playoffTeams() {
    return this.standings().slice(0, Math.floor(this.teams.length/2));
  }
  positionFor(teamName) {
    let team = this.teams.find(team => team.name === teamName);
    return this.standings().indexOf(team) + 1;
   
  }
}

module.exports = { League };
