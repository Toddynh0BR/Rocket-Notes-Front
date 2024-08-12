import { Container } from "./style";

import { useNavigate } from "react-router-dom";

import { FiLock, FiUser, FiCamera } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowLeft } from "react-icons/fi";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function User(){
    const navigate = useNavigate();

    return(
        <Container>
         <header>
          <FiArrowLeft onClick={()=> navigate(-1)}/>
         </header>

         <form>
          <div className="image">
           <img src="https://github.com/toddynh0br.png" alt="imagem do usuario" />

           <label htmlFor="img">
            <FiCamera />
           </label>
           <input type="file" id="img" accept="image/png, image/jpeg"/>
          </div>
          <Input
           icon={FiUser}
           placeholder="Nome"
          />
          <Input
           icon={HiOutlineMail}
           placeholder="E-mail"
          />
          <Input
           icon={FiLock}
           placeholder="Senha atual"
          />
          <Input
           icon={FiLock}
           placeholder="Nova senha"          
          />

          <Button
           title="Salvar"
          />

         </form>
        </Container>
    )
}