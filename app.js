const button = document.querySelector("#set-alarm");
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const output = document.querySelector("#output");



function setAlarm(person,delay) {
    return new Promise(function(myResolve, myReject) {
        if(delay<0) {
            throw new Error('Time can not be negative');
        }
        setTimeout(function() {
            myResolve(`wake up! ${person}`);
        },delay)
    });
}

// button.addEventListener('click',() => {
//     setAlarm(name.value,Number(delay.value))
//     .then((response) =>
//         (output.textContent = response)
//     )
//     .catch((error)=> output.textContent = `Couldn't set alarm: ${error}`)

//     });

button.addEventListener('click',async ()=>{
    try {
        const message = await setAlarm(name.value,Number(delay.value));
        output.textContent = message;
    }
    catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
      }
})
