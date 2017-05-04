// so there are a lot of lines in this, so ill try to only cover the necessary stuff. The code first prompts if you want to play here.
var firstvar = prompt("Are you ready to play this incredible text game?");
var capitalize1 = firstvar.toUpperCase();
if (capitalize1 === "YES") {
  confirm("Awesome! Now we just need to confirm your age, then we can get started!");
} else if (capitalize1 === "NO") {
  confirm("Well....uh.....we hadn't considered you would answer that. This is awkward, man. I guess we'll just FORCE you to play it then...that pun will make sense once you actually play the game.");
} else {
  confirm("Whatever you just typed, it wasn't yes or no. We'll just make you play anyway!");
}
//This asks for your age and delivers a message based on input.
var age = prompt("What's your age?");
if (age < 13) {
  confirm("You can't play this game, it is rated M, sorry buddy. Even though it's literally a text game with nothing gratuitous at all. The ESRB these days is crazy.");
} else {
  confirm("Alright, enjoy the text game.");
}
//I condensed the crawl and some plot here.
var visit = prompt("It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. You are Luke Skywalker, a young farmer who just wants to get away from life on Tatooine. Your friends (including your best friend Biggs) have left for the Academy, leaving you with Aunt Beru and Uncle Owen. You acquire some droids at the local Jawa Sandcrawler market. One astromech, one protocol. The astromech, R2D2, projects a hologram of a female princess who you do not recognize. She says, 'Help me Obi-Wan Kenobi, you're my only hope!' over and over. You know of an old hermit named Ben Kenobi. Do you visit this man to see if he has any connection to this hologram?");
var capitalize2 = visit.toUpperCase();
//So if you choose yes or answer something that isn't yes or no, it will move forward anyway. This is how this whole thing works, it will stop if you choose no. This is why the code is so lengthy.
if (capitalize2 === "YES") {
  confirm("You go in search of Ben Kenobi. As you near his residency and look through your macrobinoculars (with R2D2 and C3P0 by your side), a tusken raider jumps up and screams his terrible scream at you! He prepares to kill you, but is stopped when a strange, animalistic sound fills the air. The tusken raiders (including the one looking to eat you for dinner) flee as you see Old Ben come into view. You ask him if he knows Obi-Wan Kenobi. His reply? 'Now that's a name I haven't heard in a long time.' He reveals that he actually is Obi-Wan Kenobi. You follow him back to his house and he tells you about the Jedi, the Force, and your father, who he says died a long time ago. He says you are a Jedi, and gives you the lightsaber your dad said to give to you.");
  var assist = prompt("R2D2 chooses to play the rest of his hologram now. The princess reveals herself as Princess Leia. She says to take the Death Star plans to Alderaan for her her father for analysis. Do you agree to take Obi-Wan as far as Anchorhead to assist his voyage?");
  var capitalize3 = assist.toUpperCase();
  if (capitalize3 === "YES") {
    confirm("You take Obi-Wan on the way to Anchorhead, but he says to stop in the 'wretched hive of scum and villainy' that is the Mos Eisley Cantina. There, Obi-Wan arranges passage to Alderaan with smuggler Han Solo and Wookiee Chewbacca. The Empire is tracking you during all of this, and you barely escape in the Millenium Falcon (that piece of junk!). Obi-Wan refreshes your Jedi skills on the way to Alderaan. While you are training with a lightsaber and a flight helmet that blocks your vision, Obi-Wan feels a disturbance in the force and has to sit down. He feels that millions of souls have cried out. Soon, Han's hyperdrive is ready and you jump to your destination. You find that it isn't there!");
    var deathstar = prompt("You find a huge moon nearby. Wait...that's no moon! It's a space station! Obi-Wan knows that Leia has to be on board. Do you continue to this strange 'Death Star'?");
    var capitalize4 = deathstar.toUpperCase();
    if (capitalize4 === "YES") {
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    } else if (capitalize4 === "NO") {
      confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
      confirm("GAME OVER");
    } else {
      confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    }
  } else if (capitalize3 === "NO") {
    confirm("You reject this notion of adventure and realize you are best when you are at the farm. Obi-Wan is taken aback by your answer. He knows you have great potential, but respects your decision. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
  } else {
    confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
    confirm("You take Obi-Wan on the way to Anchorhead, but he says to stop in the 'wretched hive of scum and villainy' that is the Mos Eisley Cantina. There, Obi-Wan arranges passage to Alderaan with smuggler Han Solo and Wookiee Chewbacca. The Empire is tracking you during all of this, and you barely escape in the Millenium Falcon (that piece of junk!). Obi-Wan refreshes your Jedi skills on the way to Alderaan. While you are training with a lightsaber and a flight helmet that blocks your vision, Obi-Wan feels a disturbance in the force and has to sit down. He feels that millions of souls have cried out. Soon, Han's hyperdrive is ready and you jump to your destination. You find that it isn't there!");
    var deathstar = prompt("You find a huge moon nearby. Wait...that's no moon! It's a space station! Obi-Wan knows that Leia has to be on board. Do you continue to this strange 'Death Star'?");
    var capitalize4 = deathstar.toUpperCase();
    if (capitalize4 === "YES") {
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    } else if (capitalize4 === "NO") {
      confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
      confirm("GAME OVER");
    } else {
      confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    }
  }
} else if (capitalize2 === "NO") {
  confirm("You reject this notion of adventure and realize you are best when you are at the farm. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
  confirm("GAME OVER");
} else {
  confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
  confirm("You go in search of Ben Kenobi. As you near his residency and look through your macrobinoculars (with R2D2 and C3P0 by your side), a tusken raider jumps up and screams his terrible scream at you! He prepares to kill you, but is stopped when a strange, animalistic sound fills the air. The tusken raiders (including the one looking to eat you for dinner) flee as you see Old Ben come into view. You ask him if he knows Obi-Wan Kenobi. His reply? 'Now that's a name I haven't heard in a long time.' He reveals that he actually is Obi-Wan Kenobi. You follow him back to his house and he tells you about the Jedi, the Force, and your father, who he says died a long time ago. He says you are a Jedi, and gives you the lightsaber your dad said to give to you.");
  var assist = prompt("R2D2 chooses to play the rest of his hologram now. The princess reveals herself as Princess Leia. She says to take the Death Star plans to Alderaan for her her father for analysis. Do you agree to take Obi-Wan as far as Anchorhead to assist his voyage?");
  var capitalize3 = assist.toUpperCase();
  if (capitalize3 === "YES") {
    confirm("You take Obi-Wan on the way to Anchorhead, but he says to stop in the 'wretched hive of scum and villainy' that is the Mos Eisley Cantina. There, Obi-Wan arranges passage to Alderaan with smuggler Han Solo and Wookiee Chewbacca. The Empire is tracking you during all of this, and you barely escape in the Millenium Falcon (that piece of junk!). Obi-Wan refreshes your Jedi skills on the way to Alderaan. While you are training with a lightsaber and a flight helmet that blocks your vision, Obi-Wan feels a disturbance in the force and has to sit down. He feels that millions of souls have cried out. Soon, Han's hyperdrive is ready and you jump to your destination. You find that it isn't there!");
    var deathstar = prompt("You find a huge moon nearby. Wait...that's no moon! It's a space station! Obi-Wan knows that Leia has to be on board. Do you continue to this strange 'Death Star'?");
    var capitalize4 = deathstar.toUpperCase();
    if (capitalize4 === "YES") {
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    } else if (capitalize4 === "NO") {
      confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
      confirm("GAME OVER");
    } else {
      confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    }
  } else if (capitalize3 === "NO") {
    confirm("You reject this notion of adventure and realize you are best when you are at the farm. Obi-Wan is taken aback by your answer. He knows you have great potential, but respects your decision. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
  } else {
    confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
    confirm("You take Obi-Wan on the way to Anchorhead, but he says to stop in the 'wretched hive of scum and villainy' that is the Mos Eisley Cantina. There, Obi-Wan arranges passage to Alderaan with smuggler Han Solo and Wookiee Chewbacca. The Empire is tracking you during all of this, and you barely escape in the Millenium Falcon (that piece of junk!). Obi-Wan refreshes your Jedi skills on the way to Alderaan. While you are training with a lightsaber and a flight helmet that blocks your vision, Obi-Wan feels a disturbance in the force and has to sit down. He feels that millions of souls have cried out. Soon, Han's hyperdrive is ready and you jump to your destination. You find that it isn't there!");
    var deathstar = prompt("You find a huge moon nearby. Wait...that's no moon! It's a space station! Obi-Wan knows that Leia has to be on board. Do you continue to this strange 'Death Star'?");
    var capitalize4 = deathstar.toUpperCase();
    if (capitalize4 === "YES") {
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    } else if (capitalize4 === "NO") {
      confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
      confirm("GAME OVER");
    } else {
      confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
      confirm("You land in the bay inside of the Death Star. The Galactic Empire realizes that you are there, and sends some stormtroopers aboard. You and Han take out the troopers, and put on their costumes. You leave the ship and go to the control room overlooking the bay, and overtake it with the help of Chewie and Obi-Wan. R2D2 plugs into the control panel and locates Leia in the prison hold. Meanwhile, Obi-Wan leaves to go take down the tractor beam so you guys can escape when you want to.");
      var saveleia = prompt("Should you and Han pretend to use Chewie as your prisoner to access and overtake the prison hold?");
      var capitalize5 = saveleia.toUpperCase();
      if (capitalize5 === "YES") {
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      } else if (capitalize5 === "NO") {
        confirm("You reject this notion of adventure and realize you are best when you are at the farm. You surrender to the Empire and they agree to let you travel back to Tatooine, for a price. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
        confirm("GAME OVER");
      } else {
        confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
        confirm("You go to the prison hold and take down the stormtroopers there, giving you a brief period of time to rescue the princess. You find her in her cell, and as you escort her out of there, some stormtroopers attack. You think this is the end, until Leia takes your gun and shoots a vent near you. She tells you to jump down there after her, so you follow blindly. You find yourself in a trash compactor that is slowly compacting. You talk to R2D2 and C3P0 over comms and they eventually hack the trash compactor so that it stops. You escape from their and eventually make your way back to the Falcon.");
        var run = prompt("You find Obi-Wan fighting Darth Vader in a room that is seperated by a clear wall. After a brief bout, Darth Vader handily slays your mentor. Han yells that it's time to leave. Do you leave with Han?");
        var capitalize6 = run.toUpperCase();
        if (capitalize6 === "YES") {
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          } else if (capitalize7 === "NO") {
            confirm("You reject this notion of adventure and realize you are best when you are at the farm. You arrange transport through the Rebels back to Tatooine. You continue working on the farm for five more years before the Empire takes over your farm. They force you into slavery, where you live out your days until you die at the age of 102. You have to wonder what would've happened if you took a different path...");
            confirm("GAME OVER");
          } else {
            confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
          }
        } else if (capitalize6 === "NO") {
          confirm("You want to fight. This is a stupid move, as Darth Vader kills you easily. The Empire takes over your farm after your death. You have to wonder what would've happened if you took a different path...");
          confirm("GAME OVER");
        } else {
          confirm("It was a yes or no question, but you didn't answer either of those. That's okay though, I'll imagine you said yes.");
          confirm("You flee with Han and fight off some TIE Fighters during your escape. You are extremely upset at Obi-Wan's death, but resolve to get revenge by destroying the Death Star.");
          var go = prompt("You attend a briefing about the upcoming fight. You have a choice whether to go in an X-Wing or not. Do you go on this potentially deadly mission?");
          var capitalize7 = go.toUpperCase();
          if (capitalize7 === "YES") {
            confirm("You go on the mission and end up the only one in the trench as Darth Vader chases you. Just as he lines up the killing shot on you, Han Solo takes him out. You let out a sigh of relief and turn around as you have to focus on firing your ION torpedoes into the Death Star exhaust port. You start to line up your targeting equipment when you hear Obi-Wan's voice through the force. He tells you to use the force to line up the perfect shot. You do this and make a perfect shot. You fly away as the Death Star explodes. Later, you attend a trophy ceremony where you are awarded for your bravery. You're a hero!");
            confirm("THE END");
          }
        }
      }
    }
  }
}