function downloadImg(){
    axios({
        url:'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png',
        method:'GET',
        responseType: 'blob'
    })

    .then((response) => {

        const url = window.URL

        .createObjectURL(new Blob([response.data]));

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'hiro.png');
        document.body.appendChild(link);
        link.click();
    })
}

/* ------------------------------------------------------------------------------------------------ */

var markerMe = document.querySelector("a-marker") 

markerMe.addEventListener("markerFound", (e)=>{
    var videoMe = document.getElementById('loadVideo').play();
})

markerMe.addEventListener("markerLost", (e)=>{
    var videoMe = document.getElementById('loadVideo').pause();
})

document.getElementById('volume-down').addEventListener("click", (e)=>{
    var videoMe = document.getElementById('loadVideo').muted=false;
})

document.getElementById('volume-mute').addEventListener("click", (e)=>{
    var videoMe = document.getElementById('loadVideo').muted=true;
})

/* ------------------------------------------------------------------------------------------------ */

let btnReload = document.getElementById('btn-Reload');

    btnReload.addEventListener('click', _ => {
    location.reload();
        
})