class Team {
  constructor(options = {}) {
    this.losses = options.losses || 0;
    this.name = options.name || '';
    this.overtimeLosses = options.overtimeLosses || 0;
    this.wins = options.wins || 0;
  }
}

module.exports = { Team };
