import styled from "styled-components";

export const Container = styled.div`
header {
 height: 14.4rem;
 width: 100%;

 align-items: center;
 display: flex;

 background-color: #232129;
 padding-left: 10rem;

 svg {
 font-size: 2.5rem;
 color: #999591;

 &:hover {
 cursor: pointer;
 opacity: 50%;
 }
 }
}

form {
 width: 34rem;
 margin: auto;
 margin-top: -10rem;
 margin-bottom: 10rem;

 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 1rem;

 > div:nth-child(3){
 margin-bottom: 2rem;
 }

 img {
  height: 18.6rem;
  width: 18.6rem;
  
  margin-bottom: 4rem;

  border-radius: 50%;
 }

 .image {
 position: relative;

 input {
 display: none;
 }

 label {
 height: 4.8rem;
 width: 4.8rem;

 background-color: #FF9000;
 border-radius: 50%;
 padding: 1rem;

 justify-content: center;
 align-items: center;
 display: flex;

 position: absolute;
 bottom: 5rem;
 right: .5rem;


 svg {
 font-size: 2rem;
 color: #312E38;

 transition: .1s ease-in-out;
 }

 &:hover {
 cursor: pointer;
 background-color: #C87304;
 
 svg {
 opacity: 1;
 color:  #F4EDE8;
 }
 }
 }
 }
}
`