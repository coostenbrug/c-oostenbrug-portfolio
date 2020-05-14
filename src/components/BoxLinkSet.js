import styled from "styled-components"
import {BoxLinkWrap} from "./BoxLink"

const BoxLinkSet = styled.div({
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    [`${BoxLinkWrap}`]: {
        marginLeft: "16px",
        marginBottom: "16px"
    },
    marginLeft: "-16px"
})

export default BoxLinkSet