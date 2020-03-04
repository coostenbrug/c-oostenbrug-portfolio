import styled from "styled-components"
import Tag from "./Tag"

const TagSet = styled.div({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: " center",
    [`${Tag}`]: {
        marginLeft: "8px",
        marginBottom: "4px"
    },
    marginLeft: "-8px"
})

export default TagSet