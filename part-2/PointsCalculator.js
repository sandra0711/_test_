const {Team} = require('./Team.js');

class PointsCalculator {
  constructor() {
    this.WINS = 2;
    this.LOSSES = 0;
    this.OVERTIME_LOSSES = 1;
  }

  pointsForTeam(team) {
    // Умеет считать очки команды `team`.
    return (team.wins * this.WINS
      + team.losses * this.LOSSES
      + team.overtimeLosses * this.OVERTIME_LOSSES
    );
  }
}

module.exports = { PointsCalculator };
