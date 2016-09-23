import { Observable } from 'rxjs/Observable'
import { delay } from 'rxjs/operator/delay'
import { map } from 'rxjs/operator/map'
import { interval } from 'rxjs/Observable/interval'
import { take } from 'rxjs/operator/take'
import { mergeMap } from 'rxjs/operator/mergeMap'
import { 
  ADD, 
  ADDER,
} from '../store/action-types'
//this is using ES7 function bind
const addEpic = action$ => {
  return action$.ofType(ADD)
    ::delay(200)
    ::mergeMap(({number})=>
      Observable
        ::interval(10)
        ::map(()=> ({ 
          type: ADDER, 
          number: number 
        }))
        ::take(100)
    )
}
export default addEpic