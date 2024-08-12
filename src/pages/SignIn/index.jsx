import { Container, Main } from "./style";
import { Link } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import SignBG from "../../assets/SignBG.png";
import { FiLock } from "react-icons/fi";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignIn(){
   return(
    <Container>
      <Main>
       <h2>Rocket Notes</h2>
       <p>Aplicação para salvar e gerenciar seus links úteis.</p>

       <form>
         <h3>Faça seu login</h3>
         <Input
         icon={HiOutlineMail}
         placeholder="E-mail"
         ></Input>

         <Input
         icon={FiLock}
         placeholder="Senha"
         ></Input>

         <Button
         title="Entrar"
         onclick={(e)=> {event.preventDefault()}}
         ></Button>

         <Link to="/signup">
          <span>Criar conta</span>
         </Link>
       </form>
      </Main>

      <img src={SignBG} alt="imagem de uma mesa com uma xicara de cafe e um bloco de notas." />
    </Container>
   )
}