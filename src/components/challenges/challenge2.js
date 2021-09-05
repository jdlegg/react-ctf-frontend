import { useEffect, useState } from "react";
import { scoreFlag } from "../../api/scoring/scoringAPI";
import { checkChallenge } from "../../api/scoring/scoringAPI";
import { Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import Individualscore from "../scoring/Individualscore";

const Challenge2 = (props) => {

    const [flag, setFlag] = useState('')
    const [errorMessage, setErrorMessage] = useState([])
    const [solved, setSolved] = useState(false)

    const history = useHistory();

    const clearState = () => {
        setErrorMessage([])
    }
    
    const handleChange = (e) => {
        if (e.target.name === 'flag') {
            setFlag(e.target.value)
        }
    }

    useEffect( () => {
        checkChallenge('WebApp2').then( async (response) => {
            if (response.status > 201) {
                setSolved(false)
                }
            else { setSolved(true) }
        })
    }, [])

    const handleSubmit = (e) => {
        clearState(); 
        e.preventDefault();
        const newFlag = {
            name: "WebApp2",
            flag: flag,
        }
        scoreFlag(newFlag)
            .then( async (response) => { 
                //console.log("insdie scoreFlag")
                if (response.status > 201) {
                    //console.log("inside Response > 200 Scoring")
                    let error = await response.json()
                    if (error.flag) {
                        setErrorMessage( arr => [...arr, "Flag Error: " + error.flag[0]])
                    }
                } else { 
                    checkChallenge('WebApp2').then( async (response) => {
                        if (response.status > 201) {
                            setSolved(false)
                        } 
                        else { 
                            setSolved(true)
                            props.scoreUpdate()
                        }
                    })
                }
            }
        )
    }
    
    return(
        <div>Challenge 2
            <form onSubmit={handleSubmit}>
                <label>
                    {(solved) ? (<div>Solved!</div>) : (<p>Flag: <input name="flag" type="text" value={flag} onChange={handleChange} content="FLAG: test2"/> </p>)}       
                </label>
                {(solved) ? (<p><Button onClick={()=> history.push('/challenges')} variant="primary">Return</Button></p>) : (<input type="submit" value="Submit"/>)}
                { errorMessage && <ul className="error"> {errorMessage.map((item) => (<li>{item}</li>))} </ul>}
            </form>
        </div>
    )
}
export default Challenge2;