//header-mobile
if(window.innerWidth > 500){
    const headeMobile = document.getElementById("header-mobile")
    headeMobile.remove()
}
else if(window.innerWidth <= 500){
    const header = document.getElementById("header")
    header.remove()
}

//header-mobile