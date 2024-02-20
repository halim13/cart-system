import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import ShopApp from '../reducers';
import thunkMiddleware from 'redux-thunk';

const store = createStore(ShopApp, applyMiddleware(thunkMiddleware))

export default store