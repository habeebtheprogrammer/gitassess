import { combineReducers } from "redux"
import orgsReducer from "./orgs";
import repositoryReducer from "./repository";

var rootReducer = combineReducers({
    repos: repositoryReducer,
    orgs: orgsReducer,
})

export default rootReducer;