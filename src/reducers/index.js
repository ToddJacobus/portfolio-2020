import { combineReducers } from 'redux';

import projectPostsReducer from './projectPostsReducer';

export default combineReducers({
    projects_content: projectPostsReducer,
});
