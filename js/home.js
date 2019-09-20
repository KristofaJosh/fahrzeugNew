$('document').ready(function(){

    //check for login

    if (localStorage.length > 0){
        console.log(localStorage)
        $('#log').hide();
        $('#register').hide() //index page et al
    }else{
        $('#logout').hide();
        $('#account').hide();

    }



    // $.urlParam = function(name){
    //     var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    //     return results[1] || 0;
    // };

    // $.ajax({
    //     url: `http://localhost:3000/user/${$.urlParam('id')}`,
    //     dataType: "json",
    //     method: "GET",
    //     success: function(data){
    //         console.log(data)

    //     }
    // })













    //to output data on dashboard
    $.ajax({
        url: 'http://localhost:3000/profile',
        dataType: "json",
        method: "GET",
        success: function(data){
            // console.log(data)
            for (x of data){
                $('.home-cards').append(`
                <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="card" id="card-${x.id}">
                    <a class="single_ad" href="single_ad.html?id=${x.id}"><img src="img/ads/car-ad-2.jpg" alt="Avatar" style="width:100%"><a>
                    <div class="car-info">
                        <h4><strong>${x.brand}</strong></h4>
                        <h5>${x.model}<span id="${x.condition}"><i id="condition">${x.condition}</i></span></h5>
                        <h6><strong>Location:</strong> ${x.location}</h6>
                        <p><strong><span>$${x.price}</span></strong></p>
                    </div>
                </div>
            </div>`);
            }

        }   
    })
})