import { createGlobalStyle } from "styled-components";

// font-family: 'Comfortaa', cursive;
// font-family: 'Gloock', serif;

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1700px) {
            font-size: 75%;
        }
     
    }

    body{
        background: #1b1b1b;
        font-family: 'Comfortaa', cursive;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: whitesmoke;
        transition: all 0.5s ease;
        font-family: 'Comfortaa', cursive;
        &:hover{
            background: #23d997 ;
            color: whitesmoke;
        }
       
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: whitesmoke;
    }
    h4{
        font-weight: bold;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    p{
         padding: 3rem 0rem;
         color: #ccc;
         font-size: 1.5rem;
         line-height: 150%;
    }
`;

export default GlobalStyle;
