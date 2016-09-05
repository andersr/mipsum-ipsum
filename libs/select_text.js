// Src: http://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
'use strict'

export default function selectText (element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange()
        range.moveToElementText(text)
        range.select()
    } else if (window.getSelection) {
        selection = window.getSelection()
        range = document.createRange()
        range.selectNodeContents(text)
        selection.removeAllRanges()
        selection.addRange(range)
    }
}

// document.onclick = function(e) {
//     if (e.target.className === 'click') {
//         SelectText('selectme')
//     }
// }
