import { legacy_createStore as createStore, applyMiddleware } from "redux";

// import thunk middleware
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import { watcherSaga } from "./rootSaga";
// import { getUsersData } from "./actions/userActions";
// Import all reducers created
import reducers from "./reducers";
// import { rootSaga } from "./rootSaga";
import { watcherSaga } from "./rootSaga";
import logger from "redux-logger";

// composeWithDevTools is tools that gonna be 
// connecting our application for debugging the redux into the browser
import { composeWithDevTools } from 'redux-devtools-extension'
// import usersReducer from "./reducers/userReducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// function saveToLocalStorage(store) {
//     try {
//         const serializedStore = JSON.stringify(store);
//         window.localStorage.setItem('store', serializedStore);
//     } catch(e) {
//         console.log(e);
//     }
// }

// function loadFromLocalStorage() {
//     try {
//         const serializedStore = window.localStorage.getItem('store');
//         if(serializedStore === null) return undefined;
//         return JSON.parse(serializedStore);
//     } catch(e) {
//         console.log(e);
//         return undefined;
//     }
// }

// const persistedState = loadFromLocalStorage();
export const store = createStore(
    reducers,
    {},
    // composeWithDevTools(applyMiddleware(thunk))
    composeWithDevTools(applyMiddleware(...middleware,logger,thunk))
    // Add thunk middleware
)
sagaMiddleware.run(watcherSaga);



