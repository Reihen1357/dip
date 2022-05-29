import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  alert('Sign Out saccesfull')
}).catch((error) => {
  console.log(error.message)
});