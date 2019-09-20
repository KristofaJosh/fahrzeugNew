$('document').ready(function(){
    $('#upload_post').click(function(){
        event.preventDefault();
        let brand_name = $("#brand").val();
        let model_bname = $('#model').val();
        let condition = $('#condition').val();
        let images = $('#image_files').val();
        let price = $('#price').val();
        let location = $("#location").val();
        let zip = $('#zip').val();
        let note = $('#note').val();
        let negotiable = $('#gridCheck').val();

        
        if (localStorage.length >= 1){
            
            create_post = {
                brand: brand_name,
                model: model_bname,
                condition: condition,
                image: images,
                price: price,
                location: location,
                zip: zip,
                note: note,
                negotiable: negotiable,
                user_id: localStorage.getItem('id')
            }
            $.ajax({
                method: "POST",
                url: 'http://localhost:3000/profile',
                data: create_post,
    
            });

        }else{
            window.location = `login.html`;
        }     

    })

})