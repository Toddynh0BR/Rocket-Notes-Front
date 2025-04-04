import { Container, Main } from "./style";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState } from "react";

import { HiOutlineMail } from "react-icons/hi";
import SignBG from "../../assets/SignBG.png";
import { FiLock, FiUser } from "react-icons/fi";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignUpIn(){
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [Loading, setLoading] = useState(false)
  const [now, setNow] = useState('signIn');

  const navigate = useNavigate();
  const { signIn } = useAuth();
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  function HandleSignIn(event){
     event.preventDefault() 
     setLoading(true)
     
     try {
      signIn({email, password})

      navigate('/')
     }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possivel fazer o login.")
      }
     }finally{
      setLoading(false)
     }

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

    try {
    
     await api.post("/users", {name, email, password})
    
      
     alert("Usuário cadastrado com sucesso!")
     navigate("/")
     signIn({email, password});
           
    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possivel cadastrar o usuário.")
        console.error(error)
      }
    }finally{
      setLoading(false)
    }
  };

   return(
    <Container>
      <img className="BG1" src={SignBG} alt="imagem de uma mesa com uma xicara de cafe e um bloco de notas." />
      <Main data-position={now}>
       <h2>Rocket Notes</h2>
       <p>
        {
         now == 'signIn' ?
         'Aplicação para salvar e gerenciar seus links úteis.' 
        :
         'Aplicação para salvar e gerenciar seus links úteis.'
        }
       </p>

       <form>
         <h3>
          {
           now == 'signIn' ?
           'Faça seu login'
          :
           'Crie sua conta'
          }
         </h3>

         {
          now == 'signUp' ?
          <Input
          icon={FiUser}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
          ></Input>
          :
          null
         }

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
         title={Loading ? 'Carregando...' : now == 'signIn' ? 'Entrar' : 'Cadastrar'}
         loading={Loading}
         onclick={now == 'signIn' ? HandleSignIn : handleSignUp}
         ></Button>

        
        {
         now == 'signIn' ?
         <span onClick={()=> setNow('signUp')}>Criar conta</span>
        :
         <span onClick={()=> setNow('signIn')}>Voltar para o login</span>
        }
       
       </form>
      </Main>
      <img className="BG2" src={SignBG} alt="imagem de uma mesa com uma xicara de cafe e um bloco de notas." />
    </Container>
   )
}