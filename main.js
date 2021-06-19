function setdate() {
    document.getElementById("date").innerHTML = new Date().toDateString();
}
function getConfirmation() {
    var retVal = confirm("Click on the School Logo Ma'am");
    if( retVal == true ) {
       return true;
    } else {
       return false;
    }
 }
