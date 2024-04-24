const clock = document.getElementById('clock')


//to update the time after 1s
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);