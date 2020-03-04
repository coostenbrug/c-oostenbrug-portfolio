import React from "react"
import { BoxLinkSet, BoxLink, Tag, TagSet, Section } from "../components"
import { hiddenByComingSoon, wrapPage } from "../utils"
import { importIcons, projectData } from "../shared"

importIcons()

const LandingPage = () => (
    <>
        <div>
            <h1 style={{textAlign: "center", fontSize: "56px", margin: "200px 0"}}>Christiaan Oostenbrug</h1>
        </div>
        <Section title="About Me">
            <p>About me text</p>
        </Section>
        <Section title="Projects">
            <BoxLinkSet>
                {projectData.map(projectLink => (
                    <BoxLink
                        title={projectLink.title}
                        key={projectLink.title}
                        background={projectLink.background}
                        href={projectLink.href}
                        icon={projectLink.icon}
                    >
                        <TagSet>
                        {projectLink.tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                        </TagSet>
                    </BoxLink>
                ))}
            </BoxLinkSet>
        </Section>
    </>
)

export default wrapPage(LandingPage)
