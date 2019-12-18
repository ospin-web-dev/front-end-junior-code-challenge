/* You may keep or alter this code in any manner you see fit
 * please consider extending/improving the pattern started here
 * for all deliverables (though not required)
 */


/***************************** INSTANT ANIMATIONS *****************************/
function hide(el) {
  el.style.opacity = 0
  el.classList.remove("fade-up-out")
  el.style.pointerEvents = "none"
}

function appear(el) {
  el.style.opacity = 1
  el.style.pointerEvents = "auto"
}
/******************************************************************************/


/***************************** DURATION ANIMATIONS ****************************/
function fadeAllOut(elArray) {
  elArray.forEach(el => {
    el.classList.add("fade-up-out")
  })

  setTimeout(() => {
    elArray.forEach(hide)
  }, FADEDURATION)
}
/******************************************************************************/


function transitionPage(groupOut, groupIn) {
  fadeAllOut(groupOut)

  setTimeout(() => {
    groupIn.forEach(appear)
  }, FADEDURATION)
}
