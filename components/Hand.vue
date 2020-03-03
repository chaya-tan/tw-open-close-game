<template>
  <div>
    <img
      :src="
        require(`../assets/images/hands/${
          posture === handPostures.open ? 'open-hand' : 'fist'
        }.svg`)
      "
      :class="imgClass"
    />
    <p>{{ handSide }}</p>
    <p>{{ handDirection }}</p>
  </div>
</template>

<script>
import GameTurn from '../modules/GameTurn'
import { ALL_HANDSIDES, ALL_HAND_DIRECTIONS } from '../constants/constants.js'

const { handPostures } = new GameTurn()

export default {
  props: {
    posture: {
      type: String,
      default: handPostures.open,
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
      handPostures
    }
  },
  computed: {
    imgClass() {
      const postureClass = this.posture === handPostures.open ? 'open' : 'close'
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
