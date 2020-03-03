import { shallowMount } from '@vue/test-utils'
import Game from '@/components/Game.vue'

const wrapper = shallowMount(Game)

describe('Game', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('count open hands correctly', () => {
    const sampleGamePlayers = [
      { name: 'AI', hands: 'CO', role: 'PREDICTOR' },
      { name: 'P1', hands: 'OO', role: 'NORMAL' }
    ]
    wrapper.vm.players = sampleGamePlayers
    expect(wrapper.vm.totalOpenHands).toBe(3)
  })
})
