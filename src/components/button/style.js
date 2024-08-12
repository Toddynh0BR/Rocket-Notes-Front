import styled from "styled-components";

export const Container = styled.button`
height: 5.6rem;
width: 100%;

border: none;

justify-content: center;
align-items: center;
display: flex;

background-color: #FF9000;
border-radius: 1rem;

font-family: 'Roboto Slab', sans-serif;
font-size: 1.6rem;
font-weight: 500;
color: #312E38;

&:hover {
 cursor: pointer;
 opacity: 50%;
}

&:disabled {
 cursor: no-drop;
 opacity: 50%;
}
`