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

    $('.in-progress li a').on('click', function (e) {
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
        $('#' + $(this).val()).show();
    })

    $('section.sub-regional').hide();
    $('#hertfordshire').show();
    $('select#subregional').change(function () {
        $('section.sub-regional').hide();
        $('#' + $(this).val()).show();
    })

    var $element = $('#step-by-step-navigation');
    var stepByStepNavigation = new GOVUK.Modules.AppStepNav();
    stepByStepNavigation.start($element);


    var skillsCheckboxes = $("#accordion-filter-skills-list input[type=checkbox]");
	skillsCheckboxes.each(function () {
        $(this).change(updateCount);
    });
	
    function updateCount() {
		var target = $(this),
		parent = target.closest('.govuk-accordion__section'),
		checked = parent.find('input[type="checkbox"]:checked'),
		checkedAll = $('#accordion-filter-skills-list input[type="checkbox"]:checked').length,
		sectionCount = parent.find('.section-count'),
			
		sectionCountLength = checked.length,
		count = $("#count span");
			
		count.text(checkedAll);
		sectionCount.text(sectionCountLength).toggle(sectionCountLength > 0);
    }
	
	/* retain skills selection on browser back or forward*/
	$(window).on("load", function() {
		updateCount(); 
		
		/* accordion section selected checkbox count again */
		var accordionSection = $('#accordion-filter-skills-list .govuk-accordion__section');
		accordionSection.each(function () {
    		var sectionCheckedLength = $(this).find('input[type="checkbox"]:checked').length;
			$(this).find('.section-count').text(sectionCheckedLength).toggle(sectionCheckedLength > 0);
			
		});
	});
	

})


// import 'bootstrap';
