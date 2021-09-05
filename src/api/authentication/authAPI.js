import { getAccessToken, getRefreshToken, isTokenExpired } from "./authHelper";
import { Redirect } from 'react-router';

//const baseUrl = 'http://127.0.0.1:8000';
const baseUrl = 'https://boiling-thicket-74024.herokuapp.com';

export const createUser = async (newUser) => {
  const response = await fetch(`${baseUrl}/api/user/create/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newUser)
  })
  return response
};

export const loginUser = async (userCred) => {
    const response = await fetch(`${baseUrl}/api/token/obtain/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(userCred)
    })
    return response
}

export const logout = async () => {
    let dataAccess = getAccessToken();
    let dataRefresh = getRefreshToken();

    if (dataAccess === false || dataRefresh === false) {
        return false;
    }

    console.log(dataRefresh)
    const response = await fetch(`${baseUrl}/api/blacklist/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'POST',
    body: JSON.stringify({refresh: dataRefresh})

  })
  return response
};

export const refreshToken = async () => {
    let dataAccess = getAccessToken();
    let dataRefresh = getRefreshToken();

    if (dataAccess === false || dataRefresh === false) {
        return false;
    }

    const response = await fetch(`${baseUrl}/api/token/refresh/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'POST',
    body: JSON.stringify({refresh: dataRefresh})
  })

  if (response.status === 200) {
    const token = await response.json()
    localStorage.setItem('access_token', token.access)
    localStorage.setItem('refresh_token', token.refresh)
  }
  return response.data
};


export const prot = async () => {
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
    const response = await fetch(`${baseUrl}/api/hello/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "JWT " + dataAccess,
    },
    method: 'GET'
  })
  return response.text()
};

export const unprotected = async () => {
    const response = await fetch(`${baseUrl}/api/unprotected/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET'
  })
  return response.text()
};

