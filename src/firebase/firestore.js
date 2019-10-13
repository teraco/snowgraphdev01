import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBihzU2qwLYCuBU3rqiSpG36SajKDxzp8M",
  authDomain: "snowgraphdev01.firebaseapp.com",
  databaseURL: "https://snowgraphdev01.firebaseio.com",
  projectId: "snowgraphdev01",
  storageBucket: "snowgraphdev01.appspot.com",
  messagingSenderId: "928252924151",
  appId: "1:928252924151:web:866ca12f9ebd8b9efcc3f2",
};

const settings = { timestampsInSnapshots: true };
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
