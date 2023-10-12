var saveBtn = $('.saveBtn');
var currentTime = dayjs();
var currentHour = dayjs().format ('HH');
var scheduleContent ="";

$('#currentDay').text(currentTime.format('dddd, MMMM D YYYY, h:mm:ss a'));

// set loop to test if the current time vs schedule time, asign class automatically.
for (var i=9; i<18; i++) {
  var columnID = "#hour-"+ i;
  if (currentHour > i) {
    $ (columnID).addClass ('past');
  } else if (currentHour == i) {
    $ (columnID).addClass ('present');
  } else {
    $ (columnID).addClass ('future');
  }
}

$(function(){
  saveBtn.on ("click",function(){
    // function to show the notification about data saved to the local storage, using show widget, hide after 1.5sec.
    // using jQuery Widget "show".
    $( "#savedNotice" ).show("blind", 500, callback);
    // save the text into local storage
    scheduleContent = $(this).siblings('textarea').val();
    localStorage.setItem($(this).parent().attr('id'), scheduleContent);
  });
  
  //a callback function to hide the notice bar after 1.5seconds.
  function callback() {
    setTimeout(function() {
      $( "#savedNotice:visible" ).removeAttr( "style" ).fadeOut();
    }, 1500 );
  };
  
  $( "#savedNotice" ).hide(); 
})

// a function to get the schedules from the local storage, show it on the page.
function renderPage(){
  for (var i=9; i<18; i++) {
    var ID ="hour-"+ i ;
    var columnID = "#hour-"+ i;
    var timeSchedule = localStorage.getItem(ID);

    if (timeSchedule === null) {
    } else {
      $(columnID).children().eq(1).text(timeSchedule);
    }
    
  }
}

renderPage();
  
  

  

  
