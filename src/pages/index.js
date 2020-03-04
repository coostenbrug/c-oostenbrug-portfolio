import React from "react"
import { Button, BoxLinkSet, BoxLink, Tag, TagSet } from "../components"
import { hiddenByComingSoon, wrapPage } from "../utils"
import theme from "../theme"


const LandingPage = () => (
    <>
        <BoxLinkSet>
            <BoxLink href="/projects/project1">
                <TagSet>
                    <Tag> Tag 1 </Tag>
                    <Tag> Tag 2 </Tag>
                </TagSet>
            </BoxLink>
            <BoxLink href="/projects/project1" background={theme.colors.primaryLight}>
                <TagSet>
                    <Tag> Tag 1 </Tag>
                    <Tag> Tag 2 </Tag>
                </TagSet>
            </BoxLink>
            <BoxLink href="/projects/project2">
                <TagSet>
                    <Tag> Tag 1 </Tag>
                    <Tag> Tag 2 </Tag>
                </TagSet>
            </BoxLink>
        </BoxLinkSet>
    </>
)

export default wrapPage(LandingPage)
