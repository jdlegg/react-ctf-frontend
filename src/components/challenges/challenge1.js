import { useEffect, useState } from "react";
import { scoreFlag } from "../../api/scoring/scoringAPI";
import { checkChallenge } from "../../api/scoring/scoringAPI";

const Challenge1 = () => {

    const [flag, setFlag] = useState('')
    const [errorMessage, setErrorMessage] = useState([]) // handler for error message
    const [solved, setSolved] = useState(false)

    // Functions to reset the errorMessages back to none
    const clearState = () => {
        setErrorMessage([])
    }
    
    const handleChange = (e) => {
        if (e.target.name === 'flag') {
            setFlag(e.target.value)
        }
    }

    useEffect( () => {
        checkChallenge('WebApp1').then( async (response) => {
            if (response.status > 201) {
                setSolved(false)
                }
            else { setSolved(true) }
        })
    }, [])

    const handleSubmit = (e) => {
        clearState(); // clears the current error messages if they exist
        e.preventDefault();
        const newFlag = {
            name: "WebApp1",
            flag: flag,
        }
        scoreFlag(newFlag)
            .then( async (response) => { 
                console.log("insdie scoreFlag")
                if (response.status > 201) {
                    console.log("inside Response > 200 Scoring")
                    let error = await response.json()
                    if (error.flag) {
                        setErrorMessage( arr => [...arr, "Flag Error: " + error.flag[0]])
                    }
                } else { 
                    checkChallenge('WebApp1').then( async (response) => {
                        if (response.status > 201) {
                            setSolved(false)
                        } 
                        else { 
                            setSolved(true) 
                        }
                    })
                    }
            }
        )
    }
    
    return(
        <div>Challenge 1 Submission
            <p hidden>FLAG: test</p>
            <form onSubmit={handleSubmit}>
                <label>
                    {(solved) ? (<div>Solved!</div>) : (<p>Flag: <input name="flag" type="text" value={flag} onChange={handleChange}/> </p>)}       
                </label>
                <input type="submit" value="Submit"/>
                { errorMessage && <ul className="error"> {errorMessage.map((item) => (<li>{item}</li>))} </ul>}
            </form>
        </div>
    )
}
export default Challenge1;