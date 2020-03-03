<template>
  <div>
    <div class="opposite">
      <TeamHeader name="AI" role="PREDICTOR" />
      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.downward"
        :left-posture="ALL_HAND_POSTURES.close"
        :right-posture="ALL_HAND_POSTURES.close"
      />
    </div>

    <div class="game-status">
      <p>TOTAL OPENED HANDS:</p>
      <p>PREDICTION:</p>
    </div>

    <div class="player">
      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.upward"
        :left-posture="ALL_HAND_POSTURES.close"
        :right-posture="ALL_HAND_POSTURES.close"
      />

      <div class="form-group">
        <label for="player-input">Next turn hands.</label>
        <input
          id="player-input"
          v-model="playerInput"
          class="player-input"
          type="text"
          placeholder="OC2"
          @change="onPlayerInputChange"
          @enter="onPlayerInputSubmit"
        />
      </div>
      <TeamHeader name="P1" role="NORMAL" />
    </div>
  </div>
</template>

<script>
import HandGroup from '../components/HandGroup.vue'
import TeamHeader from '../components/TeamHeader.vue'
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
    HandGroup,
    TeamHeader
  },
  data() {
    return {
      players,
      ALL_HAND_POSTURES,
      thisTurnPredictor,
      ALL_HANDSIDES,
      ALL_HAND_DIRECTIONS,
      playerInput: ''
    }
  },
  methods: {
    onPlayerInputChange(e) {
      const input = e.target.value
      console.log('change', input)
    },
    onPlayerInputSubmit(e) {
      const input = e.target.value
      console.log('submit', input)
    }
  }
}
</script>

<style scoped>
.paper {
  height: 95vh;
  min-height: 700px;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
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
