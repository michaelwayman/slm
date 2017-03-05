import $ from 'jquery';


function userDetails(cb) {
    $.ajax({
        type: 'GET',
        url: localStorage.user,
        success: function(data, textStatus, jqXHR) {
            cb(jqXHR.status, data)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            cb(jqXHR.status, jqXHR.responseJSON)
        }
    });
}

export default {userDetails}
