import {applyMiddleware, compose, createStore} from "redux"
import usersReducer from "../reducer/reducer"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "firebase";

const Store = createStore(usersReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
))

export default Store;