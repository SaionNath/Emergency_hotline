
// heart count
const currentCount = document.getElementById("heartCount")

document.querySelectorAll(".heartBtn").forEach(btn => {
    btn.addEventListener("click", function(){
        // e.preventDefault()
    // console.log("heart clicked");

        currentCount.innerText = parseInt(currentCount.innerText) + 1

    })
})


// coin count and call history
const coin_count = document.querySelector("#coinCount")
const history_container = document.querySelector("#call_history")
const clear_btn = document.querySelector("#clear_history_btn")

document.querySelectorAll(".callBtn").forEach(btn => {
    btn.addEventListener("click", function(){
        
        let coins = parseInt(coin_count.innerText)

        if(coins > 0){
            coins -= 20
            coin_count.innerText = coins

            const card_info = btn.closest(".contact_card")

            const sub_title = card_info.querySelector("p").innerText
            const number = card_info.querySelectorAll("h2")[1].innerText

            const time = new Date().toLocaleTimeString()

            const history_card = document.createElement("div")
            history_card.innerHTML =`<div class="bg-[#FAFAFA] rounded-xl p-2 flex justify-between items-center my-1">
                                        <div>
                                            <h2 class="inter_font font-semibold">${sub_title}</h2>
                                            <p class="hind_madurai_font text-gray-500 text-sm">${number}</p>
                                        </div>
                                        <div>
                                            <p class="hind_madurai_font text-gray-500 text-sm">${time}</p>
                                        </div>
                                    </div>`

            history_container.append(history_card);
            
            alert(`📞${sub_title} ${number}`)
        }

        else{
            alert("Insufficient Balance")
        }
    })
})

clear_btn.addEventListener("click", () =>{
    history_container.innerHTML = "";
});


// copy count 
const copyCounterBtn = document.querySelector("#copy_Counter_Btn")

document.querySelectorAll(".copyBtn").forEach(btn =>{
    btn.addEventListener("click", function(){

        let current_Copy_Count = parseInt(copyCounterBtn.innerText) || 0
        
        current_Copy_Count++

        copyCounterBtn.innerText = `${current_Copy_Count} Copy`

        const card_details = btn.closest(".contact_card")

        const phone = card_details.querySelectorAll("h2")[1].innerText

        navigator.clipboard.writeText(phone).then(() => {
            alert(`Number copied: ${phone}`)
        })

        .catch(err => {
            console.error("Failed to copy: ", err)
        })
    })
})

