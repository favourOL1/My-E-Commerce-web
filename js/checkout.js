function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-f40867be5a3f3cd6ee5e8a34e42e6f7b-X",
      tx_ref: "txref" + Date.now(),
      amount: 300500,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      meta: {
        source: "docs-inline-test",
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "mflavihno2@gmail.com",
        phone_number: "08100000000",
        name: "Favour ol",
      },
      customizations: {
        title: "Flutterwave Developers",
        description: "Test Payment",
        logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
      },
      callback: function (data){
        console.log("payment callback:", data);
      },
      onclose: function() {
        console.log("Payment cancelled!");
      }
    });
  }