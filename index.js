function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "100px";
    // document.getElementById("table-div").style.marginLeft = "200px";
    document.getElementById("openbtn").style.visibility="hidden";
    document.getElementById("closebtn").style.visibility="visible";
    // document.getElementById("welcome").style.marginLeft = "200px"; 
    
    
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    // document.getElementById("table-div").style.marginLeft = "0";
    document.getElementById("openbtn").style.visibility="visible";
    document.getElementById("closebtn").style.visibility="hidden";
    // document.getElementById("welcome").style.marginLeft = "0"; 
}
