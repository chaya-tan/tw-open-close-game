export const HAND_DIRECTIONS = { upward: 'UPWARD', downward: 'DOWNWARD' }
export const HANDSIDES = {
  right: 'RIGHT',
  left: 'LEFT'
}
export const POSTURES = {
  open: 'O',
  close: 'C'
}
export const ROLES = {
  predictor: 'PREDICTOR',
  normal: 'NORMAL'
}
export const REGEX = {
  predictor: /[O|C][O|C][0-4]/g,
  normal: /[O|C][O|C]/g
}
