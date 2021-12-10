import data from './data/profileData.json'

const profile = (state = data, action) => {
    switch (action.type) {
        case "save-changes":
            const newState = {
                "firstName": action.firstName,
                "lastName" :action.lastName,
                "handle":"lw",
                "profilePicture":"../../../images/profile-pic1.jpg",
                "bannerPicture": "../../../images/banner-pic1.jpg",
                "bio":action.bio,
                "website":action.website,
                "location":action.location,
                "dateOfBirth":action.birthday,
                "dateJoined": "Jan 2018",
                "followingCount": 100,
                "followersCount": 420
            }
            return(newState);
        default:
            return(state);
    }
}

export default profile;