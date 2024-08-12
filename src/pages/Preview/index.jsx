import { Container, Main } from "./style";

import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Tag } from "../../components/tag";

export function Preview(){
    const navigate = useNavigate();
 
    return(
        <Container>
          <Header>
          </Header>

          <Main>
            <span>Excluir a nota</span>
            <h2>Introdução ao React</h2>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut laudantium modi consectetur, quae sapiente sit! Voluptatibus nisi quisquam eligendi placeat, obcaecati voluptatum, et hic consequatur doloremque ipsa adipisci, vero ad.
            </p>

            <h3>Links úteis</h3>
             <div className="links">
                <a href="https://www.rocketseat.com.br/" target="blank">https://www.rocketseat.com.br/</a>
                <a href="https://www.rocketseat.com.br/" target="blank">https://www.rocketseat.com.br/</a>
             </div>

            <h3>Marcadores</h3>

            <div className="tags">
                <Tag
                 title="React"
                />
                <Tag
                 title="express"
                />
            </div>

            <Button 
             title="Voltar"
             onclick={(e) => {
                event.preventDefault()
                navigate(-1)
             }}
            />
          </Main>
        
        </Container>
    )
}