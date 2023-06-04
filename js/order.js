// credit card
$(function($){
    $('.cc-number').payment('formatCardNumber');
    $('.cc-cvc').payment('formatCardCVC');
    $('.cc-expires').payment('formatCardExpiry');
})

// date - time
flatpickr("#checkin-date", {
    enableTime: true,
    dateFormat: "D j, F,Y (H:iK)",
});

// phone number with country code
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.21/js/utils.js"
});