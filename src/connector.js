import { connect } from 'react-redux'
import { 
  add,
  subtract 
} from './store/action-creators'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.adder.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => {
      dispatch(add(3))
    },
    subtract: () => {
      dispatch(subtract(5))
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector