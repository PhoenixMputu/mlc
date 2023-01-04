import React from 'react'
import { Link } from 'react-router-dom'
import '../css/admin.scss'

const Login = () => {
  return (
    <div className='container__login'>
        <form>
            <h1>Connexion</h1>
            <div className="group-input">
                <label>Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="group-input">
                <label>Mot de passe</label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="group__links">
                <Link to="g">Mot de passe oublié ?</Link>
                <Link to="/admin/register">Créer un compte</Link>
            </div>
            <input type="submit" value="S'inscrire" />
        </form>
    </div>
  )
}

export default Login