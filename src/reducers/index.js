import { combineReducers } from 'redux';

import projectPostsReducer from './projectPostsReducer';
import codeBlockReducer from './codeBlockReducer';
import servicesReducer from './servicesReducer';
import testimonyReducer from './testimonyReducer';

export default combineReducers({
    projects_content: projectPostsReducer,
    code_blocks_content: codeBlockReducer,
    services_content: servicesReducer,
    testimony_content: testimonyReducer,
});
