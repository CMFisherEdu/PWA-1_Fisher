/*
 * Fisher, Chase - 22 May 2014
 * Duel Fight Game - FINISHED
 * Date: 4/22/13

 Assignment 3
 Part 3/3 of series
*/

// self-executing function
(function(){
    // tells console to print FIGHT!!!.
    console.log("FIGHT!!!");

    //player name, damage, health | object literal: Key [know-type]: value.
    var fighter1 = {Name:"Kabal", Damage:20, Health:100};
    var fighter2 = {Name:"Kratos", Damage:20, Health:100};
    var round=0;     //initiate round
    document.getElementById("roundnumber").innerHTML = "Round: " + round; // display round number at top.
    console.log(round); //console the round number to be sure.

    document.getElementById("buttonblue").onclick = function (e){ //make an onclick event
        console.log(e); //debugging purposes to see mouse data
        fight(); // after "click" - let's run the fight function
        e.preventDefault(); // no links here!
        return false;
    };

    function stopListening(){
        // Prevent User from continuing game if it is declared done.
        document.getElementById("buttonblue").onclick = null;
        //remove event listener-  by "nulling" the onclick itself
    }
    function fight(){
        //establish damage amount for variable min/max - math.floor
        var minDamage1 = fighter1.Damage * .5;
        var minDamage2 = fighter2.Damage * .5;
        /*
        set damage range, random between 10 and 20.
        "+minDamage" = bringing range from 0+ to 20.
        fighter-min = 10.
        Use individual minDamages in case of future program modifications that vary the fighters.
        */
        var f1 = Math.floor(Math.random() * (fighter1.Damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (fighter2.Damage - minDamage2) + minDamage2);
        console.log(f1); //debugging purposes - self compare "damage dealt" to total remaining health further down.
        console.log(f2); //debugging purposes - self compare "damage dealt" to total remaining health further down.

        fighter1.Health-=f2;
        fighter2.Health-=f1;
        // deal damage to one another.  Calculate remaining health.

        // check victory/loss/draw
        var result = winnerCheck();
        console.log(result); //debugging purposes
        function winnerCheck(){
            /*
            Each element of this if statement: [in all provide round and fighter health in each case, increment round.]
            1) determine if both lost,
            2) determine if fighter 2 lost
            3) determine if fighter 1 lost
            4) determine if both still alive
            - in all but #4, stop the event listener.
            - in #4 allow user to keep clicking button.
             */
            if (fighter1.Health < 1 && fighter2.Health < 1){
                round++; //increment round
                document.getElementById("roundnumber").innerHTML = "Round: " + round; // display round
                document.getElementById("f1health").innerHTML = fighter1.Health; // display fighter 1 health.
                document.getElementById("f2health").innerHTML = fighter2.Health; // display fighter 2 health.
                result = "Both Fighters Die!"; // provide result for health of BOTH below 1.
                document.getElementById("roundresult").innerHTML = (result); // give the result of the round -> both die.
                stopListening();
            } else if(fighter1.Health > 1 && fighter2.Health < 1){
                round++;
                document.getElementById("roundnumber").innerHTML = "Round: " + round;
                document.getElementById("f1health").innerHTML = fighter1.Health;
                document.getElementById("f2health").innerHTML = fighter2.Health;
                result = fighter1.Name + " has won the fight!"; // provide result for health of fighter 2 below 1.
                document.getElementById("roundresult").innerHTML = (result); // give the result of the round -> fighter 2 dies.
                stopListening();
            } else if(fighter1.Health < 1 && fighter2.Health > 1){
                round++;
                document.getElementById("roundnumber").innerHTML = "Round: " + round;
                document.getElementById("f1health").innerHTML = fighter1.Health;
                document.getElementById("f2health").innerHTML = fighter2.Health;
                result = fighter2.Name + " has won the fight!"; // provide result for health of fighter1 below 1.
                document.getElementById("roundresult").innerHTML = (result);  // give the result of the round -> fighter 1 dies.
                stopListening();
            } else if(fighter1.Health > 1 && fighter2.Health > 1){
                round++;
                document.getElementById("roundnumber").innerHTML = "Round: " + round;
                document.getElementById("f1health").innerHTML = fighter1.Health;
                document.getElementById("f2health").innerHTML = fighter2.Health;
                result = "The fight goes on..."; // provide result for health of BOTH above 1.
                document.getElementById("roundresult").innerHTML = (result);  // give the result of the round -> both live.
                // do not add stop event listener
            }
            return result;
        }
    }
    })();