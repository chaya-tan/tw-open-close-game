<template>
  <div>
    <div class="opposite">
      <TeamHeader
        :name="players[0].name"
        :role="players[0].role"
        :prediction="predictionNumber"
        :won="isPredictionCorrect"
      />
      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.downward"
        :left-posture="playersHands[0].left"
        :right-posture="playersHands[0].right"
      />
    </div>

    <div class="player">
      <HandGroup
        :direction="ALL_HAND_DIRECTIONS.upward"
        :left-posture="playersHands[userIndex].left"
        :right-posture="playersHands[userIndex].right"
      />
      <TeamHeader
        :name="players[userIndex].name"
        :role="players[userIndex].role"
        :prediction="predictionNumber"
        :won="isPredictionCorrect"
      />

      <div class="border-dotted border-thick">
        <div v-if="isPredictionCorrect" class="form-group">
          GAME END!
          <button @click="reloadPage">PLAY AGAIN</button>
        </div>
        <div v-else class="form-group">
          <p>
            Next turn you are
            {{ nextTurnUserIsPredictor ? 'predictor' : 'non-predictor' }}.
          </p>
          <input
            id="player-input"
            v-model="userInput"
            class="player-input"
            type="text"
            :placeholder="userInputPlaceholder"
            @input="onInput"
            @keyup.enter="onSubmit"
          />
          <p class="text-danger">{{ formatWarning }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HandGroup from '../components/HandGroup.vue'
import TeamHeader from '../components/TeamHeader.vue'
import {
  ALL_HANDSIDES,
  ALL_HAND_DIRECTIONS,
  POSTURES,
  ROLES,
  REGEX
} from '../constants/constants.js'

export default {
  components: {
    HandGroup,
    TeamHeader
  },
  data() {
    return {
      POSTURES,
      ALL_HANDSIDES,
      ALL_HAND_DIRECTIONS,
      userInput: '',
      formatWarning: '',
      players: [
        { name: 'AI', hands: 'CO1', role: ROLES.predictor },
        { name: 'YOU', hands: 'OC', role: ROLES.normal }
      ],
      userIndex: 1,
      ROLES
    }
  },
  computed: {
    totalOpenHands() {
      let totalOpenHands = 0
      this.players.map((player) => {
        const thisPlayerTotalOpenHand = (player.hands.match(/O/g) || []).length
        totalOpenHands += thisPlayerTotalOpenHand
      })
      return totalOpenHands
    },
    predictionNumber() {
      const predictor = this.players.filter(
        (player) => player.role === ROLES.predictor
      )
      const predictionArray = predictor[0].hands.match(/[0-9]/g)
      const predictionNumber = parseInt(predictionArray[0])
      return predictionNumber
    },
    isPredictionCorrect() {
      return this.totalOpenHands === this.predictionNumber
    },
    playersHands() {
      const hands = this.players.map((player) => {
        const left = player.hands.substring(0, 1)
        const right = player.hands.substring(1, 2)
        return { left, right }
      })
      return hands
    },
    inputLength() {
      return this.userInput.length
    },
    userIsPredictor() {
      return this.players[this.userIndex].role === ROLES.predictor
    },
    nextTurnRole() {
      return this.players.map((player) => {
        if (player.role === ROLES.predictor)
          return { name: player.name, role: ROLES.normal }
        if (player.role === ROLES.normal)
          return { name: player.name, role: ROLES.predictor }
      })
    },
    nextTurnUserIsPredictor() {
      return this.nextTurnRole[this.userIndex].role === ROLES.predictor
    },

    isInputCorrect() {
      if (this.nextTurnUserIsPredictor) {
        return this.isPredictorInputFormat(this.userInput)
      } else {
        return this.isNormalInputFormat(this.userInput)
      }
    },
    userInputPlaceholder() {
      if (this.nextTurnUserIsPredictor) {
        return 'CO3'
      } else {
        return 'OC'
      }
    }
  },
  methods: {
    isHandPostureFormat(lastLetter) {
      return (lastLetter.match(/O|C/g) || []).length > 0
    },
    isPredictionFormat(predictionLetter) {
      return (predictionLetter.match(/[0-4]/g) || []).length > 0
    },
    deleteLastLetterInUserInput() {
      const userInput = this.userInput
      this.userInput = userInput.substr(0, userInput.length - 1)
    },
    deleteAndWarnIfPostoreFormatWrong(lastLetter) {
      if (this.isHandPostureFormat(lastLetter)) {
        this.formatWarning = ''
      } else {
        this.deleteLastLetterInUserInput()
        this.formatWarning = 'Only O or C for the first 2'
      }
    },
    deleteAndWarnIfPredictionFormatWrong(lastLetter) {
      if (this.isPredictionFormat(lastLetter)) {
        this.formatWarning = ''
      } else {
        this.deleteLastLetterInUserInput()
        this.formatWarning = 'Only 0-4 for the prediction'
      }
    },
    checkUserInputFormat(lastLetter) {
      if (this.inputLength > 0 && this.inputLength < 3) {
        this.deleteAndWarnIfPostoreFormatWrong(lastLetter)
      } else if (this.inputLength === 3) {
        if (this.nextTurnUserIsPredictor) {
          this.deleteAndWarnIfPredictionFormatWrong(lastLetter)
        } else {
          this.formatWarning =
            'only 2 letter allowed for non-predictor! hit ENTER to submit'
          this.deleteLastLetterInUserInput()
        }
      } else if (this.inputLength > 3) {
        this.formatWarning =
          'only 3 letter allowed for predictor!  hit ENTER to submit'
        this.deleteLastLetterInUserInput()
      }
    },
    onInput(e) {
      if (e.inputType === 'insertText') {
        const lastLetter = e.data.toUpperCase()
        this.userInput = this.userInput.toUpperCase()
        this.checkUserInputFormat(lastLetter)
      } else if (e.inputType === 'deleteContentBackward') {
        this.formatWarning = ''
      }
    },
    randomHands(role) {
      const totalHands = 2
      const possileHands = Object.values(POSTURES)
      let randomResult = ''
      for (let hand = 0; hand < totalHands; hand++) {
        randomResult +=
          possileHands[Math.floor(Math.random() * possileHands.length)]
      }
      if (role === ROLES.predictor) {
        randomResult += Math.ceil(Math.random() * 4)
      }
      return randomResult
    },
    isPredictorInputFormat(input) {
      return (
        (input.match(REGEX.predictor) || []).length > 0 && input.length === 3
      )
    },
    isNormalInputFormat(input) {
      return (input.match(REGEX.normal) || []).length > 0 && input.length === 2
    },
    setNextTurn(input) {
      const nextTurnPlayers = this.nextTurnRole.map((player) => {
        return {
          name: player.name,
          role: player.role,
          hands: this.randomHands(player.role)
        }
      })
      nextTurnPlayers[this.userIndex].hands = input
      this.players = nextTurnPlayers
    },
    onSubmit(e) {
      if (this.isInputCorrect) {
        this.setNextTurn(this.userInput)
      } else {
        this.formatWarning = `Please input in format ${
          this.nextTurnUserIsPredictor ? 'OC3' : 'OC'
        } while 'O' = open, 'C' = close ${this.nextTurnUserIsPredictor &&
          'and number 0-4 for total open hands prediction'}`
      }
    },
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}
.team-label {
  text-align: center;
  margin: 0;
}
.player-hands-group {
  display: flex;
  justify-content: center;
}
.player-input {
  width: 3em;
}
</style>
