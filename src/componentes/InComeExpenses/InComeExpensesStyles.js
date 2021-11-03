import styled from 'styled-components'

export const ExpensesContainer = styled.div`
    width:14rem;
    height:4rem;
    background:#fff;
    display:flex;
    justify-content : center;
    align-items: center;
    text-align:center;
    background:#fff;

    .Income{
        padding:1rem;
        position:relative;
        
    }
    .Income:after{
        content:'';
        background:#0006;
        width:0.12rem;
        height:70%;
        display:block;
        position:absolute;
        top:0.7rem;
        left:99%;

    }
    .Expense{
        padding:1rem;
    }
`