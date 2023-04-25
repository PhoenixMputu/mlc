import Header from "../components/Header"
import '../css/admin.scss'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const AddNew = () => {
    let navigate = useNavigate();
    let token = localStorage.getItem('user');
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(token);
        if (user === null) {
            navigate('/admin');
        }
    }, [token, user])
    return (
        <>
            <Header/>
            <form id="formulaire">
                <h2>Ajouter une actualité</h2>
                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <input type="text" className="form-control" id="title" placeholder="Titre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Image</label>
                    <input type="file" className="form-control" id="title" placeholder="Titre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" placeholder="Description"></textarea>
                </div>
                <input type="submit" value="Ajouter l'actualité" />
            </form>
        </>
    )
}

export default AddNew;