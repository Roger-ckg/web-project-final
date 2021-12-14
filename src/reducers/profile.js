import data from './data/profileData.json'

const profile = (state = data, action) => {
    switch (action.type) {
        case 'update-profile':
            const updatedInfo = {
                "firstName": action.newInformation.firstName,
                "lastName": action.newInformation.lastName,
                "profilePicture":"../../../images/profile-pic1.jpg",
                "bannerPicture": "../../../images/banner1.jpg",
                "bio": action.newInformation.bio,
                "website": action.newInformation.website,
                "location": action.newInformation.location,
                "dateOfBirth":action.newInformation.dateOfBirth,
                "followingCount": 100,
                "followersCount": 420
            }
            return(updatedInfo);
        case 'save-changes':
            const newInfo = {
                "firstName": action.firstName,
                "lastName": action.lastName,
                "profilePicture":"../../../images/profile-pic1.jpg",
                "bannerPicture": "../../../images/banner1.jpg",
                "bio": action.bio,
                "website": action.website,
                "location": action.location,
                "dateOfBirth": action.birthday,
                "followingCount": 100,
                "followersCount": 420
            }
            return(newInfo);
        case 'fetch-profile-data':
            return(action.profileData);
        case 'render-mongo-data':
            return(action.profileData);
        case 'mongo-update-profile':
            const newProf = {
                "firstName": action.newProfile.firstName,
                "lastName": action.newProfile.lastName,
                "profilePicture":"../../../images/profile-pic1.jpg",
                "bannerPicture": "../../../images/banner1.jpg",
                "bio": action.newProfile.bio,
                "location": action.newProfile.location,
                "dateOfBirth":action.newProfile.dateOfBirth,
            }
            return(newProf);
        default:
            return(state);
    }
}

export default profile;