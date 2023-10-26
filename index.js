function shout(string) {
    return string.toUpperCase();
}
"Hello!".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
'HELLO'.toLowerCase();

function logShout(string) {
    const spy = 'hello';  
    console.log(spy.toUpperCase());
}
logShout(spy); 

function logWhisper(string) {
        const spyOn = 'hello';   
        console.log(spyOn.toLowerCase());
    }
    logWhisper(spyOn); 

function sayHiToHeadphonedRoommate(string) {
    
    const answer1 = "I can\'t hear you!";
    const answer2 = "YES INDEED!";
    const answer3 = "I would love to!";
      
       if (string === string.toLowerCase()) {
         return answer1;
        }else if (string === string.toUpperCase()) {
         return answer2;
        }else if (string === "Let\'s have dinner together!") {
         return answer3;
       }
     
     sayHiToHeadphonedRoommate(hello); 
     }
