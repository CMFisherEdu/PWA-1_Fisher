/**
 * Created: Fisher, Chase M.
 * Class: PWA
 * Goal: Goal7
 */


(function(){

   //Create the "Person" - Object - prep for main.js file.
   window.Person=Person;

    //create a list of jobs and actions for the various people/"Person"(s).
    Person.jobs = ["Admin", "Assistant", "Secretary", "Water-Cooler Loafer", "Underling", "Manager"];
    Person.actions = ["Meeting", "Loafing", "Working", "Screen-Gazing", "Scribbling", "Drinking Coffee"];

    function Person(name, row){
        console.log("Person created is -> ", name); //debugging - make sure we created a Person.

        this.name = name; // setting Person name
        this.row = row; // for dynamic HTML updates
        // call out lengths of the array/object - let random go "up to" that number to pull a random value.
        // finds position within object based on that - and pulls out that action/job.
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        // establishes the point (in the HTML) where we are working.
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;

    }
    /* use Random-timer to changes the "activity" or (Actions) of the individuals (Person) by row.
     this data couples with actual call fro the main.js file to achieve timer.
     with each timer - "updates" by changing per item (row).
    */

    Person.prototype.update = function(){
        if (Math.floor(Math.random() <.01)){
            var i=Math.floor(Math.random()*Person.actions.length);
            this.action= Person.actions[i];
            var id= document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }

})();