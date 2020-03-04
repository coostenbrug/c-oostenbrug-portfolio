import styled from "styled-components"
import Tag from "./Tag"

const TagSet = styled.div({
    display: "flex",
    justifyContent: " center",
    [`${Tag}`]: {
        marginLeft: "8px"
    },
    marginLeft: "-8px"
})

export default TagSet