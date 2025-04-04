import styled from "styled-components";

export const Container = styled.div`
 max-height: 100vh;
 overflow: hidden;
 display: flex;
 justify-content: space-between;

 position: relative;

 .BG1 {
 max-height: 100vh;
 align-self: left;
 }

 .BG2 {
 max-height: 100vh;
 align-self: right;
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

transition: .3s ease-in-out;
position: absolute;

top: 0;
z-index: 3;

&[data-position="signIn"] {
 transform: translateX(0%);
}

&[data-position="signUp"] {
 transform: translateX(100%);
}

background-color: #312E38;

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
 position: relative;


 &[data-position="signIn"] {
 transform: translateX(0%);
}

&[data-position="signUp"] {
 transform: translateX(0%);
}
}
`