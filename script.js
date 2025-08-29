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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})


document.getElementById("call-btn-2").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Police Helpline Service 999...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Police Helpline Number",
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById("call-btn-3").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Fire Service Number 999...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Fire Service Number",
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById("call-btn-4").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Ambulance Service 1994-999999...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Ambulance Service",
        number: "1994-999999",
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById("call-btn-5").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Women & Child Helpline Service 109...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Women & Child Helpline",
        number: 109,
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById("call-btn-6").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Anti-Corruption Helpline Service 106...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Anti-Corruption Helpline",
        number: 106,
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById("call-btn-7").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Electricity Helpline Service 16216...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Electricity Helpline",
        number: 16216,
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById("call-btn-8").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Brac Helpline Service 16445...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Brac Helpline",
        number: 16445,
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById("call-btn-9").addEventListener('click', function(){
    const callHistoryData = [];
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('Calling Bangladesh Railway Helpline Service 163...')
        const count = coinValue - callBtnValue;
        console.log(count)
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("You don't have enough coins.....")
    }

    const historyData = {
        name: "Bangladesh Railway Helpline",
        number: 163,
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
document.getElementById('clearBtn').addEventListener('click', function(){
    const callHistory = document.getElementById('call-history-container')
    callHistory.innerText = ""
})
document.getElementById('copy-btn-1').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-1').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-01')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})

document.getElementById('copy-btn-2').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-2').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-02')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})
document.getElementById('copy-btn-3').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-3').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-03')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})
document.getElementById('copy-btn-4').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-4').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-04')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})
document.getElementById('copy-btn-5').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-5').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-05')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})
document.getElementById('copy-btn-6').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-6').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-06')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})
document.getElementById('copy-btn-7').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-7').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-07')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})
document.getElementById('copy-btn-8').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-8').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-08')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)

    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})
document.getElementById('copy-btn-9').addEventListener('click', function(){
    const copyText = document.getElementById('copyText-9').innerText
    navigator.clipboard.writeText(copyText)
    const copyBtn = document.getElementById('copy-btn-09')
    const defaultText = copyBtn.innerText
    copyBtn.innerText = "Copied"
    setTimeout(function(){
        copyBtn.innerText = defaultText
    }, 1000)
    const btnValue = 1;
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    console.log(copyCount)
    const copyCountValue = btnValue + copyCount;
    document.getElementById('copy-count').innerText = copyCountValue;
})