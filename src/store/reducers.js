import { 
  ADD,
  SUBTRACT 
} from './action-types'

const initialState = {
  count: 0
}
const handlers = {
  [ADD]: (state, action)=> ({
    ...state,
    count: state.count+action.number
  }),
  [SUBTRACT]: (state, action)=> ({
    ...state,
    count: state.count-action.number
  })
}




const reducers = (state=initialState, action) => {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export default reducers