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
        />
      </div>
      <TeamHeader name="P1" role="NORMAL" />
    </div>
  </div>
</template>

<script>
import HandGroup from '../components/HandGroup.vue'
import TeamHeader from '../components/TeamHeader.vue'
import {
  ALL_HANDSIDES,
  ALL_HAND_DIRECTIONS,
  ALL_HAND_POSTURES
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
      playerInput: ''
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
