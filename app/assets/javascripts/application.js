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

  $(".filters-button").on("click", function() {
        event.preventDefault();
        $(".filters").toggle(),
        $(this).text(function(e, t) {
            return "Show filters" === t ? "Hide filters" : "Show filters"
        })
    })



    $(".js-enabled .filters input#location").change(function () {
   if ($(this).val()) {
      $("#distance-block").show();
      $(".fac-section-sort-js").hide();
      $(".fac-section-sort-nojs").show();
   }
   else {
      $("#distance-block").hide();
      $(".fac-section-sort-js").show();
      $(".fac-section-sort-nojs").hide();
   }
});

// *** Triage tool - Home page ***

  // *** Triage tool - Dashboard filters ***

  // radios

  var primaryRadio = $('input[name="changed-name"]:checked').val()
  var secondaryGroupToShow

  //console.log(primaryRadio)

  // Show/Hide secondary filter sets based on primary radios & set 'results' text
  $("#primaryFiltersSet input[name='changed-name']").click(function(){
    $('#primaryFiltersSelected').text($(this).val())
    if($(this).attr('id') == "primaryFilter1"){
      // hide all other filter sets and show secondary filter set 1
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters1").removeClass( "hidden")
      // Get the secondary filters checked in this group, hide all articles and only show the articles by the filters clicked here
      secondaryGroupToShow = "secondaryFilters1"
      toggleArticles(secondaryGroupToShow)
    } else if($(this).attr('id') == "primaryFilter2"){
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters2").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters2"
      toggleArticles(secondaryGroupToShow)
    }  else if($(this).attr('id') == "primaryFilter3"){
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters3").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters3"
      toggleArticles(secondaryGroupToShow)
    }  else if($(this).attr('id') == "primaryFilter4"){
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters4").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters4"
      toggleArticles(secondaryGroupToShow)
    }  else if($(this).attr('id') == "primaryFilter5"){
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters5").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters5"
      toggleArticles(secondaryGroupToShow)
    }  else if($(this).attr('id') == "primaryFilter6"){
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters6").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters6"
      toggleArticles(secondaryGroupToShow)
    }  else if($(this).attr('id') == "primaryFilter7"){
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters7").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters7"
      toggleArticles(secondaryGroupToShow)
    }  else if($(this).attr('id') == "primaryFilter8"){
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters8").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters8"
      toggleArticles(secondaryGroupToShow)
    }
  });

  // Show/Hide secondary filter sets based on primary radios
