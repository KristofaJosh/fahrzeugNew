$('#pay').click(function(){
    const API_publicKey = "FLWPUBK_TEST-c5d4de083f26d65849022c1f62662fbf-X";
    payWithRave()
    
    function payWithRave() {
        var x = getpaidSetup({
            PBFPubKey: API_publicKey,
            custom_title: "Fahrzeug.com",
            customer_email: "user@example.com",
            amount: 2000,
            customer_phone: "234099940409",
            currency: "NGN",
            txref: "rave-123456",
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function() {},
            callback: function(response) {
                var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
                console.log("This is the response returned after a charge", response);
                if (
                    response.tx.chargeResponseCode == "00" ||
                    response.tx.chargeResponseCode == "0"
                ) {
                    // redirect to a success page
                    alert('successful')
                    console.log(txref)
                    console.log(response)
                    x.close(); // use this to close the modal immediately after payment.

                } else {
                    // redirect to a failure page.
                    alert('failed')
                    console.log(txref)
                    console.log(response)
                    x.close(); // use this to close the modal immediately after payment.

                }
    
                // x.close(); // use this to close the modal immediately after payment.
            }
        })
    }
})
