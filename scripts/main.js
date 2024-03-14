let btn = document.getElementById("toTopBTN");

window.onscroll = function() {checkScrollDepth()};

function checkScrollDepth() {
    if (document.body.scrollTop > 345 || document.documentElement.scrollTop > 345){
        btn.style.display = "block";

    }
    else{
        btn.style.display = "none";
    }
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}