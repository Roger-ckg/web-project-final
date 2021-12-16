const URL = 'http://localhost:4001/api/profile';

export const findAllProfile = (dispatch) => {
    fetch(URL).then(response => response.json()).then(profileData => dispatch({
        type:'render-mongo-data',
        profileData
    }))
}

export const findProfile = (dispatch) =>
{
//    debugger;
    return fetch(URL, {
        credentials: "include"
    })
        .then(res => res.json())
        .then(profile => dispatch({
            type: 'fetch-profile-data',
            profileData: profile
        }))
}

export const updateProfile = (profile, dispatch) =>
    fetch(URL, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(newProfile => dispatch({
        type: 'mongo-update-profile',
        newProfile
    }));

export const findProfileById = (id, dispatch) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json()).then(profileData => dispatch({
        type:'render-mongo-data',
        profileData
    }));

export default {
    findAllProfile, updateProfile, findProfileById, findProfile
}