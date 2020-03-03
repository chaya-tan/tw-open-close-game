<template>
  <div class="container">
    <div class="paper border border-primary">
      <h2 class="team-label">
        AI
        <span class="badge secondary">predictor</span>
      </h2>

      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.downward"
        :left-posture="ALL_HAND_POSTURES.open"
        :right-posture="ALL_HAND_POSTURES.close"
      />

      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.upward"
        :left-posture="ALL_HAND_POSTURES.close"
        :right-posture="ALL_HAND_POSTURES.close"
      />

      <div class="form-group">
        <label for="player-input"
          >This turn hands. 'O' for open and 'C' for close</label
        >
        <input
          id="player-input"
          class="player-input"
          type="text"
          placeholder="OC2"
        />
      </div>
      <h2 class="team-label">P1</h2>
    </div>
  </div>
</template>

<script>
import HandGroup from '../components/HandGroup.vue'
import GameTurn from '../modules/GameTurn.js'
import {
  ALL_HANDSIDES,
  ALL_HAND_DIRECTIONS,
  ALL_HAND_POSTURES
} from '../constants/constants.js'

const thisTurn = new GameTurn()
const { players, thisTurnPredictor } = thisTurn

export default {
  components: {
    HandGroup
  },
  data() {
    return {
      players,
      ALL_HAND_POSTURES,
      thisTurnPredictor,
      ALL_HANDSIDES,
      ALL_HAND_DIRECTIONS
    }
  }
}
</script>

<style scoped>
.paper {
  height: 95vh;
}
.team-label {
  text-align: center;
  margin: 0;
}
.player-hands-group {
  display: flex;
  justify-content: center;
}
.player-input {
  width: 3em;
}
</style>
