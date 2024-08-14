import { Container, Main } from "./style";

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

import { HiOutlineMail } from "react-icons/hi";
import SignBG from "../../assets/SignBG.png";
import { FiLock } from "react-icons/fi";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignIn(){
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 
  const [Loading, setLoading] = useState(false)
 
  const { signIn } = useAuth();
  
  function HandleSignIn(event){
     event.preventDefault() 
     setLoading(true)
     
     signIn({email, password})
     .then(setLoading(false));

  }

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
         onChange={e => setEmail(e.target.value)}
         ></Input>

         <Input
         icon={FiLock}
         placeholder="Senha"
         onChange={e => setPassword(e.target.value)}
         ></Input>

         <Button
         title="Entrar"
         loading={Loading}
         onclick={HandleSignIn}
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