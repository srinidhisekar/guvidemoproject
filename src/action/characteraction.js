import axios from 'axios';

const LIST_DATA  = 'LIST_DATA';
const VIEW_DATA  = 'VIEW_DATA';

export function AC_LIST_DATA() {
  return function(dispatch) {
    return axios.get('https://www.breakingbadapi.com/api/characters')
      .then(({ data }) => {
        console.log("%%%%%%%%%5",data);
         dispatch({type: LIST_DATA, payload:data});
    });
  };
}
export function AC_VIEW_DATA(formData) {
  const id = { id : formData }
  return function(dispatch) {
    return axios.get('https://www.breakingbadapi.com/api/characters')
      .then(({ data }) => {
          dispatch({type: VIEW_DATA, payload:data,id:id});
       });
   }
}
