import { combineReducers } from 'redux';

import projectPostsReducer from './projectPostsReducer';
import codeBlockReducer from './codeBlockReducer';
import servicesReducer from './servicesReducer';

export default combineReducers({
    projects_content: projectPostsReducer,
    code_blocks_content: codeBlockReducer,
    services_content: servicesReducer,
});
