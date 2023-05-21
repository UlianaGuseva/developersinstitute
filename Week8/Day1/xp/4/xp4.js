let frm = document.forms[0]
frm.addEventListener('submit', get_volume)

function get_volume(e){
    e.preventDefault()
    let radius = document.getElementById('radius').value
    let volume = document.getElementById('volume')
    if(isNaN(radius) == false && radius != ''){
        let vol = 4/3*3.14*(radius*radius*radius)
        volume.value = vol
        console.log(vol)
    }
   
}