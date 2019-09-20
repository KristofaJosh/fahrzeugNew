$('document').ready(function(){
    var seller_id = '';
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    };

    // console.log($.urlParam('id'))
   
    $.ajax({
        url: `http://localhost:3000/profile/${$.urlParam('id')}`,
        dataType: "json",
        method: "GET",
        success: function(data){
                $('#car-name').append(`<h4>${data.brand} -> ${data.model}</h4>`);
                $('#car-details').append(
                    `<h6>Brand:<span>${data.brand}</span></h6>
                        <h6>Model: <span>${data.model}</span></h6>
                        <h6>Condition: <span>${data.condition}</span></h6>
                        <h6>Price: <span>${data.price}</span></h6>
                        <h6>Note: <span>${data.note}</span></h6>
                        <h6>Negotiable <span>${data.negotiable}</span></h6>`
                ),
                $.ajax({
                    url: `http://localhost:3000/user/${data.user_id}`,
                    method: "GET",
                    dataType: "json",
                    success: function (data){
                        $('#contact-details').append(
                            ` <h6>Seller: <span>${data.fname} ${data.lname}</span></h6>
                            <h6>Contact: <span>${data.phone}</span></h6>`
                        )
                    }
                })
            }
    })
    // ajax ends

    
})
