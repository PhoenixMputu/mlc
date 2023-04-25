import { useState, useEffect } from "react";
import {useStateValue} from "../lib/stateProvider";
import { Link } from 'react-router-dom'
import '../css/admin.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, redirect } from 'react-router-dom'

const Login = () => {
    let token = localStorage.getItem('user');
    let navigate = useNavigate();
    const [local, setLocal] = useState();
    const [{user}, dispatch] = useStateValue();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (user !== null) {
            navigate('/admin/dashboard');
        }
        dispatch({
            type: "SET_USER",
            user: local
        });
    }, [local]);

    const handleChange = (e) => {
        setData({
          ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const login = axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL_BASE}:8080/auth/login`,
            data: data
        });

        login
        .then((response) => {
          if (response.data.type === 'Erreur') {
            return toast.error(response.data.message, {
              position: toast.POSITION.TOP_RIGHT
            })
          }

          localStorage.setItem('user', JSON.stringify(response.data.user.token));
          setLocal(localStorage.getItem('user'));
          navigate('/admin/dashboard');
        })
        .catch((error) => toast.error(error, {
            position: toast.POSITION.TOP_RIGHT
          }))
    }
    
  return (
    <div className='container__login'>
        <form onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className="group-input">
                <label>Email</label>
                <input onChange={handleChange} type="email" name="email" id="email" required/>
            </div>
            <div className="group-input">
                <label>Mot de passe</label>
                <input onChange={handleChange} type="password" name="password" id="password" required/>
            </div>
            <div className="group__links">
                <Link to="/admin/forget">Mot de passe oublié ?</Link>
            </div>
            <input type="submit" value="Se connecter" />
        </form>
        <ToastContainer />
    </div>
  )
}

export default Login