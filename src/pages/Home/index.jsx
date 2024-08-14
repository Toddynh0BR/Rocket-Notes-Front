import { Container, Main, Menu } from "./style";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Tag } from "../../components/tag"

import { FiPlus } from "react-icons/fi";

export function Home(){
    const [notes, setNotes] = useState([]);
    const [tags, setTags] = useState([]);
    const [all, setAll] = useState(true);

    async function fetchNotes() {
     const response = await api.post("/notes/index");

     setNotes(response.data)
    }

    async function fetchTags(){
     const response = await api.get("/notes/");

     setTags(response.data.Tags)
    }
    useEffect(()=> {
     fetchNotes()
     fetchTags()
    }, [])

    async function handleIndex(event) {
      if (event.key === 'Enter') {
        if (!event.target.value.trim()){
            return
        }

        const index = event.target.value
       
        try{
            const response = await api.post("/notes/index", {index})
            setAll(true)
            setNotes(response.data)

        }catch(error){
         console.error(error)
         if(error.response){
            alert(error.response.data.error);
          }else {
            alert("Não foi possivel buscar nota.")
          }
        }

      }
    };

    async function HandleReset(event) {
     if (!event.target.value.trim()){
        fetchNotes()
        setAll(true)
     }
    }

    return(
        <Container>
           <Menu>
            <header>
                <h2>Rocketnotes</h2>
            </header>

                <ul>
                 <li 
                 className={all == true ? "Active" : ""}
                 onClick={()=> {
                    setAll(true)
                    fetchNotes()
                 }}
                 >Todos</li>

                 {tags.map((tag, index) => (
                    <li key={index} className={all == tag.name ? "Active" : ""} onClick={async () => {
                        try {
                          const Tag = tag.name
                          const response = await api.post("/notes/index", {tag: Tag})
                           
                          setAll(tag.name)
                          setNotes(response.data)  
                           
                        }catch(error){
                           console.error(error)
                           if(error.response){
                              alert(error.response.data.error);
                            }else {
                              alert("Não foi possivel buscar nota.")
                            }
                        }

                    }}>{tag.name}</li>
                 ))}
                </ul>

               <Link to="/create">
                <div className="button">
                 <FiPlus />
                 <p>Criar nota</p> 
                </div>
               </Link>
           </Menu>

           <Header className="header">
           </Header>

           <Main>

            <Input
             placeholder="Pesquisar pelo título"
             onKeyDown={handleIndex}
             onChange={HandleReset}
            ></Input>

            <div className="MobalTitle">
            <h3>Minhas notas</h3>
            <Link to="/create">
            <span>Criar nota</span>
            </Link>
            </div>

            <h3>Minhas notas</h3>

            <div className="notes">

            {Array.isArray(notes) && notes.length === 0 ? (
             <h4>Nenhuma nota criada ainda</h4>
                 ) : (
                Array.isArray(notes) && notes.map((note) => (
                 <Link to={`/preview/${note.id}`} key={note.id}>
              <div className="note">
                    <h2>{note.title}</h2>
                    <div className="tags">

                    {note.tags.map(tag => (
                        <Tag
                         key={tag.id}
                         title={tag.name}
                       />
                    ))}
                    </div>
                </div>
            </Link>
          ))
             )}
              
            </div>
           </Main>
        </Container>
    )
}