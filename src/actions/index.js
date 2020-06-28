import getContent from '../apis/getContent';

// const API_TOKEN = "euE9wJ3yl9UtbqPE7kajx0yxICwn837oaHImm4nKC98" // Production API Token
const API_TOKEN = "hTjtqtDlEYt6U-dGRGjh5eK2PtY1SBLJzwV8UPTLjnc" // Preview API Token

//  --  CONTENT FETCHING ACTIONS
export const fetchProjects = props => async dispatch => {
    const response = await getContent.get(`?access_token=${API_TOKEN}&content_type=projectPost`)
    dispatch({type: 'GET_PROJECT_POSTS', payload: response.data})
};