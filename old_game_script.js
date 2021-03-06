(function() {
  //Constructs a historical event, with name and eventDate properties. Contains methods that
  //set values to parameters if !undefined, else sets to parameters.
  // function HistoricalEvent(name,dateArray) {
  //   this.getEventYear = function () {
  //     var eventYear;
  //     eventYear =  "";
  //     while (eventYear.length != 4 || isNaN(eventYear)) {
  //       eventYear = prompt("What year did " + this.name + " happen?");
  //     }
  //     return eventYear;
  //   };
  //   // Prompts the player to enter a month, checks it is correctly formatted and a possible month.
  //   this.getEventMonth = function () {
  //     var eventMonth;
  //     eventMonth = "";
  //     while (eventMonth.length < 1 || eventMonth.length > 2 || isNaN(eventMonth) || eventMonth > 11) {
  //       eventMonth = (prompt("In what number month did " + this.name + " happen?") - 1);
  //     }
  //     return eventMonth;
  //   };
  //   //Prompts the player to enter a date, checks it is correctly formatted and a possible date.
  //   this.getEventDate = function () {
  //     var eventDate;
  //     eventDate = "";
  //     while (eventDate.length < 1 || eventDate.length > 2 || isNaN(eventDate) || eventDate > 31) {
  //       eventDate = prompt("What day of the month did " + this.name + " happen?");
  //     }
  //     return eventDate;
  //   };
  //   //Compares fullEventDate with currentDate, returns true if fullEventDate is in the past,
  //   //false if it is either the current date or the future.
  //   this.checkDateValid = function () {
  //     if ((Date.parse(this.currentDate) - Date.parse(this.fullEventDate)) < 0) {
  //       return false;
  //     }
  //     else {
  //       return true;
  //     }
  //   };
  //   //Prompts the player to select a date, and checks to ensure that the date is in the past.
  //   //Declares a currentDate Date() object after fullEventDate to ensure checkDateValid runs properly.
  //   this.setFullEventDate = function() {
  //     this.fullEventDate = new Date();
  //     this.currentDate = new Date();
  //     this.currentDate.setFullYear(this.currentDate.getFullYear() + 200);
  //     //Keeps asking for a year until the player selects a year in the past.
  //     do {
  //       this.fullEventDate.setFullYear(this.getEventYear());
  //       if (!this.checkDateValid()) {
  //         alert("You’re teaching a history class, not a futurology class—that’s Prof. Glaxbørk’s department. Choose a year in the past.");
  //       }
  //     } while (!this.checkDateValid());
  //     //Keeps asking for a month until the player selects a month in the past.
  //     do {
  //       this.fullEventDate.setMonth(this.getEventMonth());
  //       if (!this.checkDateValid()) {
  //         alert("You’re teaching a history class, not a futurology class—that’s Prof. Glaxbørk’s department. Choose a month in the past.");
  //       }
  //     } while (!this.checkDateValid());
  //     //Keeps asking for a date until the player selects a date in the past.
  //     do {
  //       this.fullEventDate.setDate(this.getEventDate());
  //       if (!this.checkDateValid()) {
  //         alert("You’re teaching a history class, not a futurology class—that’s Prof. Glaxbørk’s department. Choose a date in the past.");
  //       }
  //     } while (!this.checkDateValid());
  //   };
  //   //Constructs a Date() object from a passed name and array [year,month,date], to be used with
  //   //preloaded historical events. Returns the Date() object.
  //   this.initWithArray = function() {
  //     this.fullEventDate = new Date();
  //     this.fullEventDate.setFullYear(dateArray[0]);
  //     this.fullEventDate.setMonth(dateArray[1]);
  //     this.fullEventDate.setDate(dateArray[2]);
  //     this.currentDate = new Date();
  //     this.name = name;
  //   }
  //   this.initWithoutArray = function () {
  //     this.name = prompt("The blackboard stretches out blank before you. You stand there, chalk in hand. What event will you be teaching your class about today?");
  //     this.setFullEventDate();
  //   };
  // }
  // //Constructs a Player() object, which stores the name, correct and incorrect answers, and class
  // //time remaining.
  // function Player() {
  //   this.init = function () {
  //     this.name = prompt("Outside your classroom, one of your new colleagues stretches out its tentacly arm to shake your pink, squishy one. \"Hi, I'm Professor ßåxtëµ. Welcome to the faculty! What was your name again?\"");
  //     while (this.name.length == 0) {
  //       this.name = prompt("Professor ßåxtëµ looks at you expectantly.");
  //     }
  //     alert("Professor ßåxtëµ's face contorts into what you hope is a smile, and it pats you on the back. \"Nice to meet you, Professor " + this.name + ". I'm sure we'll be fast friends.\"");
  //     this.incorrectAnswers = 0;
  //     this.timeLeftInClass = 45;
  //     this.correctAnswers = 0;
  //   }
  // }
  // //Constructs a Student() object, using an array [planet,demonym,yearLength,bodyPart] to set properties.
  // //Students only have a certain patience level, which is also tracked.
  // function Student(studentArray) {
  //   this.planet = studentArray[0];
  //   this.demonym = studentArray[1];
  //   this.yearLength = studentArray[2];
  //   this.bodyPart = studentArray[3];
  //   this.patience = 12;
  // }
  // //Takes studentYearLength as number and HistoricalEvent() objects as input, returns the
  // //number of planet years since the event rounded to 3 decimal places
  // var getPlanetYears = function (studentYearLength,historicalEvent) {
  //   var daysSince, yearsFloat;
  //   daysSince = Math.floor((Date.parse(historicalEvent.currentDate) - Date.parse(historicalEvent.fullEventDate)) / 86400000);
  //   yearsFloat = daysSince / studentYearLength;
  //   return yearsFloat;
  // }
  //Handles the student question event in the game. It takes HistoricalEvent(), Player(), and Student() objects,
  //incrementing correctAnswers and incorrectAnswers stored in the Player() object.
  var answerTheQuestion = function (historicalEvent,player,student) {
    var planetYears, answer, fuzziness;
    //fuzziness is the range allowed to be accepted as a correct answer, to be adjusted later with an algorithm.
    fuzziness = 1;
    planetYears = getPlanetYears(student.yearLength,historicalEvent);
    console.log(planetYears);
    answer = prompt("With " + player.timeLeftInClass + " minutes left in class, a " + student.demonym + " student raises its " + student.bodyPart + ". \"Professor " + player.name + ", Earth years are still confusing to me. About how many " + student.demonym + " years ago was " + historicalEvent.name + "?\"");
    player.timeLeftInClass -= 1;
    //Loops runs while player's guess is not close enough, and there is still both class time and student patience.
    while ((answer > planetYears + fuzziness || answer < planetYears - fuzziness) && player.timeLeftInClass > 0 && student.patience > 0)  {
      player.timeLeftInClass -= 1;
      player.incorrectAnswers += 1;
      student.patience -= 1;
      annoyance = howAnnoyed(student);
      if (answer.length == 0) {
        answer = prompt("The " + student.demonym + " student looks inquisitively up at you—or at least you think it does. \r\n\r\nThere are only " + player.timeLeftInClass + " minutes left in class, " + annoyance);
      }
      else if (answer > planetYears + fuzziness) {
        answer = prompt("The " + student.demonym + " shakes what might be its head. \"I don't know, Professor " + player.name + ", " + answer + " sounds like too many years. How many was it really?\" \r\n\r\nThere are only " + player.timeLeftInClass + " minutes left in class, " + annoyance);
      }
      else if (answer < planetYears - fuzziness) {
        answer = prompt("The " + student.demonym + " shakes what might be its head. \"I don't know, Professor " + player.name + ", " + answer + " doesn't sound like enough years. How many was it really?\" \r\n\r\nThere are only " + player.timeLeftInClass + " minutes left in class, " + annoyance);
      }
    }
    //Checks if answer was close enough, if time ran out, or if patience ran out.
    if (player.timeLeftInClass == 0) {
      alert("There's the bell! Your students begin to gather up their strange belongings with their odd assortments of limbs.");
    }
    else if (student.patience == 0) {
      alert("The " + student.demonym + " student has had enough. \"Professor " + player.name + ", if you can't answer my questions then I'm just gonna leave.\" It grabs its notebooks with its " + student.bodyPart + ", and moves strangely from the room.")
    }
    else {
      player.correctAnswers += 1;
      alert("The " + student.demonym + " student appears to nod. \"That makes sense, Professor " + player.name + ". Thanks!\"");
    }
  }
  //Gives player the option to either define their own historical event, or use one from input array.
  //Returns an HistoricalEvent() object.
  // var chooseCurriculum = function(historicalEvents) {
  //   var useTextbook, textbookChapters, chosenChapter;
  //   useTextbook = confirm("You walk into your classroom, and see that a textbook is sitting on your desk. 'Earth History: Greatest Hits' reads its cover. Do you want to choose an event from the book? (If not, you can always make your own curriculum).");
  //   if (useTextbook) {
  //     textbookChapters = "";
  //     for (var i = 0; i < historicalEvents.length; i ++) {
  //       textbookChapters += ((i + 1) + ". " + historicalEvents[i][0].toUpperCase() + "\r\n");
  //     }
  //     textbookChapters += "\r\nWhich chapter number looks good to you?"
  //     do {
  //       chosenChapter = prompt(textbookChapters) - 1;
  //     } while (chosenChapter >= historicalEvents.length || !(chosenChapter >= 0));
  //     historicalEvent = new HistoricalEvent(historicalEvents[chosenChapter][0],historicalEvents[chosenChapter][1]);
  //     historicalEvent.initWithArray();
  //     return historicalEvent;
  //   }
  //   else {
  //     historicalEvent = new HistoricalEvent();
  //     historicalEvent.initWithoutArray();
  //     return historicalEvent;
  //   }
  // }
  //Takes students array, and selected HistoricalEvent() object, and returns a raisedHands array
  //of students whose planets have had at least 1 year since the event.
  // var raiseHands = function(students,historicalEvent) {
  //   var raisedHands;
  //   raisedHands = [];
  //   for (i in students) {
  //     if (getPlanetYears(students[i][2],historicalEvent) >= 1) {
  //       raisedHands.push(students[i]);
  //     }
  //   }
  //   return raisedHands;
  // }
  // //Takes a Student() object, and returns a string based on how low their patience level
  // //is
  // var howAnnoyed = function(student) {
  //   if (student.patience > 8) {
  //     return "but the student still seems patient."
  //   } else if (student.patience > 4) {
  //     return "and the student seems to be getting annoyed."
  //   } else if (student.patience > 0) {
  //     return "and the student seems to be very annoyed."
  //   } else {
  //     return "and the student seems almost ready to walk out."
  //   }
  // }
  //Takes a raisedHands array as argument, returns a Student() object of the student the player
  //selects
  // var chooseHand = function(raisedHands) {
  //   var raisedHandsString, studentNumber;
  //   raisedHandsString = "";
  //   for (var i = 0; i < raisedHands.length; i++) {
  //     raisedHandsString += ((i + 1) + ". The " + raisedHands[i][1] + " student. \r\n")
  //   }
  //   do {
  //     studentNumber = prompt("A number of students raise their various alien appendages. Who will you call on?\r\n\r\n" + raisedHandsString) - 1;
  //   } while (!(studentNumber >= 0) || studentNumber >= raisedHands.length)
  //   return new Student(raisedHands[studentNumber]);
  // }

  var playGame = function(students,historicalEvents) {
    var player, historicalEvent, studentsLeft, student, raisedHands;
    //Makes a copy of the students object, so that students may be removed from the list of
    //possible students as they leave, or as they get their question answered.
    studentsLeft = new Object();
    for (i in students) {
        studentsLeft[i] = students[i];
      }
    alert("Ten years ago, NASA secretly established communications with the intelligent alien lifeforms that had been hiding out in our solar system for years. After a decade of sending Earth’s best academic journals—via radio wave—into space, Solar System University’s board of trustees has allowed a satellite campus to be opened on earth. SSU Earth is opening its shiny metal doors today, and you’ve been selected as its first Professor of Terrestrial History.");
    player = new Player();
    player.init();
    historicalEvent = chooseCurriculum(historicalEvents);
    alert("You stand back to admire your work. The blackboard reads \"" + historicalEvent.name.toUpperCase() + ": " + historicalEvent.fullEventDate.toDateString() + ".\" As your students file in, you're ready to begin!");
    while (Object.keys(studentsLeft).length > 0) {
      raisedHands = raiseHands(studentsLeft,historicalEvent);
      student = chooseHand(raisedHands);
      delete studentsLeft[student.planet];
      answerTheQuestion(historicalEvent,player,student);
    }
  }
  // var students = {
  //   "Mercury": ["Mercury","Mercurian",88.025,"pendulus, pebbly tail"],
  //   "Venus": ["Venus","Venusian",224.7,"heavy, scaly trunk"],
  //   "Mars": ["Mars","Martian",686.98,"delicate, dusky orange hand"],
  //   "Jupiter": ["Jupiter","Jovian",4329.63,"gaseous, indistinct arm-shaped-cloud"],
  //   "Saturn": ["Saturn","Saturnian",10751.805,"bulbous, bright purple breathing sack"],
  //   "Uranus": ["Uranus","Uranian",30667.3,"...well, I'm sure you can imagine"],
  //   "Neptune": ["Neptune","Neptunian",60146.89,"sharp, sea green pincer"]
  // };
  // var historicalEvents = [
  //   ["the start of World War II",[1939,8,1]],
  //   ["the fall of Constantinople",[1453,3,29]]
  // ];
  playGame(students,historicalEvents);
})();
