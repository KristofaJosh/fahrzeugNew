$(document).ready(function(){
    $('#reg').hide()
    $('#sign-in').click(()=>{
        event.preventDefault();

        let email = $('#email').val();
        let pass = $('#password').val();

        $.ajax({
            url: `http://localhost:3000/user?email=${email}`,
            method: "GET",
            dataType: "json",
            success: function(data){
                // console.log(data.length)
                //check logged in

                for (x of data){
                    if(x.password === pass && x.email === email){
                        localStorage.setItem('email', x.email);
                        localStorage.setItem('id', x.id);
                        localStorage.setItem('fname', x.fname);
                        window.location = `index.html`;
                    }else{
                        $('#reg').show()
                    }
                }

            },
            error: function(){
                alert('failed')
            }
        });

    });
    $('#logout').click(()=>{
        localStorage.clear();
        alert('Logged Out Successfully!')
        window.location = "index.html"
    })
})


