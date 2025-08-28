
// heart count
const currentCount = document.getElementById("heartCount")

document.querySelectorAll(".heartBtn").forEach(btn => {
    btn.addEventListener("click", function(e){
    e.preventDefault()
    console.log("heart clicked");

    if(btn.classList.contains("liked")){

        currentCount.innerText = parseInt(currentCount.innerText) - 1
        btn.classList.remove("liked")
    }

    else{

        currentCount.innerText = parseInt(currentCount.innerText) + 1
        btn.classList.add("liked")
    }

    })
})

