//

console.log("WELCOME TO OS NICK")


let linux = document.getElementById("linux"); //DEBIAN
function debian(){
    linux.setAttribute("src", "Images/debian.jpg");
    console.log("Downloading DEBIAN OS....");
};

function ubuntu(){
    linux.setAttribute("src", "Images/ubuntu.jpg")//UBUNTU
    console.log("Downloading UBUNTU OS...");
};

function kali_linux(){
    let iso = document.getElementById("iso");
    iso.setAttribute("src", "Images/LINUX.jpg")
    console.log("Downloading Kali Linux....")
};

function windows(){ //WINDOWS 11
    let windows = document.getElementById("Win11");
    windows.setAttribute("src", "Images/win11.jpg");
    console.log("Downloading Windwos 11....")
};

function about(){
    let about_site  = document.getElementById("about");
    alert("Welcome to OS Nick. This site was developed to help users to easily download operating system with just one click. '</br>' You can contact me on this Gmail : christianblvck@gmail.com");
    console.log("Welcome to OS Nick. This site was developed to help users to easily download operating system with just one click.");
}

//NAVIGATE TO MOBILE SITE

    let myTimeOut = setTimeout(function pop_up(){
        if (confirm("Navigate to mobile site?")) {
           window.location.href = 'www.youtube.com/';
           console.log("Mobile_site...")
        } else {
            console.log("Navigation Error :(")
        }
    },100)
