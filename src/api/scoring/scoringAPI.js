import { getAccessToken, isTokenExpired } from "../authentication/authHelper";
import { Redirect } from 'react-router';
import { refreshToken } from "../authentication/authAPI";

export const multi_score = async (name) => {
    let dataAccess = getAccessToken();
    //console.log("Debug prot: ",dataAccess)
    if (dataAccess === false) {
        return false;
    } 

    if (!isTokenExpired(dataAccess)) {
        refreshToken().then((response) => {
            if(response === false) {
                return <Redirect to="/login" />
            } else {
                dataAccess = getAccessToken();
            }
        })
    }

    //console.log("Debug insdie Highscore in scoringAPI/Highscore")

    const response = await fetch(('http://127.0.0.1:8000/scoring/'+name) , {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'GET'
  })
  return response.text()
};

