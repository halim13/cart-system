'use client'

import {Provider} from 'react-redux'
import store from './stores'

const ReduxProvider = ({children}) => (
  <Provider store={store}>
    {children}
  </Provider>
)

export default ReduxProvider