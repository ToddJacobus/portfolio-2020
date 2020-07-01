import { combineReducers } from 'redux';

import projectPostsReducer from './projectPostsReducer';
import codeBlockReducer from './codeBlockReducer';

export default combineReducers({
    projects_content: projectPostsReducer,
    code_blocks_content: codeBlockReducer,
});
