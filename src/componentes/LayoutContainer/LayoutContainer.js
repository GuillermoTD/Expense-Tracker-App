import LayoutContainerStyles from "./LayoutContainerStyles"


const LayoutContainer = ({children})=>{
    return(
        <LayoutContainerStyles>
            {children}
        </LayoutContainerStyles>
    )
}

export default LayoutContainer