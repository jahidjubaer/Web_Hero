// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

var myNumber = 90;
var myFriendNumber = 60;
if(myNumber > 80){
    if(myFriendNumber > 80){
        console.log('go for lunch');
    }
    else if(myFriendNumber < 80 && myFriendNumber >= 60){
        console.log('good luck next time');
    }
    else if(myFriendNumber < 60 && myFriendNumber >= 40){
        console.log('keep my friend massage unseen');
    }
    else{
        console.log('block my friend');
    }
}
else{
    console.log('go to home and sleep and act sad')
}