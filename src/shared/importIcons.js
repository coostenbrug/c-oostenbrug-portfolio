import { library } from "@fortawesome/fontawesome-svg-core"
import { faCoffee, faPills } from "@fortawesome/free-solid-svg-icons"

const importIcons = () => {
    library.add(faCoffee, faPills)
}

export default importIcons