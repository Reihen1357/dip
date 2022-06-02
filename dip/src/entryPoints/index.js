import { auth } from '../configFirebase/firebase.config'



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('Logged', user)
    } else {
      console.log('Not logged')
    }
  });
