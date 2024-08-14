import { Container } from "./style";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import defaultUser from "../../assets/default.svg";
import { FiPower } from "react-icons/fi";

export function Header({...rest}){
    const [avatar, setAvatar] = useState(defaultUser);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const { Logout } =  useAuth();

    async function fetchUser() {
        try {
            
            const response = await api.get("/users");
            const userData = response.data.user;
            setName(userData.name || '');

            if (userData.avatar) {
                setAvatar(`${api.defaults.baseURL}/files/${userData.avatar}`);
            }
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return(
        <Container {...rest}>
            <div className="Profile">
             <Link to="/user">
              <img src={avatar} alt="imagem do usuario" />
             </Link>
             
             <div className="info">
              <p>Bem vindo,</p>
              <Link to="/user">
               <span>{name}</span>
              </Link>
             </div>
            </div>

            <FiPower onClick={()=> {
             navigate("/")
             Logout()
            }}/>
        </Container>
    )
}