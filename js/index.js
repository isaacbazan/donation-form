// $(function () {
//   $('[data-toggle="popover"]').popover();
  
//   $('#cvc').on('click', function(){
//     if ( $('.cvc-preview-container').hasClass('hide') ) {
//       $('.cvc-preview-container').removeClass('hide');
//     } else {
//       $('.cvc-preview-container').addClass('hide');
//     }    
//   });
  
//   $('.cvc-preview-container').on('click', function(){
//     $(this).addClass('hide');
//   });
// });

//Date Formatting
var cleave = new Cleave('#ExpiryDate', {
    date: true,
    datePattern: ['m', 'y']
});

var cleave = new Cleave('#input-amount', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});


//Amount


//Credit Card Formatting
var cleave = new Cleave('#CreditCardNumber', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        switch(type){
          case "mastercard":
              $("#CreditCardNumber").removeClass("visa amex discover");
              $("#CreditCardNumber").addClass("mastercard");
              break;
          case "visa":
             $("#CreditCardNumber").removeClass("mastercard amex discover");
             $("#CreditCardNumber").addClass("visa");
              break;
              case "amex":
              $("#CreditCardNumber").removeClass("visa mastercard discover");
              $("#CreditCardNumber").addClass("amex");
              break;
              case "discover":
              $("#CreditCardNumber").removeClass("mastercard amex discover");
              $("#CreditCardNumber").addClass("discover");
              break;
          default:
              $("#CreditCardNumber").removeClass("mastercard amex discover visa");
              $("#CreditCardNumber").addClass("credit-card");
              
        }
        
    }
});
