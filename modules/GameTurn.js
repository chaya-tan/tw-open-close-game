class GameTurn {
  constructor() {
    this.players = {
      ai: 'AI',
      player1: 'P1'
    }
    this.handPostures = {
      open: 'OPEN',
      close: 'CLOSE'
    }
    this.thisTurnPredictor = this.players.ai
  }
}

export default GameTurn
