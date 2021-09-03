import { useState, useEffect } from "react";
import { high_score } from "../../api/scoring/scoringAPI";
import { Table } from "react-bootstrap";

const Highscore = () => {
    const [tableData, setTableData] = useState([]);

    useEffect( () =>{
        high_score().then( async (response) => {
            const body = await response.json()
            setTableData(body)
        })
    }, [])

    return(
        <div className="container">
            <Table variant="default" style={{ width: "50%", margin: "20px auto"}} striped borderd hover size="sm" variant="light">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(
                        ({ username, points }) => {
                            return (
                                <tr>
                                    <td>{username}</td>
                                    <td>{points}</td>
                                </tr>
                            )
                        } )}
                </tbody>
            </Table>
        </div>
    )
}
export default Highscore;