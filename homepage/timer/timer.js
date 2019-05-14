
// calculates time between November 11, 2018 and today
function calDate() {
    let date2 = new Date(2018, 10,10);
    let date1 = new Date();
    

    var diff = Math.floor(date1 - date2);
    var secs = Math.floor(diff/1000);
    var mins = Math.floor(secs/60);
    var hours = Math.floor(mins/60);
    var days = Math.floor(hours/24);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    
    months=Math.floor(months%12);
    days = Math.floor(days%31);
    hours = Math.floor(hours%24);
    mins = Math.floor(mins%60);
    secs = Math.floor(secs%60); 
    
    
    var message = ""; 
    if(true){
      if(years>0){
        message += years + " years \n";    
    }
      if(months>0 || years>0){
            message += months + " months \n<br>";
      }
       
      message += days + " days \n<br>"; 
      message += hours + " hours \n<br>";  
      message += mins + " minutes \n<br>"; 
      message += secs + " seconds \n<br>"; 
      
       
    }
    
    return message;
  }

 // establishes functioning interval to update time every second
 function interval(){
  let text= calDate();
  document.getElementById("time-passed").innerHTML = text;
 }

 setInterval(interval, 1000)
  


