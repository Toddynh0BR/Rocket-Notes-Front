import { Container, Main } from "./style";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

import { FiPlus, FiX } from "react-icons/fi";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function Create(){
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescrib] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');


    function handleNewTag() {
       if (!newTag.trim()){
        return 
       }
        
       setTags((prevTags) => [...prevTags, newTag])
       setNewTag('')
    };

    const removeTagByIndex = (indexToRemove) => {
        setTags((prevTags) => 
            prevTags.filter((_, index) => index !== indexToRemove)
        );
    };

    function handleNewLink() {
        if (!newLink.trim()){
         return 
        }
         
        setLinks((prevLinks) => [...prevLinks, newLink])
        setNewLink('')
    };
 
     const removeLinkByIndex = (indexToRemove) => {
         setLinks((prevLinks) => 
             prevLinks.filter((_, index) => index !== indexToRemove)
         );
     };

     async function handleSave(){
        if (!title && !description){
            return alert("Preencha os campos de título e observações.")
        }

        try {
         await api.post("/notes", {title, description, tags, links})
         alert("Nota criada com sucesso!")
         setTitle('')
         setDescrib('')
         setTags([])
         setLinks([])
         setNewTag('')
         setNewLink('')
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
                
              }else{
                alert("Não foi possivel criar nota")
              };
        }
     };

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
            value={title}
            onChange={e => setTitle(e.target.value)}
           />

           <textarea 
           placeholder="Observações"
           value={description}
           onChange={e => setDescrib(e.target.value)}
           >
           </textarea>

           <h3>Links úteis</h3>
            <div className="links">

                {links.map((link, index) => (
                   <div className="link" key={index}>
                    <a href={link} target="blank">{link}</a>
                    <FiX 
                     onClick={() => removeLinkByIndex(index)}
                    />
                   </div>
                ))}

           
            

            <div className="NewLink">
                <input 
                 type="text" 
                 value={newLink}
                 placeholder="Novo link"
                 onChange={e => setNewLink(e.target.value)}
                 />
                <FiPlus
                 onClick={handleNewLink}
                />
            </div>
            </div>

           <h3>Marcadores</h3>
            <div className="tags">
               
                 {tags.map((tag, index) => (
                  <div className="tag" key={index}>
                   <p>{tag}</p>
                   <FiX 
                    onClick={() => removeTagByIndex(index)}
                   />
                  </div>
                 ))}
                 

                <div className="NewTag">
                 <input 
                  type="text" 
                  value={newTag}
                  placeholder="Novo marcador"
                  onChange={e => setNewTag(e.target.value)}
                  />
                 <FiPlus 
                  onClick={handleNewTag}
                 />
                </div>
            </div>
            
            <Button
             title="Salvar"
             onclick={handleSave}
            />

          </Main>
        
        </Container>
    )
}