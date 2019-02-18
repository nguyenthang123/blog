
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyA8gKwhLT6UxQhEN3kOIFxghXEg4ql1ivI",
  authDomain: "test-b4128.firebaseapp.com",
  databaseURL: "https://test-b4128.firebaseio.com",
  projectId: "test-b4128",
  storageBucket: "test-b4128.appspot.com",
  messagingSenderId: "831307293309"
};
firebase.initializeApp(config);
export const Data = firebase.database().ref('NoteData');