$(function(){

  if ($('#primaryFilter1').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters1").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters1"
      toggleArticles(secondaryGroupToShow)
    } else if ($('#primaryFilter2').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters2").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters2"
      toggleArticles(secondaryGroupToShow)
    } else if ($('#primaryFilter3').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters3").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters3"
      toggleArticles(secondaryGroupToShow)
    } else if ($('#primaryFilter4').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters4").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters4"
      toggleArticles(secondaryGroupToShow)
    } else if ($('#primaryFilter5').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters5").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters5"
      toggleArticles(secondaryGroupToShow)
    } else if ($('#primaryFilter6').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters6").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters6"
      toggleArticles(secondaryGroupToShow)
    } else if ($('#primaryFilter7').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters7").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters7"
      toggleArticles(secondaryGroupToShow)
    } else if ($('#primaryFilter8').is(":checked")) {
      $( "#allSecondaryFilterAccordions .govuk-accordion__section" ).addClass( "hidden" )
      $("#secondaryFilters8").removeClass( "hidden")
      secondaryGroupToShow = "secondaryFilters8"
      toggleArticles(secondaryGroupToShow)
    }
  });

  // checkboxes

  // Set the label for number of filters selected
  var secondaryFiltersTotal1, secondaryFiltersTotal2, secondaryFiltersTotal3,
      secondaryFiltersTotal4, secondaryFiltersTotal5, secondaryFiltersTotal6,
      secondaryFiltersTotal7, secondaryFiltersTotal8;

  $("#secondaryFiltersSet1 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal1 = $("#secondaryFiltersSet1").find('input[name="filter-results1"]:checked').length;
        $('#secondaryFiltersSelected1').text(secondaryFiltersTotal1 + ' selected')
  });
  $("#secondaryFiltersSet2 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal2 = $("#secondaryFiltersSet2").find('input[name="filter-results2"]:checked').length;
        $('#secondaryFiltersSelected2').text(secondaryFiltersTotal2 + ' selected')
  });
  $("#secondaryFiltersSet3 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal3 = $("#secondaryFiltersSet3").find('input[name="filter-results3"]:checked').length;
        $('#secondaryFiltersSelected3').text(secondaryFiltersTotal3 + ' selected')
  });
  $("#secondaryFiltersSet4 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal4 = $("#secondaryFiltersSet4").find('input[name="filter-results4"]:checked').length;
        $('#secondaryFiltersSelected4').text(secondaryFiltersTotal4 + ' selected')
  });
  $("#secondaryFiltersSet5 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal5 = $("#secondaryFiltersSet5").find('input[name="filter-results5"]:checked').length;
        $('#secondaryFiltersSelected5').text(secondaryFiltersTotal5 + ' selected')
  });
  $("#secondaryFiltersSet6 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal6 = $("#secondaryFiltersSet6").find('input[name="filter-results6"]:checked').length;
        $('#secondaryFiltersSelected6').text(secondaryFiltersTotal6 + ' selected')
  });
  $("#secondaryFiltersSet7 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal7 = $("#secondaryFiltersSet7").find('input[name="filter-results7"]:checked').length;
        $('#secondaryFiltersSelected7').text(secondaryFiltersTotal7 + ' selected')
  });
  $("#secondaryFiltersSet8 .govuk-checkboxes__input").change(function() {
        secondaryFiltersTotal8 = $("#secondaryFiltersSet8").find('input[name="filter-results8"]:checked').length;
        $('#secondaryFiltersSelected8').text(secondaryFiltersTotal8 + ' selected')
  });


  // Filter assets

  // Articles (cards) to be shown for each filter
  var allFilterGroups = [

    ["card1", "card2",	"card39",	"card35", "card40"], // Understand your skills
    ["card1", "card2",	"card3"], // Find careers that suit your skills
    ["card6", "card7",	"card9",	"card35", "card36", "card39", "card40", "card41"], // Develop your skills
    ["card3", "card6",	"card7",	"card11", "card12", "card43"], // Gain qualifications
    ["card36"], // Volunteering
    ["card15", "card34",	"card44",	"card45"], // Work experience
    ["card3", "card6"], // Find an apprenticeship
    ["card3", "card6",	"card7",	"card11", "card12", "card43"], // Find a course
    ["card11", "card12"], // Find a traineeship
    ["card3", "card6", "card7"], // Choose what to study
    ["card7", "card9", "card15", "card19", "card35", "card36"], // Take a gap year
    ["card3", "card6",	"card9",	"card11", "card19", "card35", "card36", "card37", "card44", "card45"], // Options at age 16
    ["card3", "card6",	"card7",	"card12", "card15", "card19", "card35", "card36", "card37", "card44", "card45"], // Options at age 18
    ["card3", "card6",	"card7",	"card15", "card19", "card22", "card31", "card32", "card33", "card34", "card36"], // Options after university
    ["card3", "card20"], // Find information about a specific job
    ["card3"], // Find out how to get into a career
    ["card26", "card27", "card28", "card29", "card30", "card33"], // Understand the recruitment process
    ["card21", "card22", "card23", "card31"], // How to find job vacancies
    ["card25", "card26"], // Filling out application forms
    ["card27", "card28", "card29", "card30"], // Prepare for a job interview
    ["card24", "card25"], // Write or update your CV
    ["card3"], // See careers in a specific sector
    ["card7", "card43"], // Learning online
    ["card3", "card7", "card18"], // Learn about postgraduate studies
    ["card17", "card19",	"card21",	"card22", "card23", "card27", "card31"], // Bouncing back in a tough jobs market
    ["card7", "card17",	"card19",	"card22", "card29", "card30", "card43"], // Understanding the working world during COVID-19
    ["card13", "card14"], // Working with a disability or health condition
    ["card11", "card12", "card13", "card14"] // Options with an Education Health and Care plan
  ]

  var allFilterNames =
  [
    'Understand your skills',
    'Find careers that suit your skills',
    'Develop your skills',
    'Gain qualifications',
    'Volunteering',
    'Work experience',
    'Find an apprenticeship',
    'Find a course',
    'Find a traineeship',
    'Choose what to study',
    'Take a gap year',
    'Options at age 16',
    'Options at age 18',
    'Options after university',
    'Find information about a specific job',
    'Find out how to get into a career',
    'Understand the recruitment process',
    'How to find job vacancies',
    'Filling out application forms',
    'Prepare for a job interview',
    'Write or update your CV',
    'See careers in a specific sector',
    'Learning online',
    'Learn about postgraduate studies',
    'Bouncing back in a tough jobs market',
    'Understanding the working world during COVID-19',
    'Working with a disability or health condition',
    'Options with an Education Health and Care plan'
  ]

  // Get filter onchange
  $(".govuk-checkboxes__input").each(function( index ) {
    //console.log( index + ": " + $( this ).is(":checked"))
    $(this).change(function() {
        toggleArticles(secondaryGroupToShow)
      })
  });

  // var filterClickedValue, filterClickedState
  var filterClickedNumber

  // Update the number of article suggestions
  function updateNumberSuggestions() {
    filterClickedNumber = $("#allArticles .info-card:visible").length
    if (filterClickedNumber == 1) {
      $("#totalArticles").text(filterClickedNumber + " suggestion");
    } else {
      $("#totalArticles").text(filterClickedNumber + " suggestions");
    }
  }

  function updateNumberOfSuggestions() {
    filterClickedNumber = $("#allArticles .info-card:visible").length
    if (filterClickedNumber == 1) {
      $("#totalNumberArticles").text(filterClickedNumber);
    } else {
      $("#totalNumberArticles").text(filterClickedNumber);
    }
  }


  function toggleArticles(n) {

    // Hide all articles
    $('.info-card').hide()

    var filtersAlreadyClickedArray = []
    var filterSetArray = []

    // find out what filters are already clicked in the secondary group showing
    $('#' + n + ' .govuk-checkboxes__input').each(function( index ) {
      filterSetArray.push($(this).val())
      if ($(this).is(":checked")){
        filtersAlreadyClickedArray.push($(this).val())
      }
    })

    // If nothing has been checked, then show total articles from that filter group
    if(!$('#' + n + ' .govuk-checkboxes__input').is(":checked")) {

      // Show total articles from the current filter group
      $(allFilterNames).each(function( i ) {
        $(filterSetArray).each(function( m ) {
          if (allFilterNames[i] === filterSetArray[m]) {
            //console.log("show the articles for " + filterSetArray[m])
            $(allFilterGroups).each(function( j ) {
              $('#'+allFilterGroups[i][j]).show()
            })
          }
        })
      })

    // Otherwise, only show articles from what has already been clicked
    } else {
      $(allFilterNames).each(function( i ) {
        $(filtersAlreadyClickedArray).each(function( index ) {
          if (filtersAlreadyClickedArray[index] == allFilterNames[i]) {
            //console.log("show" + allFilterGroups[i])
              $(allFilterGroups).each(function( o ) {
                $('#'+allFilterGroups[i][o]).show()
              })
          }
        })
      })
    }

    //  Only show articles from what has already been clicked
    // $(allFilterNames).each(function( i ) {
    //   $(filtersAlreadyClickedArray).each(function( index ) {
    //     if (filtersAlreadyClickedArray[index] == allFilterNames[i]) {
    //       //console.log("show" + allFilterGroups[i])
    //         $(allFilterGroups).each(function( o ) {
    //           $('#'+allFilterGroups[i][o]).show()
    //         })
    //     }
    //   })
    // })

    updateNumberSuggestions()

  }



  function toggleArticlesOpt(n) {

    // Hide all articles
    $('.info-card').hide()

    var filtersAlreadyClickedArray = []
    var filterSetArray = []

    // find out what filters are already clicked in the secondary group showing
    $('#' + n + ' .govuk-checkboxes__input').each(function( index ) {
      filterSetArray.push($(this).val())
      if ($(this).is(":checked")){
        filtersAlreadyClickedArray.push($(this).val())
      }
    })

    // If nothing has been checked, then show total articles from that filter group
    if(!$('#' + n + ' .govuk-checkboxes__input').is(":checked")) {

      // Show total articles from the current filter group
      $(allFilterNames).each(function( i ) {
        $(filterSetArray).each(function( m ) {
          if (allFilterNames[i] === filterSetArray[m]) {
            //console.log("show the articles for " + filterSetArray[m])
            $(allFilterGroups).each(function( j ) {
              $('#'+allFilterGroups[i][j]).show()
            })
          }
        })
      })

    // Otherwise, only show articles from what has already been clicked
    } else {
      $(allFilterNames).each(function( i ) {
        $(filtersAlreadyClickedArray).each(function( index ) {
          if (filtersAlreadyClickedArray[index] == allFilterNames[i]) {
            //console.log("show" + allFilterGroups[i])
              $(allFilterGroups).each(function( o ) {
                $('#'+allFilterGroups[i][o]).show()
              })
          }
        })
      })
    }

    //  Only show articles from what has already been clicked
    // $(allFilterNames).each(function( i ) {
    //   $(filtersAlreadyClickedArray).each(function( index ) {
    //     if (filtersAlreadyClickedArray[index] == allFilterNames[i]) {
    //       //console.log("show" + allFilterGroups[i])
    //         $(allFilterGroups).each(function( o ) {
    //           $('#'+allFilterGroups[i][o]).show()
    //         })
    //     }
    //   })
    // })

    updateNumberSuggestions()

  }


  // functions to init

  // Number of suggestions at the beginning
  updateNumberSuggestions()

})


