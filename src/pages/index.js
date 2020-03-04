import React from "react"
import { Button, BoxLinkSet, BoxLink, Tag, TagSet, Section } from "../components"
import { hiddenByComingSoon, wrapPage } from "../utils"
import theme from "../theme"


const LandingPage = () => (
    <Section title="Projects">
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
    </Section>
)

export default wrapPage(LandingPage)
