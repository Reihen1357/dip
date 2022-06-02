import '../../styles/style.css'
import { auth } from '../configFirebase/firebase.config'

const txtName = document.getElementById('txtName')
const txtSurname = document.getElementById('txtSurname')
const txtPatron = document.getElementById('txtPatron')
const txtEmail = document.getElementById('txtEmail')
const txtTel = document.getElementById('txtTel')
const txtPassword = document.getElementById('txtPassword')

const createAccount = async (event) => {
    event.preventDefault()
    const email = txtEmail.value
    const password = txtPassword.value
    
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    }
    catch(error) {
        console.log(`There was an error: ${error}`)
    } 
}

const btnSignup = document.getElementById('btnSignup')
btnSignup.addEventListener("click", createAccount)