import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAAMOZbnc7Ux3Mu9gsE4i4E74BoGMBU6jQ',
  authDomain: 'workpong-864e5.firebaseapp.com',
  databaseURL: 'https://workpong-864e5.firebaseio.com',
  projectId: 'workpong-864e5',
  storageBucket: 'workpong-864e5.appspot.com',
  messagingSenderId: '468960584936'
}
firebase.initializeApp(config)

export default firebase
