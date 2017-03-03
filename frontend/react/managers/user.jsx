import $ from 'jquery';

function getUserDetails() {
    $.get('/api/users/', (response) => {
        console.log(response)
    })
}

export {getUserDetails}
