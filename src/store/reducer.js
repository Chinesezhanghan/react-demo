import  {combineReducers} from 'redux'
import headReducer from '../components/head/headReducer'
import homeReducer from '../components/home/homeReducer'
import footReducer from '../components/foot/footReducer'
export  default  combineReducers({
    head:headReducer,
    home:homeReducer,
    foot:footReducer
})