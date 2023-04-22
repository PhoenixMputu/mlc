import React from 'react'
import { Link } from 'react-router-dom'
import '../css/admin.scss';

const ForgetPassword = () => {
  return (
    <div className='container__login'>
        <form>
            <h1>Mot de passe</h1>
            <p>Vous receverez un code de validation dans votre email</p><br/>
            <div className="group-input">
                <label>Mot de passe</label>
                <input type="email" name="email" id="email" />
            </div>
            <input type="submit" value="Envoyer" />
        </form>
    </div>
  )
}

export default ForgetPassword