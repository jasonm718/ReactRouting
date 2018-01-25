//npm install -- save axios redux-promise
import axios from 'axios';
import firebase from 'firebase';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCY68P-2wLlKCWTjzMUE_47kU1-KVn9EqE",
  authDomain: "react-33e3b.firebaseapp.com",
  databaseURL: "https://react-33e3b.firebaseio.com",
  projectId: "react-33e3b",
  storageBucket: "",
  messagingSenderId: "869770244075"
};
console.log('we ');
const Posts = firebase.initializeApp(config);

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
  /*
  return dispatch => {
    Posts.on('value', snapshot =>{
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  }
  */
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return{
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then (() => callback());

    return{
      type: DELETE_POST,
      payload: id
    }
}
