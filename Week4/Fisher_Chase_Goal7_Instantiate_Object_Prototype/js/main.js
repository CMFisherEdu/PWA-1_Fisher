/**
 * Created: Fisher, Chase M.
 * Class: PWA
 * Goal: Goal7
 *
 */

(function(){

    var numOfPeople = 3; // give max point for loop -> will stop before overflow.
    var employees = []; // adding to open array
    var names = ["Jock McFootball", "Trekkie daGeek", "Ruff the Gruff", "Alison Smilesin", "Over Achiever"];// will fill


    // For loop - builds three people (Person) - with a random method.
    // Don't want to do this for more than the three rows (no additional tags in which to display anyway, so..
    // "less than the total number of people"
    for (var i = 0; i < numOfPeople; i++){
        var personIndex = Math.floor(Math.random() * names.length);
        var person = new Person(names[personIndex], i+1);
        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        employees.push(person);
        names.splice(personIndex, 1);

    }

    setInterval(runUpdate, 1000/30);

    function populateHTML(data, field){
        var id=document.getElementById(field);
        id.innerHTML = data;
        return false;
    }

    function runUpdate(){
        employees.forEach(function(element){
            /* console.log(element);
             element = the items in the people array
             .update = the prototype method in the person.js file
            */
            element.update();
        })
    }
})();