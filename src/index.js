import Nerv from 'nervjs'
import App from './App'

if (process.env.NODE_ENV !== 'production') {
  require('nerv-devtools')
}

Nerv.render(<App />, document.getElementById('app'))
