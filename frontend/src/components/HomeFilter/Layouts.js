import styled from "styled-components";


export const MainLayout = styled.div`
    padding: 7rem;
    margin-top:-10%;
    @media screen and (max-width:768px){
        padding: 2rem;
    }
    @media screen and (max-width: 642px){
        padding: 4rem;
    }
    /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
    @media screen and (max-width: 571px){
        padding: 2rem .4rem;
    }
`;
export const InnerLayout = styled.div`
    padding: 5rem 0;
`;