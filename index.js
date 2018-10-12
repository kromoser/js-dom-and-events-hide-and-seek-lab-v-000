function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const parent = document.querySelector('#grand-node')
  const divs = parent.querySelectorAll('div')
  return divs[divs.length - 1]
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')
  for ( let i = 0; i < lis.length; i++ ) {
    let num = parseInt(lis[i].innerHTML)
    lis[i].innerHTML = num + n
  }
}
