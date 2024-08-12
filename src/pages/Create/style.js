import styled from "styled-components";

export const Container = styled.div`
`

export const Main = styled.main`
width: 55rem;
margin: auto;
margin-bottom: 5rem;
margin-top: 3rem;

flex-direction: column;
display: flex;
gap: 2rem;

.title {
 width: 100%;
 margin-bottom: 1rem;

 justify-content: space-between;
 align-items: center;
 display: flex;
}

h2 {
 font-family: 'Roboto Slab', sans-serif;
 font-size: 3.6rem;
 font-weight: 500;
 color: #F4EDE8;
}

span {
 font-family: 'Roboto Slab', sans-serif;
 font-weight: 400;
 font-size: 1.6rem;
 color: #999591;
}

span:hover {
 cursor: pointer;
 opacity: 50%;
}

textarea {
 width: 100%;
 min-height: 15rem;

 border: none;
 resize: none;
 outline: none;

 background-color: #232129;
 border-radius: 1rem;
 padding: 2rem;

 font-family: 'Roboto Slab', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #F4EDE8;

 &::placeholder {
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #666360;
 }
}

h3 {
 font-family: 'Roboto Slab', sans-serif;
 font-weight: 400;
 font-size: 2rem;
 color: #999591;

 border-bottom: 1px solid #3E3B47;
 padding: 2rem 0 1.5rem;
}

.links {
 flex-direction: column;
 display: flex;
 gap: 1rem;
}

.link {
 height: 5.6rem;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 background-color: #232129;
 border-radius: 1rem;
 padding: 2rem;

 a {
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #CCCCCC;
 }

 svg {
 font-size: 2.4rem;
 color: #FF002E;

 &:hover{
 opacity: 50%;
 cursor: pointer;
 }
 }

}

.NewLink {
 height: 5.6rem;
 width: 100%; 

 justify-content: space-between;
 align-items: center;
 display: flex;

 border: 2px dashed #666360;
 border-radius: 1rem;
 padding: .8rem 2rem;

 input {
 width: 100%;
 height: 100%;

 background: none;
 outline: none;
 border: none;

 font-family: 'Roboto Slab', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #F4EDE8;

 &::placeholder {
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #666360;
 }
 }

 svg {
 font-size: 2.4rem;
 color: #FF9000;

 &:hover{
 opacity: 50%;
 cursor: pointer;
 }
 }
}

.tags {
 width: 100%;
 margin-bottom: 1rem;
 
 align-items: center;
 flex-wrap: wrap;
 display: flex;
 gap: 1rem;
}

.tag {
 height: 5.6rem;
 

 align-items: center;
 display: flex;
 gap: 2rem;

 background-color: #232129;
 border-radius: 1rem;
 padding: 2rem 1.5rem 2rem 2rem;


 p {
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #CCCCCC;
 }
 
 svg {
 font-size: 2.4rem;
 color: #FF002E;

 &:hover{
 opacity: 50%;
 cursor: pointer;
 }
 }
}

.NewTag {
 height: 5.6rem;
 width: 20rem;

 justify-content: space-between;
 align-items: center;
 display: flex;

 border: 2px dashed #666360;
 border-radius: 1rem;
 padding: .7rem 2rem;

 input {
 width: 100%;
 height: 100%;

 background: none;
 outline: none;
 border: none;

 font-family: 'Roboto Slab', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #F4EDE8;

 &::placeholder {
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #666360;
 }
 }

 svg {
 font-size: 2.4rem;
 color: #FF9000;

 &:hover{
 opacity: 50%;
 cursor: pointer;
 }
 }
}
`