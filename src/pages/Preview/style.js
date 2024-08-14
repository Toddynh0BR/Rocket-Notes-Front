import styled from "styled-components";

export const Container = styled.div`

`

export const Main = styled.main`
width: 55rem;
margin: auto;
margin-top: 4rem;
margin-bottom: 5rem;

flex-direction: column;
display: flex;
gap: 2rem;

span {
 font-family: 'Roboto Slab', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #FF9000;

 align-self: flex-end;
 margin-bottom: 2rem;
}

span:hover {
 cursor: pointer;
 opacity: 50%;
}

h2 {
 font-family: 'Roboto Slab', sans-serif;
 font-size: 3.2rem;
 font-weight: 500;
 color: #F4EDE8;
}

p {
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 font-weight: 300;
 color: #F4EDE8;
}

h3 {
 font-family: 'Roboto Slab', sans-serif;
 font-weight: 400;
 font-size: 2rem;
 color: #999591;

 border-bottom: 1px solid #3E3B47;
 padding: 2rem 0 1.5rem;
}

a {
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 font-weight: 300;
 color: #FFFFFF;
 
 width: fit-content;
 position: relative;
}

.links {
 flex-direction: column;
 display: flex;
 gap: 1rem;
}

a::after {
 content: " ";
 width: 0%;
 height: .1rem;
 background-color: #FFFFFF;

 transition: .3s ease-in-out;
 position: absolute;
 bottom: 0;
 left: 0;
}

a:hover::after {
 width: 100%;
}

.tags {
 width: 100%;
 margin-bottom: 5rem;

 align-items: center;
 flex-wrap: wrap;
 display: flex;
 gap: .5rem;
}

.MobalTitle {
 display: none;
}

@media (max-width: 430px){
 width: 100%;
 padding: 4rem;

 span, h2 {
  display: none;
 }

 .MobalTitle {
 span, h2 {
  display: flex;
  padding: 0;
  margin: 0;
  align-self: center;
 }

 justify-content: space-between;
 display: flex;
 }
}
`