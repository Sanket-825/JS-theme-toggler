function applyTheme(theme){
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

function getsystemTheme(){
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setInitialTheme(){
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || getsystemTheme());
}

//Set Initial Theme
setInitialTheme();

//Listen to system theme change oly if no theme is stored 
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ()=>{
    if(!localStorage.getItem("theme")){
        applyTheme(getsystemTheme()); 
    }
})


// Theme toggle Button
document.querySelector("button").addEventListener("click", ()=>{
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
})



































// function setDarkOrLight(){
//     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//     }
//     else{
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// }

// setDarkOrLight();

// let btn = document.querySelector("#toggleTheme");

// btn.addEventListener("click", function(){
//     if(document.body.classList.contains("dark")){
//         document.body.classList.remove("dark");
//         document.body.classList.add("light;");
//     }
//     else{
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//     }
// })

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function(){
//     setDarkOrLight();
// })