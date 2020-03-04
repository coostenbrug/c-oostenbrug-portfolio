import React from "react"
import { Button, ButtonSet, BoxLinkSet, BoxLink, Tag, TagSet, Section } from "../components"
import { hiddenByComingSoon, wrapPage } from "../utils"
import { importIcons, projectData } from "../shared"

importIcons()

const LandingPage = () => (
    <>
        <div style={{margin: "300px 0"}}>
            <h1 style={{textAlign: "center", fontSize: "56px", margin: "0 0 32px 0"}}>Christiaan Oostenbrug</h1>
            <ButtonSet style={{marginTop: "16px"}}>
                <Button>About Me</Button>
                <Button>Experience</Button>
                <Button>Projects</Button>
                <Button>Skills</Button>
                <Button>Education</Button>
            </ButtonSet>
        </div>
        <Section title="About Me" id="About Me">
            <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Experience" id="Experience">
        <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Projects" id="Projects">
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
        <Section title="Skills" id="Skills">
        <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Education" id="Education">
        <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
    </>
)

export default wrapPage(LandingPage)
