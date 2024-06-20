import React, { useState, useRef, } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Burger from "../../Assets/burger 1.png"


import {
    Container,
    Image,
    H1,
    InputLabel,
    Input,
    Button,
}
    from "./styles";

const App = () => {
    const [users, setUsers] = useState([]);
    const Navigate = useNavigate()

    const InputAge = useRef()
    const InputName = useRef()


    async function addNewUser() {
        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: InputName.current.value,
            age: InputAge.current.value,
        })

        setUsers([...users, newUser])

        Navigate("/users")
    }



    return (
        <Container>
            <Image alt="logo-image" src={Burger} />
            <H1> Make your Order!!</H1>

            <InputLabel> Customer Name 🙂 </InputLabel>
            <Input ref={InputName} placeholder="  Write your Name" />

            <InputLabel>Request 🍔🍟 </InputLabel>
            <Input ref={InputAge} placeholder=" 1 Coca-Cola, 1-XTudo" />Hiago

            <Button onClick={addNewUser}> New Request </Button>

        </Container>
    );
};

export default App;
