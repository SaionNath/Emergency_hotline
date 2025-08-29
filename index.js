
// heart count
const currentCount = document.getElementById("heartCount")

document.querySelectorAll(".heartBtn").forEach(btn => {
    btn.addEventListener("click", function(e){
        // e.preventDefault()
    // console.log("heart clicked");

        currentCount.innerText = parseInt(currentCount.innerText) + 1

    })
})


// coin count
const coin_count = document.querySelector("#coinCount")

document.querySelectorAll(".callBtn").forEach(btn => {
    btn.addEventListener("click", function(e){
        
        let coins = parseInt(coin_count.innerText)

        if(coins > 20){
            coins -= 20
            coin_count.innerText = coins

            const card_info = btn.closest(".contact_card")

            const sub_title = card_info.querySelector("p").innerText
            const number = card_info.querySelectorAll("h2")[1].innerText

            alert(`📞${sub_title} ${number}`)
        }

        else{
            alert("Insufficient Balance")
        }
    })
})
