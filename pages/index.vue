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
.container {
  display: flex;
  justify-content: center;
}
.paper {
  height: 95vh;
  min-height: 700px;
  min-width: 420px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
  .paper {
    border: none;
    box-shadow: none;
  }
}
</style>
