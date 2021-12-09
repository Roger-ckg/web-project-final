const URL = 'http://localhost:4001/db/user';
const USER_URL = 'http://localhost:4001/api/user';



const findProfileById = (dispatch, id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'get-profile',
                profile
            })
        )

        .catch(err => console.error(err));

export const updateProfile = (profile, dispatch) => {
    fetch(`${URL}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(profile => dispatch({
        type: 'update-profile',
        profile
    }));
}


export const changeUser = (user, dispatch) => {
    fetch(`${USER_URL}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(user => dispatch({
        type: 'update-user',
        user
    }));
}

export const deleteProfile = (profile) => {
    fetch(`${URL}/${profile._id}`, {
        method: 'DELETE'
    })
}

export default {
    updateProfile, findProfileById, deleteProfile, changeUser
}