<template>
  <div class="hand-container">
    <img
      :src="
        require(`../assets/images/hands/${
          posture === ALL_HAND_POSTURES.open ? 'open-hand' : 'fist'
        }.svg`)
      "
      :class="imgClass"
    />
    <p>{{ posture }}</p>
  </div>
</template>

<script>
import {
  ALL_HAND_POSTURES,
  ALL_HANDSIDES,
  ALL_HAND_DIRECTIONS
} from '../constants/constants.js'

export default {
  props: {
    posture: {
      type: String,
      default: ALL_HAND_POSTURES.open,
      required: false
    },
    handSide: {
      type: String,
      default: ALL_HANDSIDES.right,
      required: false
    },
    handDirection: {
      type: String,
      default: ALL_HAND_DIRECTIONS.downward,
      required: false
    }
  },
  data() {
    return {
      ALL_HAND_POSTURES
    }
  },
  computed: {
    postureClass() {
      return this.posture === ALL_HAND_POSTURES.open ? 'open' : 'close'
    },
    directionClass() {
      return this.handDirection === ALL_HAND_DIRECTIONS.downward && 'downward'
    },
    handSideClass() {
      return this.handSide === ALL_HANDSIDES.left ? 'left' : 'right'
    },
    imgClass() {
      return `${this.postureClass} ${this.directionClass} ${this.handSideClass}`
    }
  }
}
</script>

<style scoped>
.hand-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  border: none;
  height: 70px;
}
.open {
  width: 60px;
}
.close {
  width: 50px;
}
.left {
  transform: scaleX(-1);
}
.downward {
  transform: scaleY(-1);
}
.left.downward {
  transform: scaleX(-1) scaleY(-1);
}
</style>
