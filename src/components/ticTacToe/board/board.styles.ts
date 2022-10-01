import styled from "styled-components";



export const Board = styled.div`
margin: 0 auto;
margin-top:20vh;
display:flex;
justify-content:center;
align-items:center;
width:300px;
heigt:300px;
display:grid;
grid-template-columns:repeat(3, 1fr);
box-shadow:10px 10px 10px white;
`

export const Square = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:50px;
    width:100px;
    height:100px;
    border:1px solid white;
    background-color:black;
    &:hover{
        transition:0.5s;
        background-color:${props=>props.color};
    }
    :active{
        transition:1s;
        box-shadow:10px 10px 10px white;
        background-color:purple;
        transform:scale(3) ;
        border-radius:50%;
        border:1px solid purple;
    }
`