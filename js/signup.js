$(document).ready(function(){
    $("#signup").click(function(event){
        event.preventDefault();
        let fname = $('#fname').val();
        let lname = $('#lname').val();
        let phone = $('#phone').val();
        let mobile = $('#mobile').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let cpassword = $('#cpassword').val();
        let address_one = $('#address').val();
        let address_two = $('#address_two').val();
        let city = $('#city').val();
        let state = $('#state').val();
        let zip = $('#zip').val();
        
        const create_user = {
            fname: fname,
            lname: lname,
            phone: phone,
            mobile: mobile,
            email: email,
            password: password,
            address: address_one,
            address_two: address_two,
            city: city,
            state: state,
            zip: zip
        }

        $.ajax({
            method: "GET",
            url: `http://localhost:3000/user?email=${email}`,
            datatype: "json",
            success: function(data){
                if (data.length > 0){
                    //modal
                    alert('That mail already exist on our server')
                }else{
                    $.ajax({
                        method: "POST",
                        url: 'http://localhost:3000/user',
                        data: create_user,
                        success: function(){
                            //modal box to check mail
                            window.location = "index.html";
                            alert('An email has been sent to your 0address')
            
                        },
                        error: function(){
                            alert('Failed!')
                        }
            
                    });
                }
            },
            error: function(){
                //Modal
                alert('Unkown Error Occured!')
            }

        });

    });

})