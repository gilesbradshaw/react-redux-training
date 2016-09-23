import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../index.scss'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import connector from '../containers/connector'

class App extends React.Component {
  render() {
    const {
      add,
      subtract, 
      count
    } = this.props
    return (
      <div>
        <h1>
          {count}
        </h1>
        <input
          className="btn btn-primary btn-lg"
          type='button' 
          onClick={()=>
            {
              subtract()
            }
          
          } 
          value='-'
        />
        <input
          className="btn btn-primary btn-lg"
          type='button' 
          onClick={()=>
            {
              add()
            }
          
          } 
          value='+'
        />


        <p><span className={styles.myStyle}> here is a local. style</span></p>
        bootstrap ok too
        <p><a className="btn btn-primary btn-lg">Bootstrapped link</a></p>
      </div>
    )
  }
}


export default connector(App)
