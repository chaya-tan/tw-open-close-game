<template>
  <div class="hand-container">
    <img
      :src="
        require(`../assets/images/hands/${
          posture === POSTURES.open ? 'open-hand' : 'fist'
        }.svg`)
      "
      :class="imgClass"
    />
    <p>{{ posture }}</p>
  </div>
</template>

<script>
import { POSTURES, HANDSIDES, HAND_DIRECTIONS } from '../constants/constants.js'

export default {
  props: {
    posture: {
      type: String,
      default: POSTURES.open,
      required: false
    },
    handSide: {
      type: String,
      default: HANDSIDES.right,
      required: false
    },
    handDirection: {
      type: String,
      default: HAND_DIRECTIONS.downward,
      required: false
    }
  },
  data() {
    return {
      POSTURES
    }
  },
  computed: {
    postureClass() {
      return this.posture === POSTURES.open ? 'open' : 'close'
    },
    directionClass() {
      return this.handDirection === HAND_DIRECTIONS.downward && 'downward'
    },
    handSideClass() {
      return this.handSide === HANDSIDES.left ? 'left' : 'right'
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
