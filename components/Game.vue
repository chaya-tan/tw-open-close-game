<template>
  <div>
    <div class="opposite">
      <TeamHeader :name="players[0].name" :role="players[0].role" />
      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.downward"
        :left-posture="playersHands[0].left"
        :right-posture="playersHands[0].right"
      />
    </div>

    <div class="game-status">
      <p>TOTAL OPENED HANDS: {{ totalOpenHands }}</p>
      <p>PREDICTION: {{ prediction }}</p>
    </div>

    <div class="player">
      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.upward"
        :left-posture="playersHands[1].left"
        :right-posture="playersHands[1].right"
      />

      <div class="form-group">
        <label for="player-input">Next turn hands.</label>
        <input
          id="player-input"
          v-model="userInput"
          class="player-input"
          type="text"
          placeholder="OC2"
        />
      </div>
      <TeamHeader :name="players[1].name" :role="players[1].role" />
    </div>
  </div>
</template>

<script>
import HandGroup from '../components/HandGroup.vue'
import TeamHeader from '../components/TeamHeader.vue'
import {
  ALL_HANDSIDES,
  ALL_HAND_DIRECTIONS,
  ALL_HAND_POSTURES,
  ROLES
} from '../constants/constants.js'

export default {
  components: {
    HandGroup,
    TeamHeader
  },
  data() {
    return {
      ALL_HAND_POSTURES,
      ALL_HANDSIDES,
      ALL_HAND_DIRECTIONS,
      userInput: '',
      players: [
        { name: 'AI', hands: 'CO2', role: 'PREDICTOR' },
        { name: 'P1', hands: 'OC', role: 'NORMAL' }
      ]
    }
  },
  computed: {
    totalOpenHands() {
      let totalOpenHands = 0
      this.players.map((player) => {
        const thisPlayerTotalOpenHand = (player.hands.match(/O/g) || []).length
        totalOpenHands += thisPlayerTotalOpenHand
      })
      return totalOpenHands
    },
    prediction() {
      const predictor = this.players.filter(
        (player) => player.role === ROLES.predictor
      )
      const predictionArray = predictor[0].hands.match(/[0-9]/g)
      const predictionNumber = parseInt(predictionArray[0])
      return predictionNumber
    },
    isPredictionCorrect() {
      return this.totalOpenHands === this.prediction
    },
    playersHands() {
      const hands = this.players.map((player) => {
        const left = player.hands.substring(0, 1)
        const right = player.hands.substring(1, 2)
        return { left, right }
      })
      return hands
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
