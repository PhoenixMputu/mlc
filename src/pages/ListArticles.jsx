import Header from "../components/Header"
import { AiOutlineSearch } from "react-icons/ai";
import {Link }from "react-router-dom"
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const ListArticles = () => {
    let navigate = useNavigate();
    let token = localStorage.getItem('user');
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(token);
        if (user === null) {
            navigate('/admin');
        }
    }, [token, user])
    
    const data = [
        {
            id: 1,
            title: "Hello",
            description: "Hello World !",
            date: "1/11/2000",
            lieu: "Kinshasa"
        },
        {
            id: 2,
            title: "Hello",
            description: "Hello World !",
            date: "1/11/2000",
            lieu: "Kinshasa"
        },
        {
            id: 3,
            title: "Hello",
            description: "Hello World !",
            date: "1/11/2000",
            lieu: "Kinshasa"
        }
    ]
    return (
        <>
            <Header/>
            <div id="searchBar">
                <input type="text" id="search" placeholder="Rechercher par nom" />
                <button>
                    <AiOutlineSearch size={20} color="blue"/>
                </button>
            </div>
            <div id="activities">
                <h2>Actualités</h2>
                <Link to="/admin/addNew" className="lien">Ajouter un actualités</Link>
                <Table data={data} type="event"/>
            </div>
        </>
    )
}

export default ListArticles;