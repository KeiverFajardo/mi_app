
import firebase from "firebase"

import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBScPBGe9rJbSzoJ9acwCLHVJEva2rPiWE",
  
    authDomain: "ecommerce-reactjs-4b07e.firebaseapp.com",
  
    projectId: "ecommerce-reactjs-4b07e",
  
    storageBucket: "ecommerce-reactjs-4b07e.appspot.com",
  
    messagingSenderId: "770059456420",
  
    appId: "1:770059456420:web:fd9919573595a171473b31",
  
    measurementId: "G-R0P19QTHLN"
  
  };
  

  const app = firebase.initializeApp(firebaseConfig)


  ///expor function getFirebase()
  // {return app}

  export function getFirestore(){
    return firebase.firestore(app)
  }