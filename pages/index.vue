<template>
  <div class="container">
    <div class="paper border border-primary">
      <h2 class="team-label">
        AI
        <span class="badge secondary">predictor</span>
      </h2>
      <Hand
        posture="CLOSE"
        :hand-side="ALL_HANDSIDES.right"
        :hand-direction="ALL_HAND_DIRECTIONS.downward"
      />
      <Hand
        posture="OPEN"
        :hand-side="ALL_HANDSIDES.left"
        :hand-direction="ALL_HAND_DIRECTIONS.downward"
      />
      <Hand
        posture="CLOSE"
        :hand-side="ALL_HANDSIDES.right"
        :hand-direction="ALL_HAND_DIRECTIONS.upward"
      />
      <Hand
        posture="OPEN"
        :hand-side="ALL_HANDSIDES.left"
        :hand-direction="ALL_HAND_DIRECTIONS.upward"
      />
      <h2 class="team-label">P1</h2>
      <div class="form-group">
        <label for="paperInputs1">This turn hands</label>
        <input id="paperInputs1" type="text" placeholder="OC2" />
      </div>
    </div>
  </div>
</template>

<script>
import Hand from '../components/Hand.vue'
import GameTurn from '../modules/GameTurn.js'
import { ALL_HANDSIDES, ALL_HAND_DIRECTIONS } from '../constants/constants.js'

const thisTurn = new GameTurn()
const { players, handPostures, thisTurnPredictor } = thisTurn

export default {
  components: {
    Hand
  },
  data() {
    return {
      players,
      handPostures,
      thisTurnPredictor,
      ALL_HANDSIDES,
      ALL_HAND_DIRECTIONS
    }
  }
}
</script>

<style scoped>
.team-label {
  text-align: center;
  margin: 0;
}
</style>
