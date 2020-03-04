<template>
  <div class="how-to">
    <div class="row flex-spaces">
      <label for="modal-1"><a class="how-to-link">How to play</a></label>
    </div>
    <input id="modal-1" class="modal-state" type="checkbox" />
    <div class="modal">
      <label class="modal-bg" for="modal-1"></label>
      <div class="modal-body">
        <label class="btn-close" for="modal-1">X</label>
        <h4 class="modal-title">HOW TO PLAY</h4>
        <h5 class="modal-title">Rules of the game:</h5>
        <p class="modal-text">
          This game is a prediction game. One player is the predictor in each
          turn. He/she has to predict how many open hands in totals. Every
          player has to show 2 hands, either OPEN or CLOSE. the predictor is
          changed in each round. The player who predict correctly is win.
        </p>
        <h5 class="modal-title">How to play:</h5>
        <p class="modal-text">
          You have to enter your hand in the next turn in these formats: 'OC2'
          for predictor or 'OC' for the others
        </p>
        <h5 class="modal-title">Input format description:</h5>
        <p class="modal-text">
          'O' is for 'O'pen and 'C' is for 'C'lose. The first character mean the
          left hand. The second is the right hand. If you are the predictor in
          the next turn, you must specify the third charactor that is the
          prediction. For example, 'OC2' means 'open the left hand, close the
          right hand and predict total open hands to 2'
        </p>
        <h5 class="modal-title">Tips:</h5>
        <p class="modal-text">
          There are 2 players right now so the prediction should be 0-4!
        </p>
        <label for="modal-1">GOT IT!</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.how-to {
  display: flex;
  justify-content: center;
}
.how-to-link {
  line-height: 2em;
}
</style>
