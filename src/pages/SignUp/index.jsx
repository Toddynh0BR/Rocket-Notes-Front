import { Container, Main } from "./style";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState } from "react";

import { FiLock, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import SignBG from "../../assets/SignBG.png";


import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignUp(){
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Loading, setLoading] = useState(false)


 const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
 };

 async function handleSignUp(event){
  event.preventDefault()
  if(!name || !email || !password){
    return alert("Preencha todos os campos!")
  }
  if (password.length < 6) {
    return alert("Senha deve ter no mínimo 6 caracteres!")
  }
  if (!validateEmail(email)) {
    return alert('Email inválido!');
  }

  setLoading(true)
  await api.post("/users", {name, email, password})

  .then(()=> {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
      signIn({email, password});
       })
  .catch(error => {
    if(error.response){
      alert(error.response.data.message);
    }else {
      alert("Não foi possivel cadastrar o usuário.")
    }
    setLoading(false)
  })
}
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
         onChange={e => setName(e.target.value)}
         ></Input>

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
         title="Cadastrar"
         loading={Loading}
         onclick={handleSignUp}
         ></Button>

         <Link to="/">
          <span>Voltar para o login</span>
         </Link>
       </form>
      </Main>
    </Container>
   )
}