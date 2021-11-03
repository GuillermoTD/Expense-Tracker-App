import styled from 'styled-components'

export const TransactionListContainer = styled.div`
    width:90%;
    height:95%;


    & h3{
        margin-bottom:1.7rem;
    }
`

export const TransactionItemContainer = styled.div`
    width:100%;
    height:2rem;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    box-shadow:1px 1px 3px 2.5px #0001;
    position:relative;
    margin-bottom:1rem;

    & .deleteButton{
        color:red;
        position:relative;
        left:1rem;
        font-size:0.98rem;
        cursor:pointer;
        width:1rem;
        height:1rem;
    }
   
    & .plus:before{
        content:"";
        display:block;
        position:absolute;
        background:green;
        width:0.2rem;
        height:100%;
        right:0;
        top:0;
    }

    & .minus:before{
        content:"";
        display:block;
        position:absolute;
        background:#e21b39;
        width:0.2rem;
        height:100%;
        right:0;
        top:0;
    }



`

