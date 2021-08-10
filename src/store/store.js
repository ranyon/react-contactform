import {createStore} from "redux"
import usersReducer from "../reducer/reducer"

const Store = createStore(usersReducer)

export default Store;