// PGP button
var pgpOpen = false

document.getElementById('pgpButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("pgpKey").className = pgpOpen?"pgpHidden":"pgpShown"
    pgpOpen = !pgpOpen
});

// Obfuscation of some info
const twoEquals = "=="
const encEMA = "cmVlY2VhcHBsaW5"+/*SplitForReasons*/"nQGdtYWlsLmNvbQ"+/**/twoEquals
document.getElementById("myEmLink").setAttribute("h"+"r"+"ef", /*bad bots, go away*/"mai"+/*good human, you can stay*/"lto"+":".concat(atob(encEMA)))