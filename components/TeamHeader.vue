<template>
  <h3 class="team-label">
    {{ name }}
    <span v-if="role === ROLES.predictor" class="badge secondary"
      >predict: {{ prediction }}</span
    >
    <span v-if="role === ROLES.predictor && won" class="badge success"
      >WON!</span
    >
  </h3>
</template>

<script>
import { ROLES } from '../constants/constants.js'

export default {
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    role: {
      type: String,
      required: false,
      default: 'NORMAL'
    },
    prediction: {
      type: Number,
      required: false,
      default: 0
    },
    won: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      ROLES
    }
  }
}
</script>

<style scoped>
.team-label {
  text-align: center;
  margin: 0 0 15px 0;
}
</style>
