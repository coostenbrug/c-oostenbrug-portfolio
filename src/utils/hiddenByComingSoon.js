import React, {useState} from "react"

const hiddenByComingSoon = WrappedComponent => () => {
    const [hidden, setHidden] = useState(true)

    document.addEventListener("keydown",handleKeyDown)
    document.addEventListener("keyup",handleKeyUp)

    let map = {};

    function handleKeyDown(e) {
        map[e.keyCode] = true;
       
        if(map[90] && map[80]) {
            window.removeEventListener("keydown",handleKeyDown)
            setHidden(false)
            map = []
        } 
    }

    function handleKeyUp(e) {
        map[e.keyCode] = false;
    }

    return(
        hidden ?
        <div> Coming Soon </div>
        :
        <WrappedComponent/>
    )

}

export default hiddenByComingSoon
