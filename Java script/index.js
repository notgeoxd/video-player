/*creamos variables y les damos elementos para saber a que nos referimos */
const $video = document.querySelector("#video")
const $play = document.querySelector("#Play")
const $pause = document.querySelector("#Pause")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")

/*creamos eventos pero antes tambien la funcion*/
$play.addEventListener("click", handlePlay)
$pause.addEventListener("click", handlePause)

/*creamos funcines (hay dos maneras de crear una exprecion en JS,
por exprecion o declarandola con "funcion"  )*/
function handlePlay() {
    $video.play()/*para dar play al video */
    $play.hidden = true /*agregaos una propiedad llamada hidden= .porque cuando se asigna es una propiedad i quando es "()" es un metodo*/
    $pause.hidden = false
    console.log("le diste clik al boton de play") /*para saber si funciona */
}

function handlePause() {
    $video.pause()/*para pausar al video */
    $play.hidden = false
    $pause.hidden = true
    console.log("le diste clik al boton de Pausa") /*para saber si funciona */
}

$backward.addEventListener("click", handleBackward)

function handleBackward() {
    /*$video.currentTime = $video.currentTime -10 tambien se podia asin*/
    $video.currentTime -= 10
    console.log("para atras 10 segundos",$video.currentTime )
}

$forward.addEventListener("click", handleforward)

function handleforward() {
    $video.currentTime += 10
    console.log("para adelante 10 segundos",$video.currentTime )
}

const $progress = document.querySelector("#progress")

$video.addEventListener("loadedmetadata", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log("ha cargado mi video",$video.duration) /*ahora con esto sabremos cuanto dura nuestro video */
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime /** la barrita se mueve */
    // console.log("tiempo actual", $video.currentTime) /**para que se actualize en la consola el tiempo del video */
}

$progress.addEventListener("input", handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value) /**este valor hace que dice en que segundo estas */
}