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
  } else if (currentHour === i) {
    $ (columnID).addClass ('present');
  } else {
    $ (columnID).addClass ('future');
  }
}

$(function(){
  // function to show the notification about data saved to the local storage, using show widget, hide after 1.5sec.
  saveBtn.on ("click",function(){
    $( "#savedNotice" ).show("blind", 500, callback);
  });
  
  function callback() {
    setTimeout(function() {
      $( "#savedNotice:visible" ).removeAttr( "style" ).fadeOut();
    }, 1500 );
  };
  
  $( "#savedNotice" ).hide(); 
})

saveBtn.on ("click",function(){
scheduleContent = $(this).siblings('textarea').val();
localStorage.setItem($(this).parent().attr('id'), scheduleContent);
renderPage();
});

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
  
  

  

  
