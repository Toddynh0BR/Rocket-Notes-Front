import styled from "styled-components";

export const Container = styled.header`
 height: 10rem;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 border-bottom: 1px solid #3E3B47;
 padding: 4rem;

.Profile {
 align-items: center;
 display: flex;
 gap: 1rem;
}

img {
 height: 7rem;
 width: 7rem;

 border-radius: 50%;
 cursor: pointer;
}

p, span {
 font-family: 'Roboto Slab', sans-serif;
}
p {
 font-size: 1.4rem;
 font-weight: 400;
 color: #999591;
}

span {
 font-size: 1.8rem;
 font-weight: 700;
 color: #F4EDE8;
}

svg {
 font-size: 3.6rem;
 color: #999591;
}

svg:hover, span:hover {
 cursor: pointer;
 opacity: 50%;
}
`