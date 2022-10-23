import { combineReducers } from "redux";

import theme from './theme/themeSlice'
import auth from './auth'
import sidebar from './sidebar/sidebarSlice'

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,auth,sidebar,
        ...asyncReducers
    })
    return combinedReducer(state,action)
}

export default rootReducer