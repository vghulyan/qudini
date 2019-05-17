export const LOGIN = "LOGIN";

export const authenticate = (username, password) => {
    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {
                    Authorization: "Basic " + btoa(username + ":" + password)
                }
            };
            fetch('https://app.qudini.com/api/queue/gj9fs', requestOptions)
                .then(handleResponse)
                .then(result => {
                    // login successful if there's a user in the response
                    if (result.status === 'ok') {
                        // store user details and basic auth credentials in local storage
                        // to keep user logged in between page refreshes
                        //localStorage.setItem('user', JSON.stringify(user));

                        console.log(result);
                    }
                    dispatch({ type: 'GET_CUSTOMER', payload: result })
                });
            //dispatch({ type: 'AUTHENTICATED', payload: result })
        }
        catch(e) {
            console.log(e);
        }
    }
};

const handleResponse = response => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};

const logout = () => {
    console.log('logout');
};

export const GET_CUSTOMER = "GET_CUSTOMER";
export const getCustomer = () => {
    return {
        type: GET_CUSTOMER,
        payload: {name:'VG'}
    }
};
