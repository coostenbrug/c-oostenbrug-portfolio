import styled from "styled-components"
import Button from "./Button"

const ButtonSet = styled.div({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: " center",
    [`${Button}`]: {
        marginLeft: "16px",
        marginBottom: "8px"
    },
    marginLeft: "-16px"
})

export default ButtonSet