import styled from "styled-components";

export const Container = styled.div`
 max-height: 100vh;
 overflow: hidden;
 display: flex;
 justify-content: space-between;

 img {
 max-height: 100vh;
 }

 @media (max-width: 430px){
 justify-content: center;
  img {
   display: none;
  }
 }
`

export const Main = styled.div`
width: 50%;
height: 100vh;

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

h2, p, h3, span {
 font-family: 'Roboto Slab', sans-serif;
}

h2 {
 font-size: 4.8rem;
 font-weight: 700;
 color: #FF9000;
}

p {
 font-size: 1.4rem;
 font-weight: 400;
 color: #999591;
}

form {
 width: 34rem;
 text-align: center;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 h3 {
 font-size: 2.4rem;
 font-weight: 500;
 color: #F4EDE8;

 margin: 4rem 0;
 }

 button {
 margin-bottom: 5rem;
 margin-top: 1rem;
 }
 span {
 font-size: 1.6rem;
 color: #FF9000;
 }

 span:hover {
 cursor: pointer;
 opacity: 50%;
 }
}

@media (max-width: 430px){
 width: 100%;


}
`