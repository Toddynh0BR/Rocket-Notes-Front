import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Roboto', sans-serif;
 transition: .3s ease-in-out;

 ::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: #312E38;
  border-radius: 1rem; 
}

::-webkit-scrollbar-thumb {
  background: #3E3B47; 
  border-radius: 1rem;
}


::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}

:root {
 font-size: 62.5%;
}

body {
 background-color:  #312E38;


}

a {
 text-decoration: none;
}
`

