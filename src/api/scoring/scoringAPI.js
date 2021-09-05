import { getAccessToken, isTokenExpired } from "../authentication/authHelper";
import { Redirect } from 'react-router';
import { refreshToken } from "../authentication/authAPI";

//const baseUrl = 'http://127.0.0.1:8000';
const baseUrl = 'https://boiling-thicket-74024.herokuapp.com';

export const high_score = async () => {
    let dataAccess = getAccessToken();
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

    const response = await fetch(`${baseUrl}/scoring/highscore`, {
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

    const response = await fetch(`${baseUrl}/scoring/ind_score/`, {
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
    const response = await fetch(`${baseUrl}/scoring/score_flag/`, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': "JWT " + dataAccess,
        },
        method: 'POST',
        body: JSON.stringify(newFlag)
    })
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

    const response = await fetch(`${baseUrl}/scoring/`, {
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

    const response = await fetch(`${baseUrl}/scoring/verify/`+name, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'GET'
  })
  return response
};

export const checkRegister = async (name) => {
    let dataAccess = getAccessToken();
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
    const response = await fetch(`${baseUrl}/scoring/checkregister`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'GET'
  })
  const resp = await response.json()
  return resp[0]
};