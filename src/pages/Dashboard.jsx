import { useState, useEffect } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
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
            date: "1/11/2000"
        },
        {
            id: 2,
            title: "Hello",
            description: "Hello World !",
            date: "1/11/2000"
        },
        {
            id: 3,
            title: "Hello",
            description: "Hello World !",
            date: "1/11/2000"
        }
    ]
    return (
        <>
            <Header/>
            <div id="content">
                <div>
                    <h2>Les derniers articles publiés</h2>
                    <Table data={data} />
                </div>
                <div>
                    <h2>Les derniers événements publiés</h2>
                    <Table data={data} type="event"/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;