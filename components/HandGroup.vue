<template>
  <div class="player-hands-group">
    <Hand
      :posture="leftPosture"
      :hand-side="HANDSIDES.left"
      :hand-direction="direction"
    />
    <Hand
      :posture="rightPosture"
      :hand-side="HANDSIDES.right"
      :hand-direction="direction"
    />
  </div>
</template>

<script>
import Hand from '../components/Hand.vue'
import { HAND_DIRECTIONS, POSTURES, HANDSIDES } from '../constants/constants.js'

export default {
  components: {
    Hand
  },
  props: {
    direction: {
      type: String,
      required: false,
      default: HAND_DIRECTIONS.upward
    },
    leftPosture: {
      type: String,
      required: false,
      default: POSTURES.open
    },
    rightPosture: {
      type: String,
      required: false,
      default: POSTURES.open
    }
  },
  data() {
    return {
      HAND_DIRECTIONS,
      POSTURES,
      HANDSIDES
    }
  }
}
</script>

<style scoped>
.player-hands-group {
  display: flex;
  justify-content: center;
}
</style>
