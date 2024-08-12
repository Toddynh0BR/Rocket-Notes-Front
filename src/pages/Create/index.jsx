import { Container, Main } from "./style";

import { useNavigate } from "react-router-dom";

import { FiPlus, FiX } from "react-icons/fi";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function Create(){
    const navigate = useNavigate();
 
    return(
        <Container>
          <Header>
          </Header>

          <Main>
           <div className="title">
            <h2>Criar nota</h2>
            <span onClick={() => navigate(-1)}>voltar</span>
           </div>
 
           <Input
            placeholder="Título"
           />

           <textarea placeholder="Observações">
           </textarea>

           <h3>Links úteis</h3>
            <div className="links">
            <div className="link">
                <a href="https://www.rocketseat.com.br/" target="blank">https://www.rocketseat.com.br/</a>
                <FiX />
            </div>
            

            <div className="NewLink">
                <input type="text" placeholder="Novo link"/>
                <FiPlus/>
            </div>
            </div>

           <h3>Marcadores</h3>
            <div className="tags">
                <div className="tag">
                 <p>React</p>
                 <FiX />
                </div>

                

                <div className="NewTag">
                 <input type="text" placeholder="Novo marcador"/>
                 <FiPlus/>
                </div>
            </div>
            
            <Button
             title="Salvar"
            />

          </Main>
        
        </Container>
    )
}