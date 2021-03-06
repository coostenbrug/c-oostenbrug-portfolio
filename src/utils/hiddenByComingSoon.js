import React, {useState, useEffect} from "react"

const hiddenByComingSoon = WrappedComponent => () => {

    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        if (hidden == true){
            document.addEventListener("keydown",handleKeyDown)
            document.addEventListener("keyup",handleKeyUp)
        }

        return () => {
            document.removeEventListener("keydown",handleKeyDown)
            document.removeEventListener("keyup",handleKeyUp)
        }
    }, [hidden])

    let map = {};

    function handleKeyDown(e) {
        map[e.keyCode] = true;
               
        if(map[90] && map[80]) {
            setHidden(false)
            map = []
        } 
    }

    function handleKeyUp(e) {
        map[e.keyCode] = false;
    }

    return(
        hidden ?
        <p style={{margin: "200px auto", textAlign: "center"}} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}> Coming Soon </p>
        :
        <WrappedComponent/>
    )

}

export default hiddenByComingSoon