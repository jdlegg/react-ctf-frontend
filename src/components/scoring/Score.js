import { useState } from "react";
import { Redirect } from 'react-router';
import { multi_score } from "../../api/scoring/scoringAPI";
import { useParams } from "react-router";

const Score = (props) => {
    
    const { name } = useParams();

    const [prote, setProte] = useState();
    //console.log("Debug insdie Score in components/scoring/Highscore")
    multi_score(name).then((response) => { 
        //console.log("Debug Prote: ",response)
        if(response === false) {
            //console.log("Inside Prote false");
            //console.log("isAuth: ", props.isAuth)
            props.setIsAuth(false);
            //console.log("After set - isAuth: ", props.isAuth)
            return <Redirect to = "/login/"/>
        } else { setProte(response)} })

    return(
        <div>Protected
            <p>
                Output:
            </p>
            {prote}
        </div>
    )
}

export default Score;