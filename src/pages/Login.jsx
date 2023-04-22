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
                <input type="email" name="email" id="email" required/>
            </div>
            <div className="group-input">
                <label>Mot de passe</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <div className="group__links">
                <Link to="/admin/forget">Mot de passe oublié ?</Link>
            </div>
            <input type="submit" value="Se connecter" />
        </form>
    </div>
  )
}

export default Login