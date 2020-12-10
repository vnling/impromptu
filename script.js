let video = document.getElementById("video");
// used to track when video is playing/paused
let playButton = document.getElementById("play");
//play button to start the video
let choiceDiv = document.getElementById("choiceDivID");
// the entire div with question --> used to show when video ends
let question = document.getElementById("question");

let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
video.onclick = () => {
  if (!video.paused) {
    video.pause();
    playButton.style.display = "block";
  }
};

video.addEventListener("ended", playNextVideo, false);
let counter = 0; //counter to check which person we're
let chris = false; // if chris will show up
let quim = false; // if quim will show up
let vee = false; // if vee will show up
let saf = false; // if saf will show up
let fin = false; //boolean to check if the first half (decisions) has finished
let headCount = 0; //headCount to check whcih videos to play if a person shows up
let stop = false; //to stop looping and play the last video

playButton.onclick = function () {
  //if click play button, the video will play and button disappears
  video.play();
  playButton.style.display = "none";
};
function playNextVideo() {
  //if first half videos aren't finished, show the choice div where it asks for a choice
  if (!fin) {
    choiceDiv.style.display = "flex";
  } else {
    //if first half complete, need to automatically play the videos sequentially
    //if chris shows up, then he walks into the palms and sits
    if (!stop) {
      if (chris && !vee && !quim && !saf) {
        //chris
        if (headCount === 0) {
          //chris walking
          video.setAttribute("src", "./Videos/ChrisNoSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          //chris in palms
          video.setAttribute("src", "./Videos/FinalClips/FinalChris.m4v");
          video.play();
          stop = true; //to indicate that it's the last video
          setTimeout(retry, 15000); //set a timeout for the div to show up and call the retry()
          //to show a div asking if the user wants to retry
        }
      } else if (chris && vee && !quim && !saf) {
        //chris vee
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/ChrisSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/VeeSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/FinalClips/Final2ChrisVee.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (chris && !vee && quim && !saf) {
        if (headCount === 0) {
          //chris quim
          video.setAttribute("src", "./Videos/ChrisSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/QuimSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/FinalClips/Final2ChrisQuim.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (chris && !vee && !quim && saf) {
        //chris saf
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/ChrisSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/FinalClips/Final2ChrisSaf.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (chris && vee && quim && !saf) {
        //chris vee quim
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/ChrisSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/QuimSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/VeeSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 3) {
          video.setAttribute(
            "src",
            "./Videos/FinalClips/Final3ChrisQuimVee.m4v"
          );
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (chris && vee && !quim && saf) {
        //chris vee saf
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/ChrisSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/VeeSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 3) {
          video.setAttribute(
            "src",
            "./Videos/FinalClips/Final3ChrisSafVee.m4v"
          );
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (chris && vee && quim && saf) {
        // chris vee saf quim
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/ChrisSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/QuimSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/VeeSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 3) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 4) {
          video.setAttribute("src", "./Videos/FinalClips/Final4.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (chris && !vee && quim && saf) {
        //chris quim saf
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/ChrisSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/QuimSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 3) {
          video.setAttribute(
            "src",
            "./Videos/FinalClips/Final3ChrisQuimSaf.m4v"
          );
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (!chris && vee && !quim && !saf) {
        //vee
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/VeeNoSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/FinalClips/FinalVee.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (!chris && vee && quim && !saf) {
        //vee quim
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/QuimSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/VeeSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/FinalClips/Final2QuimVee.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (!chris && vee && !quim && saf) {
        //vee saf
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/VeeSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/FinalClips/Final2VeeSaf.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (!chris && vee && quim && saf) {
        // vee quim saf
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/QuimSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/VeeSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 3) {
          video.setAttribute("src", "./Videos/FinalClips/Final3SafQuimVee.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (!chris && !vee && quim && !saf) {
        //quim
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/QuimNoSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/FinalClips/FinalQuim.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (!chris && !vee && quim && saf) {
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/QuimSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 2) {
          video.setAttribute("src", "./Videos/FinalClips/Final2QuimSaf.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      } else if (!chris && !vee && !quim && saf) {
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/SafNoSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/FinalClips/FinalSaf.m4v");
          video.play();
          stop = true;
          setTimeout(retry, 15000);
        }
      }
    }
  }
}
choice1.onclick = function () {
  //records the decision of the user to play different endings
  if (counter === 0) {
    video.setAttribute("src", "./Videos/ChrisCoffee1.mp4"); //setting the source
    question.innerHTML =
      "Quim has work but she's bored. <br> What should she do?"; //change for next decision
    choice1.innerHTML = "Play Animal Crossing";
    choice2.innerHTML = "Finish Her Art Project";
    chris = true; //logging that chris is going out to palms
  } else if (counter === 1) {
    video.setAttribute("src", "./Videos/QuimPlay.mp4");
    question.innerHTML =
      "Vee has class but the cat's too cute! <br> What should she do?";
    choice1.innerHTML = "Go To Class";
    choice2.innerHTML = "Play With The Cat";
  } else if (counter === 2) {
    video.setAttribute("src", "./Videos/VeeStudy.mp4");
    question.innerHTML =
      "Saf has capstone work but she's restless. <br> What should she do?";
    choice1.innerHTML = "Work On Capstone";
    choice2.innerHTML = "Go For A Run";
  } else if (counter === 3) {
    video.setAttribute("src", "./Videos/SafCapstone.m4v");
    fin = true; //indicate that decisions are finished
  }
  if (stop) {
    //used in retry() to refresh the page when the final video is over
    location.reload();
  }
  choiceDiv.style.display = "none"; //hide choic div
  video.play();

  counter++;
};
choice2.onclick = function () {
  if (counter === 0) {
    video.setAttribute("src", "./Videos/ChrisNoCoffee.mp4");
    question.innerHTML =
      "Quim has work but she's bored. <br> What should she do?";
    choice1.innerHTML = "Play Animal Crossing";
    choice2.innerHTML = "Finish Her Art Project";
  } else if (counter === 1) {
    video.setAttribute("src", "./Videos/QuimArt.mp4");
    question.innerHTML =
      "Vee needs to study but the cat's too cute! <br> What should she do?";
    choice1.innerHTML = "Go To Class";
    choice2.innerHTML = "Play With The Cat";
    quim = true;
  } else if (counter === 2) {
    video.setAttribute("src", "./Videos/VeeCat.mp4");
    question.innerHTML =
      "Saf has capstone work but she's restless. <br> What should she do?";
    choice1.innerHTML = "Work On Capstone";
    choice2.innerHTML = "Go For A Run";
    vee = true;
  } else if (counter === 3) {
    video.setAttribute("src", "./Videos/SafRun.m4v");
    saf = true;
    fin = true;
  }
  choiceDiv.style.display = "none";
  video.play();

  counter++;
};
//retry function where it reuses the change but modifies the content
function retry() {
  question.innerHTML = "Try and get more people to meet up!";
  choice1.innerHTML = "RETRY";
  choice1.style.textAlign = "center";
  choice1.style.fontSize = "4em";
  choice1.style.fontWeight = "bold";
  choice1.style.paddingTop = "20px";
  choice2.style.display = "none";
  choiceDiv.style.display = "flex";
}
