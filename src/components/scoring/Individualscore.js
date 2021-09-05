import { useState, useEffect } from "react";
import { ind_score } from "../../api/scoring/scoringAPI";

const Individualscore = () => {
    const [tableData, setTableData] = useState([]);
    
    useEffect( () =>{
        ind_score().then( async (response) => {
            const body = await response.json()
            setTableData(body)
        })
    }, [])
    
    return(
        <div>
            {tableData}
        </div>
    )
}
export default Individualscore;

