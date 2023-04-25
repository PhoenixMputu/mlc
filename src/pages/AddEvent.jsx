import { useState, useEffect } from "react";
import {useStateValue} from "../lib/stateProvider";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'
import '../css/admin.scss'

const AddEvent = () => {
    let navigate = useNavigate();
    let token = localStorage.getItem('user');
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(token);
        if (user === null) {
            navigate('/admin');
        }
    }, [token, user])

    const handleSubmit = (e) => {
        e.preventDefault()

        
    }

    return (
        <>
            <Header/>
            <form id="formulaire" onSubmit={handleSubmit}>
                <h2>Ajouter un événement</h2>
                <div className="form-group">
                    <label htmlFor="name">Titre</label>
                    <input type="text" className="form-control" name="name" id="title" placeholder="Titre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lieu">Lieu</label>
                    <input type="text" className="form-control" name="lieu" id="lieu" placeholder="Ville"/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" name="image" id="image"/>
                </div>
                <div className="flex">
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" name="date" id="date" placeholder="Date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Heure</label>
                        <input type="time" className="form-control" name="hour" id="time" placeholder="Heure"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" name="description" id="description" placeholder="Description"></textarea>
                </div>
                <input type="submit" value="Ajouter l'événement" />
            </form>
        </>
    )
}

export default AddEvent;