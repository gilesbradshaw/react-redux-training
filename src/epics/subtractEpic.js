import { Observable } from 'rxjs/Observable'
import { delay } from 'rxjs/operator/delay'
import { map } from 'rxjs/operator/map'
import { interval } from 'rxjs/Observable/interval'
import { take } from 'rxjs/operator/take'
import { mergeMap } from 'rxjs/operator/mergeMap'
import { 
  SUBTRACT, 
  SUBTRACTER,
} from '../store/action-types'
//this is using ES7 function bind
const subtractEpic = action$ => {
  return action$.ofType(SUBTRACT)
    ::delay(100)
    ::mergeMap(({number})=>
      Observable
        ::interval(100)
        ::map(()=> ({ 
          type: SUBTRACTER, 
          number: number 
        }))
        ::take(10)
    )
}
export default subtractEpic