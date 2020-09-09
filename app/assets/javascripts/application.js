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

	
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawAxisTickColors);

	function drawAxisTickColors() {
		  var data = new google.visualization.arrayToDataTable([
          
          ["Social work", 44],
          ["Health", 31],
          ["Residential care", 12],
          ["Membership organisation", 10],
          ['Public admin and defence', 3],
          ['Service to buildings', 3],
          ['Service to buildings', 3]
       
        ]);

		  var options = {
			title: '',
			
			chartArea: {width: '50%'},
			hAxis: {
			  title: '',
			  minValue: 0,
			  textStyle: {
				bold: true,
				fontSize: 12,
				color: '#4d4d4d'
			  },
			  titleTextStyle: {
				bold: true,
				fontSize: 18,
				color: '#4d4d4d'
			  }
			},
			vAxis: {
			  title: '',
			  textStyle: {
				fontSize: 14,
				bold: true,
				color: '#848484'
			  },
			  titleTextStyle: {
				fontSize: 14,
				bold: true,
				color: '#848484'
			  }
			}
		  };
		  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
		  chart.draw(data, options);
		}


})

// import 'bootstrap';
