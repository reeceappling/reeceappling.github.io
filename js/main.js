var pgpOpen = false

const pgpButton = document.getElementById('pgpButton');

pgpButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("pgpKey").className = pgpOpen?"pgpHidden":"pgpShown"
    pgpOpen = !pgpOpen
});