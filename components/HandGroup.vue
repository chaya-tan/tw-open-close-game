<template>
  <div class="player-hands-group">
    <Hand
      :posture="leftPosture"
      :hand-side="ALL_HANDSIDES.left"
      :hand-direction="direction"
    />
    <Hand
      :posture="rightPosture"
      :hand-side="ALL_HANDSIDES.right"
      :hand-direction="direction"
    />
  </div>
</template>

<script>
import Hand from '../components/Hand.vue'
import {
  ALL_HAND_DIRECTIONS,
  ALL_HAND_POSTURES,
  ALL_HANDSIDES
} from '../constants/constants.js'

export default {
  components: {
    Hand
  },
  props: {
    direction: {
      type: String,
      required: false,
      default: ALL_HAND_DIRECTIONS.upward
    },
    leftPosture: {
      type: String,
      required: false,
      default: ALL_HAND_POSTURES.open
    },
    rightPosture: {
      type: String,
      required: false,
      default: ALL_HAND_POSTURES.open
    }
  },
  data() {
    return {
      ALL_HAND_DIRECTIONS,
      ALL_HAND_POSTURES,
      ALL_HANDSIDES
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
