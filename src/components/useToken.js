import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        // NOTE: sessionStorage store session in ONLY tabs in chrome
        // can replace sessionStorage -> localStorage to save to local
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        // if (userToken) {
        //     localStorage.clear();
        // }
        // else {
            localStorage.setItem('token', JSON.stringify(userToken));
        // }

        // console.log("update userToken")
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}