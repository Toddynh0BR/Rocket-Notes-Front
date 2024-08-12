import { Container, Main, Menu } from "./style";
import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Tag } from "../../components/tag"

import { FiPlus } from "react-icons/fi";

export function Home(){
    return(
        <Container>
           <Menu>
            <header>
                <h2>Rocketnotes</h2>
            </header>

                <ul>
                 <li className="Active">Todos</li>
                 <li>Frontend</li>
                 <li>Node</li>
                 <li>React</li>
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
            ></Input>

            <h3>Minhas notas</h3>

            <div className="notes">
               <Link to="/preview/1">
                <div className="note">
                    <h2>React Modal</h2>
                    <div className="tags">
                     <Tag
                      title="React"
                     />
                     <Tag
                      title="React"
                     />
                     <Tag
                      title="React"
                     />
                    </div>
                </div>
               </Link>
            </div>
           </Main>
        </Container>
    )
}