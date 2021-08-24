
var cardtext=document.getElementById("showtext");




function showtime(){
   
      
    // for time we use setinterval method 

     setInterval(()=>{

        let today_date=new Date();     // date variable 
        let today_day=today_date.toLocaleDateString();   // get day of current
        let today_hour=today_date.getHours();    // get hours
        let today_minute=today_date.getMinutes();   // get minutes
        let today_second=today_date.getSeconds();   // get seconds

        let card_time=`${today_hour}:${today_minute}:${today_second} and Day is ${today_day}`;
        cardtext.innerHTML=card_time;

     },1000)

     // set interval take first  function after that takes second gap


}



function clearcard(){
     

    // cardtext.innerHTML="loading .... for show time please click on show time button";
    // instead of this we use another method for clear the text

    location.reload();    // this reload the page and page refresh 



}

// it clears once because upper function works in setinterval so after 1 second this automatically runs