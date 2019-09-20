$('document').ready(function(){
    //to output data on dashboard
    let user_id;
    if (localStorage.length > 0){
        user_id = localStorage.id
    }else{
        window.location = 'login.html'
        return
    }

    //dash board current user
    $.ajax({
        url: `http://localhost:3000/user`,
        dataType: "json",
        method: "GET",
        success: function(){
            $('#username').append(`<h1 class="display-4">Hello ${localStorage.fname}</h1>`);
        }
    })


    $.ajax({
        url: `http://localhost:3000/profile`,
        dataType: "json",
        method: "GET",
        success: function(data){
            // console.log(data)
            for (x of data){
                if (x.user_id == user_id){
                    $('.inner-card-div').append(`
                    <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card" id="card-${x.id}">
                        <a class="single_ad" href="single_ad.html?id=${x.id}"><img src="img/ads/car-ad-2.jpg" alt="Avatar" style="width:100%"><a>
                        <div class="car-info">
                            <h4><strong>${x.brand}</strong></h4>
                            <h5>${x.model}<span id="cond"><i id="${x.condition}">${x.condition}</i></span></h5>
                            <h6><strong>Location:</strong> ${x.location}</h6>
                            <p><strong><span>$${x.price}</span></strong></p>
                            <div id="seperator"></div>                        
                            <div id="del-edi">
                                <p><button class='del btn btn-danger btn-sm' id="del-${x.id}" value="${x.id}">DEL</button>
                                <a href="edit_ad.html?id=${x.id}">
                                    <button class="edit btn btn-success btn-sm">EDIT</button></a></p>
                            </div>
                        </div>
                    </div>
                </div>`)
                }
            }
            //to delete an item
            $('button.del').click(function(event){
                event.preventDefault();
                const id = $(this).val();
                $.ajax({
                    url: `http://localhost:3000/profile/${id}`,
                    method: 'DELETE',
                    success: function(){
                        alert('Deleted!')
                    },
                    error: function(){
                        alert('Failed!')
                    }

                })
            })

        }   
    })

})