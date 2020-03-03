<template>
  <div class="container">
    <div class="paper border border-primary">
      <Game />
    </div>
  </div>
</template>

<script>
import Game from '../components/Game.vue'

export default {
  components: {
    Game
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
</style>
