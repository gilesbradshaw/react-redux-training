import { 
  ADD,
  SUBTRACT 
} from './action-types'

const add = number => 
  ({
    type: ADD,
    number
  })

const subtract = number => 
  ({
    type: SUBTRACT,
    number
  })

export { 
  add, 
  subtract 
}