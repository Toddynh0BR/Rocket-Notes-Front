import { Container, Main } from "./style";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Tag } from "../../components/tag";

export function Preview(){
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
    const { id } = useParams();

    async function fetchNote(){
      const response = await api.get(`/notes/preview/${id}`)

      setNote(response.data)
      console.log()
    }

    async function DeleteNote(){
      const result = window.confirm("Deseja mesmo deletar está nota?");

      if (result) {
        try {
        await api.delete(`/notes/${note.note.id}`)
        navigate("/")
        }catch(error){
          if(error.response){
            alert(error.response.data.message)
            
          }else{
            alert("Não foi possivel excluir nota")
          };
        }
      }
    }

    useEffect(() => {
      fetchNote();
  }, []);

  if (!note){
    return <p>Carregando...</p>
  }

    return(
        <Container>
          <Header>
          </Header>

          <Main>
            <span onClick={DeleteNote}>Excluir a nota</span>
            <h2>{note.note.title}</h2>

            <div className="MobalTitle">
            < h2>{note.note.title}</h2>
             <span onClick={DeleteNote}>Excluir a nota</span>
            </div>

            <p>
            {note.note.description}
            </p>

            <h3>Links úteis</h3>
             <div className="links">
                {!note.links.length ? <p>Nenhum link adicionado</p> : note.links.map(link => (
                  <a href={link.url} target="blank" key={link.id}>{link.url}</a>
                ))}
             </div>

            <h3>Marcadores</h3>

            <div className="tags">
                {!note.tags.length ? <p>Nenhuma tag adicionada</p> : note.tags.map(tag => (
                  <Tag
                  title={tag.name}
                  key={tag.id}
                 />
                ))}
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