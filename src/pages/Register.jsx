import React from 'react'
import { Link } from 'react-router-dom'
import '../css/admin.scss'

const Register = () => {
  return (
    <div className='container__login'>
        <form>
            <h1>Inscription</h1>
            <div className="group-input">
                <label>Nom</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="group-input">
                <label>Prénom</label>
                <input type="text" name="firstName" id="firstName" />
            </div>
            <div className="group-input">
                <label>Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="group-input">
                <label>Mot de passe</label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="group-input">
                <label>Confirmation</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
            </div>
            <div className="group__links">
                <Link to="/admin">J'ai un compte</Link>
            </div>
            <input type="submit" value="S'inscrire" />
        </form>
    </div>
  )
}

export default Register