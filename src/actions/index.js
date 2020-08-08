import getContent from '../apis/getContent';
import contacts from '../apis/contacts';

const API_TOKEN = "euE9wJ3yl9UtbqPE7kajx0yxICwn837oaHImm4nKC98"
// const API_TOKEN = "hTjtqtDlEYt6U-dGRGjh5eK2PtY1SBLJzwV8UPTLjnc" // Preview API Token

//  --  CONTENT FETCHING ACTIONS
export const fetchProjects = props => async dispatch => {
    const response = await getContent.get(`?access_token=${API_TOKEN}&content_type=projectPost`)
    dispatch({type: 'GET_PROJECT_POSTS', payload: response.data})
};

export const fetchCodeBlocks = props => async dispatch => {
    const response = await getContent.get(`?access_token=${API_TOKEN}&content_type=codeBlock`)
    dispatch({type: 'GET_CODE_BLOCKS', payload: response.data})
}

export const fetchServices = props => async dispatch => {
    const response = await getContent.get(`?access_token=${API_TOKEN}&content_type=service`)
    dispatch({type: 'GET_SERVICES', payload: response.data})
}

//  --  DATA POST ACTIONS
export const sendContact = props => async dispatch => {
    const { data } = props;
    const response = await contacts.post('contact/contacts/', data)
    dispatch({type: 'POST_CONTACT', payload: response.data})
}