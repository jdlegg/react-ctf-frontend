import { unprotected } from "../../api/authentication/authAPI";
import { useState, useEffect } from "react";

const Unprotected = () => {
    const [unprotected_value, setUnprotected_value] = useState('')

    useEffect( () => {
        unprotected().then( async (response) => {
            setUnprotected_value(response) }
        )
    }, [])

    return(
        <div>
            <p>Weclome to CTF v0.1</p>
        </div>
    )
}
export default Unprotected

//<p>The test pull of unportected data: {unprotected_value}</p>