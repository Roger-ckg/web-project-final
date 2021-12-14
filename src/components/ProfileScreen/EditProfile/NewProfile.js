import React, {useState} from 'react';

import './index.css';


const NewProfile = ({profileData}) => {
    const [edit, setEdit] = useState(false);
    return (<>
            {!edit}
        </>
    )
}