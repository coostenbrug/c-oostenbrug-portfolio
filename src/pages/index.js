import React from "react"
import { Button } from "../components"
import { hiddenByComingSoon } from "../utils"
import { wrapPage } from "../utils"


const LandingPage = () => (
    <>
        <a color="blue" href="/projects/project1">To Project 1</a>
        <a color="blue" href="/projects/project2">To Project 2</a>
    </>
)

export default wrapPage(hiddenByComingSoon(LandingPage))
