import styled from "styled-components";

export const FeedContainerStyled = styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:35px;
        padding-top:20px;
        background-color:#f4f4f4;
`

export const RecipeCardStyled = styled.div`
    width:20vw;
    border:1px solid lightgray;
    margin:10px;
    padding:10px;
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    img{
        margin-bottom:10px;
        border-radius:10px;
    }

    button{
        margin-top:10px;
        width:90%;
    }
`
