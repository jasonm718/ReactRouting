import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {

    case FETCH_POST:
      //const post = action.payload.data;
      //const newState = {...state};
      //newState[post.id] = post;
      //return newState;
      return {...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      //console.log(action.payload.data); // [pst1. pst2]
      // {4: post}osts/193562
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
