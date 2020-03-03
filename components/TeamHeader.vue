<template>
  <h2 class="team-label">
    {{ name }}
    <span v-if="role === ROLES.predictor" class="badge secondary"
      >predictor</span
    >
  </h2>
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
    }
  },
  data() {
    return {
      ROLES
    }
  }
}
</script>