// import 'bootstrap';

  $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
  $("#secondaryFilters1").removeClass( "hidden");

//Triage tool option2

$('#triageSelect').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;

    $('#primaryFiltersSelectedValue').text(valueSelected);
    var idSelected = $(this).children(":selected").attr("id");



    if(idSelected == "advice1"){
      // hide all other filter sets and show secondary filter set 1
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
      $("#secondaryFilters1").removeClass( "hidden");
      // Get the secondary filters checked in this group, hide all articles and only show the articles by the filters clicked here
      //secondaryGroupToShow = "secondaryFilters1"
      //toggleArticles(secondaryGroupToShow)
    }
    else if (idSelected == "advice2"){
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
      $("#secondaryFilters2").removeClass( "hidden");
      //secondaryGroupToShow = "secondaryFilters2"
      //toggleArticles(secondaryGroupToShow)
    }

    else if(idSelected == "advice3"){
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
      $("#secondaryFilters3").removeClass( "hidden");
      //secondaryGroupToShow = "secondaryFilters3"
      //toggleArticles(secondaryGroupToShow)
    }
    else if(idSelected == "advice4"){
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
      $("#secondaryFilters4").removeClass( "hidden");
      //secondaryGroupToShow = "secondaryFilters4"
      //toggleArticles(secondaryGroupToShow)
    }
    else if(idSelected == "advice5"){
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
      $("#secondaryFilters5").removeClass( "hidden");
      //secondaryGroupToShow = "secondaryFilters5"
      //toggleArticles(secondaryGroupToShow)
    }
    else if(idSelected == "advice6"){
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
      $("#secondaryFilters6").removeClass( "hidden");
      //secondaryGroupToShow = "secondaryFilters6"
      //toggleArticles(secondaryGroupToShow)
    }
    else if(idSelected == "advice7"){
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" );
      $("#secondaryFilters7").removeClass( "hidden");
      //secondaryGroupToShow = "secondaryFilters7"
      //toggleArticles(secondaryGroupToShow)
    }
    else if(idSelected == "advice8"){
      $( "#allSecondaryFilterAccordions .secondaryFilters" ).addClass( "hidden" )
      $("#secondaryFilters8").removeClass( "hidden")
      //secondaryGroupToShow = "secondaryFilters8"
      //toggleArticles(secondaryGroupToShow)
    }


});
