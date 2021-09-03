import { getAccessToken, isTokenExpired } from "../authentication/authHelper";
import { Redirect } from 'react-router';
import { refreshToken } from "../authentication/authAPI";

export const high_score = async () => {
    let dataAccess = getAccessToken();
    //console.log("Debug prot: ",dataAccess)
    if (dataAccess === false) {
        return false;
    } 

    if (!isTokenExpired(dataAccess)) {
        refreshToken().then((response) => {
            if(response === false) {
                return <Redirect to="/" />
            } else {
                dataAccess = getAccessToken();
            }
        })
    }

    //console.log("Debug insdie Highscore in scoringAPI/Highscore")

    //const response = await fetch(('http://127.0.0.1:8000/scoring/highscore') , {
    const response = await fetch(('https://boiling-thicket-74024.herokuapp.com/scoring/highscore') , {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'GET'
  })
  return response
};

export const ind_score = async () => {
    let dataAccess = getAccessToken();
    //console.log("Debug prot: ",dataAccess)
    if (dataAccess === false) {
        return false;
    } 

    if (!isTokenExpired(dataAccess)) {
        refreshToken().then((response) => {
            if(response === false) {
                return <Redirect to="/" />
            } else {
                dataAccess = getAccessToken();
            }
        })
    }

    //console.log("Debug insdie Highscore in scoringAPI/Highscore")

    //const response = await fetch(('http://127.0.0.1:8000/scoring/ind_score/') , {
    const response = await fetch(('https://boiling-thicket-74024.herokuapp.com/scoring/ind_score') , {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'GET'
  })
  return response
};

export const scoreFlag = async (newFlag) => {

    let dataAccess = getAccessToken();
    //console.log("Debug prot: ",dataAccess)
    if (dataAccess === false) {
        return false;
    } 

    if (!isTokenExpired(dataAccess)) {
        refreshToken().then((response) => {
            if(response === false) {
                return <Redirect to="/" />
            } else {
                dataAccess = getAccessToken();
            }
        })
    }

    //const response = await fetch('http://127.0.0.1:8000/scoring/score_flag/', {
    const response = await fetch('https://boiling-thicket-74024.herokuapp.com/scoring/score_flag/', {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': "JWT " + dataAccess,
        },
        method: 'POST',
        body: JSON.stringify(newFlag)
    })
    // const body = await response.json()
    // console.log("DEBUG API: ", JSON.stringify(body))
    return response.text()
};

export const register = async (user) => {

    let dataAccess = getAccessToken();
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

    //const response = await fetch('http://127.0.0.1:8000/scoring/', {
    const response = await fetch('https://boiling-thicket-74024.herokuapp.com/scoring/', {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': "JWT " + dataAccess,
        },
        method: 'POST',
        body: JSON.stringify(user)
    })
    return response
};

export const checkChallenge = async (name) => {
    let dataAccess = getAccessToken();
    //console.log("Debug prot: ",dataAccess)
    if (dataAccess === false) {
        return false;
    } 

    if (!isTokenExpired(dataAccess)) {
        refreshToken().then((response) => {
            if(response === false) {
                return <Redirect to="/" />
            } else {
                dataAccess = getAccessToken();
            }
        })
    }

    //console.log("Debug insdie Highscore in scoringAPI/Highscore")

    //const response = await fetch(('http://127.0.0.1:8000/scoring/verify/'+name) , {
    const response = await fetch(('https://boiling-thicket-74024.herokuapp.com/scoring/verify/'+name) , {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'GET'
  })
  return response
};