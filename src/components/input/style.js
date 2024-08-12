import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 5.6rem;

gap: 1rem;
display: flex;
align-items: center;

padding: 2rem;
border-radius: 1rem;
background-color: #232129;


svg {
 font-size: 2rem;
 color: #666360;
}

input {
 border: none;
 outline: none;
 background: none;

 width: 100%;
 
 font-family: 'Roboto Slab', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #F4EDE8;
 padding: 1rem;

 &::placeholder {
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #666360;
 }
}
`