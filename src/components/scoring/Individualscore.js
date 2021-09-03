import { useState, useEffect } from "react";
import { ind_score } from "../../api/scoring/scoringAPI";

const Individualscore = (props) => {
    const [tableData, setTableData] = useState([]);

    useEffect( () =>{
        ind_score().then( async (response) => {
            const body = await response.json()
            setTableData(body)
        })
    }, [])
    console.log(tableData)
    return(
        <div className="container">
            {tableData}
        </div>
    )
}
export default Individualscore;

