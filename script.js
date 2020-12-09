let video = document.getElementById("video");
let playButton = document.getElementById("play");
let choiceDiv = document.getElementById("choiceDivID");
let question = document.getElementById("question");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
video.addEventListener("ended", playNextVideo, false);
let counter = 0;
let chris = false;
let quim = false;
let vee = false;
let saf = false;
let fin = false;
let headCount = 0;
let stop = false;
playButton.onclick = function () {
  video.play();
  playButton.style.display = "none";
};
function playNextVideo() {
  if (!fin) {
    choiceDiv.style.display = "flex";
  } else {
    if (!stop) {
      if (chris && !vee && !quim && !saf) {
        //chris
        if (headCount === 0) {
          video.setAttribute("src", "./Videos/ChrisNoSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 1) {
          video.setAttribute("src", "./Videos/FinalClips/FinalChris.m4v");
          video.play();
          stop = true;
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
            "./Videos/FinalClips/Final3ChrisVeeSaf.m4v"
          );
          video.play();
          stop = true;
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
        } else if (headCount === 3) {
          video.setAttribute("src", "./Videos/SafSee.m4v");
          video.play();
          headCount++;
        } else if (headCount === 4) {
          video.setAttribute("src", "./Videos/FinalClips/Final4.m4v");
          video.play();
          stop = true;
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
          video.setAttribute("src", "./Videos/FinalClips/Final3QuimVeeSaf.m4v");
          video.play();
          stop = true;
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
        }
      }
    }
  }
}
choice1.onclick = function () {
  if (counter === 0) {
    // video.setAttribute("src", "./Videos/ChrisCoffee1.mp4");
    video.setAttribute("src", "small.mp4");
    question.innerHTML =
      "Quim has work but she's bored. <br> What should she do?";
    choice1.innerHTML = "Play Animal Crossing";
    choice2.innerHTML = "Finish Her Art Project";
    chris = true;
  } else if (counter === 1) {
    // video.setAttribute("src", "./Videos/QuimPlay.mp4");
    video.setAttribute("src", "small.mp4");
    question.innerHTML =
      "Vee has class but the cat's too cute! <br> What should she do?";
    choice1.innerHTML = "Go To Class";
    choice2.innerHTML = "Play With The Cat";
  } else if (counter === 2) {
    // video.setAttribute("src", "./Videos/VeeStudy.mp4");
    video.setAttribute("src", "small.mp4");
    question.innerHTML =
      "Saf has capstone work but she's restless. <br> What should she do?";
    choice1.innerHTML = "Work On Capstone";
    choice2.innerHTML = "Go For A Run";
  } else if (counter === 3) {
    // video.setAttribute("src", "./Videos/SafCapstone.m4v");
    video.setAttribute("src", "small.mp4");
    fin = true;
  }
  choiceDiv.style.display = "none";
  video.play();

  counter++;
};
choice2.onclick = function () {
  if (counter === 0) {
    // video.setAttribute("src", "./Videos/ChrisNoCoffee.mp4");
    video.setAttribute("src", "small.mp4");
    question.innerHTML =
      "Quim has work but she's bored. <br> What should she do?";
    choice1.innerHTML = "Play Animal Crossing";
    choice2.innerHTML = "Finish Her Art Project";
  } else if (counter === 1) {
    // video.setAttribute("src", "./Videos/QuimArt.mp4");
    video.setAttribute("src", "small.mp4");
    question.innerHTML =
      "Vee needs to study but the cat's too cute! <br> What should she do?";
    choice1.innerHTML = "Go To Class";
    choice2.innerHTML = "Play With The Cat";
    quim = true;
  } else if (counter === 2) {
    // video.setAttribute("src", "./Videos/VeeCat.mp4");
    video.setAttribute("src", "small.mp4");
    question.innerHTML =
      "Saf has capstone work but she's restless. <br> What should she do?";
    choice1.innerHTML = "Work On Capstone";
    choice2.innerHTML = "Go For A Run";
    vee = true;
  } else if (counter === 3) {
    // video.setAttribute("src", "./Videos/SafRun.m4v");
    video.setAttribute("src", "small.mp4");
    saf = true;
    fin = true;
  }
  choiceDiv.style.display = "none";
  video.play();

  counter++;
};
function test() {
  if (chris && !vee && !quim && !saf) {
    //play chris walk alone vid
  } else if (chris && vee && !quim && !saf) {
    //play chris and vee walking seeing someone
    //vid of chris + vee tgt
  } else if (chris && !vee && quim && !saf) {
    //play chris and vee and quim walking seeing someone
    //vid of chris + vee + quim tgt
  } else if (chris && !vee && !quim && saf) {
    //play chris and vee and quim and saf walking seeing someone
    //vid of chris + vee + quim + saf tgt
  } else if (chris && vee && quim && !saf) {
    //play chris and vee and saf walking seeing someone
    //vid of chris vee saf  tgt
  } else if (chris && vee && !quim && saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (chris && vee && quim && saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (chris && !vee && quim && saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (!chris && vee && !quim && !saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (!chris && vee && quim && !saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (!chris && vee && !quim && saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (!chris && vee && quim && saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (!chris && !vee && quim && !saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (!chris && !vee && quim && saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  } else if (!chris && !vee && !quim && saf) {
    //play chris and quim walking seeing someone
    //vid of chris  quim tgt
  }
}
