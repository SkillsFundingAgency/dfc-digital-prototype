/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  $(".govuk-button").click(function () {
    if ($('#SelectedOption-1').is(':checked')) {

      window.location.href = 'save-my-progress/email.html';
	  return false;

    } else if ($('#SelectedOption-2').is(':checked')) {

      window.location.href = 'save-my-progress/reference.html';
      return false;
    }

  });


})

// import 'bootstrap';
