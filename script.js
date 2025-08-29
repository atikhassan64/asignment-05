const heartBtns = document.getElementsByClassName("heart-btn")
for(let heartBtn of heartBtns){
    heartBtn.addEventListener('click', function(e){
        e.preventDefault()
        const heartNum = 1;
        const heartValue = parseInt(document.getElementById('heart-count').innerText)
    
        const count = heartValue + heartNum;
        document.getElementById('heart-count').innerText = count;
    })
}
document.getElementById("call-btn-1").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling National Emergency Service 999...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "National Emergency Number",
        number: 999,
        date: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(historyData)
    console.log(callHistoryData)
    const callHistory = document.getElementById('call-history-container')
    
    for(const data of callHistoryData){
        if(coinValue > 0){
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="flex items-center justify-between bg-[#FAFAFA] p-[10px] rounded-lg mt-[15px]">
                <div class="w-[170px]">
                    <h1 class="text-[16px] font-semibold">${data.name}</h1>
                    <p class="text-[16px] text-[#5C5C5C]">${data.number}</p>
                </div>
                <p>${data.date}</p>
            </div>        
        `
        callHistory.appendChild(div)
        return Element;
        }
    }
})
