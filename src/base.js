import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlEZYve9KmgDwdMQs0egWcxSzDhgWs4-U",
    authDomain: "catch-of-the-day-john-bae.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-john-bae.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export {firebaseApp};

//this is a default export
export default base;