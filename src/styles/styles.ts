import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Comme Light";
        src: url("/fonts/Comme-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Comme Bold";
        src: url("/fonts/Comme-Bold.ttf") format("truetype");
        font-style: normal;
    }
 @font-face {
    font-family: 'RedHatDisplay';
    src: url('/fonts/RedHatDisplay-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
    body,
    html,
    a {
        font-family: 'Comme Light', sans-serif;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: rgb(78, 110, 126);
        overflow-x: hidden;
    }

    a:hover {
        color:rgb(38, 109, 24);
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow:rgb(252, 0, 13) 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Comme Bold', serif;
        color:rgb(247, 242, 193);
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: rgb(252, 251, 234);
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
        background:red;
    }
   .ant-drawer-content {
         background:#4E6E7E;
    }
`;
