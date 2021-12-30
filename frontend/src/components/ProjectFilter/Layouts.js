import styled from "styled-components";


export const MainLayout = styled.div`
    padding: 7rem;
    margin-top:-5%;
    margin-bottom:-5%;
    @media screen and (max-width:768px){
        padding: 1rem;
    }
    @media screen and (max-width:1366px){
        margin-top:-10%;
        margin-bottom:-10%;
    }
    @media screen and (max-width:1440px){
        margin-top:-10%;
        margin-bottom:-10%;
    }
    @media screen and (max-width: 600px){
        padding: 1rem;
        margin-top:-15%;
    }
    @media screen and (max-width: 414px){
        padding: 1rem;
        margin-top:-20%;
    }
    @media screen and (max-width: 375px){
        padding: 0rem;
        margin-top:-20%;
    }
    @media screen and (max-width: 320px){
        padding: 0rem;
        margin-top:-20%;
    }
`;
export const InnerLayout = styled.div`
    padding: 5rem 0;
`;