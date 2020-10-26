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

    $(".govuk-button").click(function () {
        if ($('#SelectedOption-3').is(':checked')) {

            window.location.href = 'save-my-progress/email-saved.html';
            return false;

        } else if ($('#SelectedOption-4').is(':checked')) {

            window.location.href = 'save-my-progress/reference-saved.html';
            return false;
        }

    });

    $('.in-progress li a').on('click',function (e) {
        $(e.target.hash).closest('.govuk-accordion__section').addClass('govuk-accordion__section--expanded');
    });
	
	$('.govuk-header__menu-button').click(function () { 
		$(this).toggleClass('govuk-header__menu-button--open');
		$('#navigation').toggleClass('govuk-header__navigation--open');
	})


  $('section.regional').hide();
  $('#east-midlands').show();
  $('select#regional').change(function () {
    $('section.regional').hide();
    $('#'+$(this).val()).show();
  })
	
	$('section.sub-regional').hide();
	$('#hertfordshire').show();
	$('select#subregional').change(function () {
    $('section.sub-regional').hide();
    $('#'+$(this).val()).show();
  })

	
  

  

  var $element = $('#step-by-step-navigation');
  var stepByStepNavigation = new GOVUK.Modules.AppStepNav();
  stepByStepNavigation.start($element);
	
	

        $("#psf-skills input[type=checkbox]").each(function () {
          $(this).change(updateCount);
			//$(this).change(updateSectionCount);
        });

        updateCount();

        function updateCount () {
          var count = $("#psf-skills input[type=checkbox]:checked").size();

          $("#count span").text(count);
			$(".govuk-accordion__section h2 .section-count").text(count).toggle(count > 0);
          //$("#status").toggle(count > 0);
        }
	function updateSectionCount () {
          var sectionCount = $("#psf-skills input[type=checkbox]:checked").size();

          //$("#count span").text(sectionCount);
			$(".govuk-accordion__section h2 .section-count").text(sectionCount).toggle(sectionCount > 0);
		//closest('.govuk-accordion__section').find('.section-count')
          //$("#status").toggle(count > 0);
        }
	
		
	
	
})

// import 'bootstrap';
