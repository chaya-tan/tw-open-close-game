<template>
  <div>
    <img
      :src="
        require(`../assets/images/hands/${
          posture === ALL_HAND_POSTURES.open ? 'open-hand' : 'fist'
        }.svg`)
      "
      :class="imgClass"
    />
    <p>{{ handSide }}</p>
    <p>{{ handDirection }}</p>
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
    imgClass() {
      const postureClass =
        this.posture === ALL_HAND_POSTURES.open ? 'open' : 'close'
      const directionClass =
        this.handDirection === ALL_HAND_DIRECTIONS.downward && 'downward'
      const handSideClass =
        this.handSide === ALL_HANDSIDES.left ? 'left' : 'right'
      return `${postureClass} ${directionClass} ${handSideClass}`
    }
  }
}
</script>

<style scoped>
img {
  border: none;
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
</style>
