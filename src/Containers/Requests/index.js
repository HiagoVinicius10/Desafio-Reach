import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Request from "../../Assets/Request.png"
import Trash from "../../Assets/Trash.png"

import {
    Container,
    Image,
    H1,
    Button,
    User,
    Div,
}
    from "./styles";

const Users = () => {
    const [users, setUsers] = useState([]);
    const Navigate= useNavigate()


    useEffect(() => {
        async function fetchUsers() {
            const { data: newUsers } = await axios.get("http://localhost:3001/users")

            setUsers(newUsers)

        }

        fetchUsers()

    }, [])


    async function deleteRequest(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUsers = users.filter(user => user.id !== userId)

        setUsers(newUsers)
    }

    function GoBackPage () {
        Navigate("/")
    }

    return (
        <Container>
            <Image alt="logo-image" src={Request} />
            <H1> Requests</H1>

            <ul>
                {users.map(user => (
                    
                    <User key={user.id}>
                        <Div>
                        <p className="Div">{user.age}</p>
                        <p>{user.name}</p>  
                        </Div>
                        
                        <button className="Button" onClick={() => deleteRequest(user.id)}> <img src={Trash} alt="logo-Trash" /> </button>
                    </User>
                ))
                }
            </ul>

            <Button onClick={GoBackPage}> Return  </Button>

        </Container>
    );
};

export default Users;
