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
       
        console.log(e.keyCode)
        
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
        <div onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}> Coming Soon </div>
        :
        <WrappedComponent/>
    )

}

export default hiddenByComingSoon