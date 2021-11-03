import styled from 'styled-components'

const LayoutContainerStyles = styled.div`
    width:100%;
    height:98vh;
    background:#eeeded;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    /* display:grid;
    grid-template-columns:repeat(auto-fit,minmax(380px,1fr));
    align-items:center;
    justify-items:center;
    overflow-x:hidden; */
    
    & input{
        height:2rem;
        outline:none;
        border:2px solid #0008;
        border-radius:0.3rem;
        width:70%;
        margin:auto;
    }
    & label{
        text-align:center;
    }

    & button{
        border:none;
    }

    & .Side1{
        height:30rem;
        width:40rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-evenly;
        box-shadow:2px 3px 4px 5px #0001;
        border-radius:0.4rem;
        margin-bottom:2rem;
    }

    & .Side2{
        height:30rem;
        width:20rem;
        box-shadow:2px 3px 4px 5px #0001;
        border-radius:0.4rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-bottom:2rem;
    }

    @media only screen and (max-width:479px){
        display:flex;
        flex-direction:column;
        margin:auto;
        overflow:scroll;

        & .Side1{
            margin-top:2rem;
            width:80%;
        }

        & .Side2{
            height:30rem;
        }

    }

    @media only screen and (max-width:768px){
        display:flex;
        flex-direction:column;
        overflow-x:hidden;
        margin:auto;

        & .Side1{
            margin-top:2rem;
            width:80%;
        }

    }

   
`

export default LayoutContainerStyles





