import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './index.scss'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        This works
        <p><span className={styles.myStyle}> here is a local style</span></p>
        bootstrap ok too
        <p><a className="btn btn-primary btn-lg">Bootstrapped link</a></p>
      </div>
    )
  }
}


export default App
