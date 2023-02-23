import { useState } from "react"
import GlobalContext from "./GlobalContext"

const GlobalState = ({children}) =>{

    const [id, setId] = useState()

    const Provider = GlobalContext.Provider

    const values = {
        id,
        setId
    }

    return <Provider value={values}>{children}</Provider>
}

export default GlobalState