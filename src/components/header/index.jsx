import { Container } from "./style";
import { Link } from "react-router-dom";

import { FiPower } from "react-icons/fi";

export function Header({...rest}){
    return(
        <Container {...rest}>
            <div className="Profile">
             <Link to="/user">
              <img src="https://github.com/toddynh0br.png" alt="imagem do usuario" />
             </Link>
             
             <div className="info">
              <p>Bem vindo,</p>
              <Link to="/user">
               <span>Matheus Augusto</span>
              </Link>
             </div>
            </div>

            <FiPower />
        </Container>
    )
}