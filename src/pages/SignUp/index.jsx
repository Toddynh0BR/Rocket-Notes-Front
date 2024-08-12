import { Container, Main } from "./style";
import { Link } from "react-router-dom";

import { FiLock, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import SignBG from "../../assets/SignBG.png";


import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignUp(){
   return(
    <Container>
      <img src={SignBG} alt="imagem de uma mesa com uma xicara de cafe e um bloco de notas." />


      <Main>
       <h2>Rocket Notes</h2>
       <p>Aplicação para salvar e gerenciar seus links úteis.</p>

       <form>
         <h3>Crie sua conta</h3>

         <Input
         icon={FiUser}
         placeholder="Nome"
         ></Input>

         <Input
         icon={HiOutlineMail}
         placeholder="E-mail"
         ></Input>

         <Input
         icon={FiLock}
         placeholder="Senha"
         ></Input>

         <Button
         title="Cadastrar"
         onclick={(e)=> {event.preventDefault()}}
         ></Button>

         <Link to="/">
          <span>Voltar para o login</span>
         </Link>
       </form>
      </Main>
    </Container>
   )
}