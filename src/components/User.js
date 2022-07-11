import React from 'react';
import { Link } from "react-router-dom";

const User = () => {
    return (
        <div>
            <h1>Usuário</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default User;