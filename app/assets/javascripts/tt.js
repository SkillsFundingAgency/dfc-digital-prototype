var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1nEcJlYenlxrSpjIqy6DI6Bw7EfjMmc0XeHXR6R-Bhi8/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  alert('Successfully processed!')
  console.log(data);
}

window.addEventListener('DOMContentLoaded', init)


function showInfo(data, tabletop) {

                // TO DISPLAY NUMBERS ON THE DASHBOARD //

                // var failed = document.getElementById("failedSubmissions");
                // failed.innerHTML +=  [ data[0].failed ] ;
                //
                // var failedBox = document.getElementById("failedBox");
                //
                // if ( [ data[0].failed ] > 0 ) {
                //     failedBox.classList.add("show");
                // }
                //
                //
                // var overRunning = document.getElementById("overRunning");
                // overRunning.innerHTML +=  [ data[0].overrunning ] ;
                //
                // var overRunning = document.getElementById("overrunBox");
                //
                // if ( [ data[0].overrunning ] > 0 ) {
                //     overRunning.classList.add("show");
                // }

                function animateValue(id, start, end, duration) {
                    var range = end - start;
                    var current = start;
                    var increment = end > start? 1 : -1;
                    var stepTime = Math.abs(Math.floor(duration / range));
                    var obj = document.getElementById(id);
                    var timer = setInterval(function() {
                        current += increment;
                        obj.innerHTML = current;
                        if (current == end) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                }

                animateValue("firstDonut", 0, [ data[0].processing ], 1700);
                


                var firstDonut = document.getElementById("firstDonut");
                firstDonut.innerHTML =+  [ data[0].processing ] ;


                // firstDonut.setAttribute('data-count', [ data[0].processing ]);

                var first = document.getElementById("first");
                first.setAttribute('stroke-dasharray', firstDonut.innerHTML + ',100');


                  if ( [ data[0].processing ] > 50 ) {
                      first.classList.add("warning");
                  }
                  if ( [ data[0].processing ] > 70 ) {
                      first.classList.add("danger");

                  }



                



}
