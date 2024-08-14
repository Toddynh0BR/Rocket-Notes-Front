import styled from "styled-components";

export const Container = styled.div`
 min-height: 100vh;

 display: grid;
 grid-template-columns: repeat(1, 25rem 1fr);
 grid-template-rows: repeat(1, 10rem 1fr);
 grid-template-areas:
    "menu1 header1"
    "menu1 main";

 .header {
  grid-area: header1;
  padding-left: 6rem;
 }
`

export const Main = styled.div`
 grid-area: main;

 padding: 7rem 6rem;

h3 {
 font-family: 'Roboto Slab', sans-serif;
 font-weight: 400;
 font-size: 2rem;
 color: #999591;

 margin-top: 5rem;
 width: 100%;
 border-bottom: 1px solid #3E3B47;
 padding-bottom: 2rem;
}

h4 {
 font-family: 'Roboto Slab', sans-serif;
 font-weight: 400;
 font-size: 1.6rem;
 color: #999591;
}

.notes {
 width: 100%;
 margin-top: 2rem;

 flex-direction: column;
 display: flex;
 gap: 2rem;
}

.note {
 height: 11.2rem;
 width: 100%;

 background-color: #3E3B47;
 border-radius: 1rem;
 padding: 2rem;

 h2 {
 font-family: 'Roboto Slab', sans-serif;
 font-size: 2.4rem;
 font-weight: 600;
 color: #F4EDE8;

 margin-bottom: 2rem;
 }


 .tags {
  align-items: center;
  display: flex;
  gap: .5rem;
 }
}


.note:hover {
  opacity: 50%;
  cursor: pointer;
 }
`

export const Menu = styled.div`
height: 100%;
width: 100%;

position: relative;
grid-area: menu1;

background-color: #232129;
text-align: center;

header {
 width: 100%;
 height: 10rem;

 justify-content: center;
 align-items: center;
 display: flex;

 border-bottom: 1px solid #3E3B47;

 h2 {
 font-family: 'Roboto Slab', sans-serif;
 font-size: 2.4rem;
 font-weight: 700;
 color: #FF9000;
 }
}

ul {
 margin-top: 7rem;
}

li {
 font-family: 'Roboto Slab', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #999591;
 
 margin-bottom: 1rem;
}

li:hover {
 cursor: pointer;
 opacity: 50%;
}

.Active {
 color: #FF9000;
}

.button {
 width: 25rem;
 height: 8rem;

 background-color: #FF9000;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 1rem;

 position: fixed;
 bottom: 0;
 left: 0;

 svg {
 font-size: 2.4rem;
 color: #232129;
 }

 p {
 font-family: 'Roboto Slab', sans-serif;
 font-weight: 400;
 font-size: 2rem;
 color: #232129;
 }

 &:hover {
 cursor: pointer;
 opacity: 50%;
 }
}

`