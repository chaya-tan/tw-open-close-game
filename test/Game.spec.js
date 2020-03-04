import { shallowMount } from '@vue/test-utils'
import { ROLES, REGEX } from '../constants/constants.js'
import Game from '@/components/Game.vue'

const wrapper = shallowMount(Game)

describe('Game', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('Check win or lose', () => {
    test('count open hands correctly', () => {
      const sampleGamePlayers = [
        { name: 'AI', hands: 'CO2', role: ROLES.predictor },
        { name: 'P1', hands: 'OO', role: ROLES.normal }
      ]
      wrapper.vm.players = sampleGamePlayers
      expect(wrapper.vm.totalOpenHands).toBe(3)
    })
    test('can get prediction number from predictor', () => {
      const sampleGamePlayers = [
        { name: 'AI', hands: 'CO4', role: ROLES.predictor },
        { name: 'P1', hands: 'OO', role: ROLES.normal }
      ]
      wrapper.vm.players = sampleGamePlayers
      expect(wrapper.vm.predictionNumber).toBe(4)
    })
    test('know whether the prediction is true', () => {
      const sampleGamePlayers = [
        { name: 'AI', hands: 'CO4', role: ROLES.predictor },
        { name: 'P1', hands: 'OO', role: ROLES.normal }
      ]
      wrapper.vm.players = sampleGamePlayers
      expect(wrapper.vm.isPredictionCorrect).toBe(false)
      const sampleGamePlayers2 = [
        { name: 'AI', hands: 'CO', role: ROLES.normal },
        { name: 'P1', hands: 'OO3', role: ROLES.predictor }
      ]
      wrapper.vm.players = sampleGamePlayers2
      expect(wrapper.vm.isPredictionCorrect).toBe(true)
    })
  })

  describe('Input validation', () => {
    test('validate predictor input', () => {
      const sampleGamePlayers = [
        { name: 'AI', hands: 'CO4', role: ROLES.predictor },
        { name: 'P1', hands: 'OO', role: ROLES.normal }
      ]
      wrapper.vm.players = sampleGamePlayers
      wrapper.vm.userInput = 'OC3'
      expect(wrapper.vm.isInputCorrect).toBe(true)
      wrapper.vm.userInput = 'CO'
      expect(wrapper.vm.isInputCorrect).toBe(false)
      wrapper.vm.userInput = 'chicken'
      expect(wrapper.vm.isInputCorrect).toBe(false)
    })
    test('validate non-predictor input', () => {
      const sampleGamePlayers = [
        { name: 'AI', hands: 'OO', role: ROLES.normal },
        { name: 'P1', hands: 'CO4', role: ROLES.predictor }
      ]
      wrapper.vm.players = sampleGamePlayers
      wrapper.vm.userInput = 'OC3'
      expect(wrapper.vm.isInputCorrect).toBe(false)
      wrapper.vm.userInput = 'CO'
      expect(wrapper.vm.isInputCorrect).toBe(true)
      wrapper.vm.userInput = 'chicken'
      expect(wrapper.vm.isInputCorrect).toBe(false)
    })
  })
})
