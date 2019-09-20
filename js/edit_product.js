$('document').ready(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    };

    let entries;

    // console.log($.urlParam('id'));
 

    $.ajax({
        url: `http://localhost:3000/profile/${$.urlParam('id')}`,
        dataType: "json",
        method: "GET",
        success: function(data){
            console.log(data)
            entries = data;
            $('#car-edit').append(
            `<div class="form-row">
            <div class="form-group col-md-6">
            <label for="brand">Brand</label>
            <input type="text" class="form-control" id="brand" value="${data.brand}" required>
            </div>
            <div class="form-group col-md-6">
            <label for="model">Model</label>
            <input type="text" class="form-control" id="model" value="${data.model}" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-2">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price" value=${data.price}>
            </div>
            <div class="form-group col-md-2">
                <label for="condition">Condition</label>
                <select class="form-control" name="condition" id="condition" value=${data.condition}>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="phone">Note</label>
                <input type="text" class="form-control" id="note" value="${data.note}">
            </div>
            
        </div>
        <div class="form-group">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Negotiable
            </label>
            </div>
        </div>`
            )
        },
        
    });

    $('button').click(function(){
        event.preventDefault();
        let brand =  $('#brand').val();
        let model = $('#model').val();
        let condition = $('#condition').val();
        // let image = $('#image').val();
        let price = $('#price').val();
        let note = $('#note').val();
        let location = entries.location
        let negotiable = $('#gridCheck').val();

        console.log(entries)

        data = {
            brand: brand,
            model: model,
            condition: condition,
            // image: images,
            price: price,
            location: location,
            zip: entries.zip,
            note: note,
            negotiable: negotiable,
            user_id: entries.user_id
        }

        $.ajax({
            url: `http://localhost:3000/profile/${$.urlParam('id')}`,
            method: "PUT",
            data: data,
            success: function(){
                event.preventDefault();
                console.log(entries)

            }

        })
    })

})