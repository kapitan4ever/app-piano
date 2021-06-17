const board = document.querySelector('#board')
const SQUARES_NUMBER = 14

const notes = [
    'notes/do.mp3', // - do = 0
    'notes/do-d.mp3',// - do dies   = 1
    'notes/re.mp3', // - re = 2
    'notes/re-d.mp3',//  re dies= 3
    'notes/mi.mp3', // - mi = 4
    'notes/fa.mp3', // - fa 5
    'notes/fa-d.mp3',// - fa dies = 6
    'notes/sol.mp3', // - sol' = 7
    'notes/sol-d.mp3',//  sol dies = 8
    'notes/lya.mp3', // - lya = 9
    'notes/lya-d.mp3',//   lya dies =10
    'notes/si.mp3', // - si = 11
    'notes/do__.mp3',  // - do2okt = 12
    'notes/do-d_okt.mp3'//  do dies up oktave   = 13
]




for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.setAttribute('id', `${i}`)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    square.addEventListener('click', () => playNote2(square, 1).play())

    board.append(square)
}// - сначала генерируем html ->

let square = document.querySelectorAll('.square')// - <- теперь получаем наши елементы для общего доступа


square.forEach(element => {
    let idx = Number(element.getAttribute('id'))
    
    element.innerHTML += `<p></p><p></p>`
    
    // - здесь реализуем отбражение названия клавиш и соответс букв на клаве(только англ расскладка)
    //   для срабатывания клавиш независимо от раскладки можно использовать вместо event.key => 'z'
    //   event.code => 'KeyZ'
    if(idx === 0) {
        element.children[0].textContent = 'z'
        element.children[1].textContent = 'Do'
        
    } else if(idx === 1) {
        element.children[0].textContent = 's'
        element.children[1].textContent = 'Do#'
    } else if(idx === 2) {
        element.children[0].textContent = 'x'
        element.children[1].textContent = 'Re'
    } else if(idx === 3) {
        element.children[0].textContent = 'd'
        element.children[1].textContent = 'Re#'
    } else if(idx === 4) {
        element.children[0].textContent = 'c'
        element.children[1].textContent = 'Mi'
    } else if(idx === 5) {
        element.children[0].textContent = 'v'
        element.children[1].textContent = 'Fa'
    } else if(idx === 6) {
        element.children[0].textContent = 'g'
        element.children[1].textContent = 'Fa#'
    } else if(idx === 7) {
        element.children[0].textContent = 'b'
        element.children[1].textContent = 'Sol'
    } else if(idx === 8) {
        element.children[0].textContent = 'h'
        element.children[1].textContent = 'Sol#'
    } else if(idx === 9) {
        element.children[0].textContent = 'n'
        element.children[1].textContent = 'Lya'
    } else if(idx === 10) {
        element.children[0].textContent = 'j'
        element.children[1].textContent = 'Lya#'
    } else if(idx === 11) {
        element.children[0].textContent = 'm'
        element.children[1].textContent = 'Ci'
    } else if(idx === 12) {
        element.children[0].textContent = ','
        element.children[1].textContent = 'Do'
    } else if(idx === 13) {
        element.children[0].textContent = 'l'
        element.children[1].textContent = 'Do#'
    }
    
    if(idx === 1 ||idx === 3||idx === 6||idx === 8||idx === 10||idx === 13) { // - определяем досткп до клавиш диезов(чёрненькие)
        element.classList.add('dies')
    }

    if(idx === 2 ||idx === 4||idx === 7||idx === 9||idx === 11) { // - нужно только для стилизации
        element.style.marginLeft = '-15px'
    }
});

const regExp = new RegExp(/[А-Яа-я]/)

document.addEventListener('keydown', event => { // - определяем событие нажатие на клавишу и добавляем функции
    if(regExp.test(event.key)){
        alert('РУССКАЯ РАСКЛАДКА! Переключи язык ввода на английский. CapsLock должен быть отключен!')
    } else{
    switch (event.key) {
        case 'z':
            setColor(square[0])
            playNote2(square[0], 0.9).play()
            break;
        case 's':
            setColor(square[1])
            playNote2(square[1], 0.9).play()
            break;
        case 'x':
            setColor(square[2])
            playNote2(square[2], 0.9).play()
            break;
        case 'd':
            setColor(square[3])
            playNote2(square[3], 0.9).play()
            break;
        case 'c':
            setColor(square[4])
            playNote2(square[4], 0.9).play()
            break;
        case 'v':
            setColor(square[5])
            playNote2(square[5], 0.9).play()
            break;
        case 'g':
            setColor(square[6])
            playNote2(square[6], 0.9).play()
            break;
        case 'b':
            setColor(square[7])
            playNote2(square[7], 0.9).play()
            break;
        case 'h':
            setColor(square[8])
            playNote2(square[8], 0.9).play()
            break;
        case 'n':
            setColor(square[9])
            playNote2(square[9], 0.9).play()
            break;
        case 'j':
            setColor(square[10])
            playNote2(square[10], 0.9).play()
            break;
        case 'm':
            setColor(square[11])
            playNote2(square[11], 0.9).play()
            break;
        case ',':
            setColor(square[12])
            playNote2(square[12], 0.9).play()
            break;
        case 'l':
            setColor(square[13])
            playNote2(square[13], 0.9).play()
            break;
        
    
        default:
            
            break;
    }
}
})
document.addEventListener('keyup', event => { // - определяем событие отжатия клавиши и дбавляем функцию убирания подсветки
    switch (event.key) {
        case 'z':
            removeColor(square[0])
            break;
        case 's':
            removeColor(square[1])
            break;
        case 'x':
            removeColor(square[2])
            break;
        case 'd':
            removeColor(square[3])
            break;
        case 'c':
            removeColor(square[4])
            break;
        case 'v':
            removeColor(square[5])
            break;
        case 'g':
            removeColor(square[6])
            break;
        case 'b':
            removeColor(square[7])
            break;
        case 'h':
            removeColor(square[8])
            break;
        case 'n':
            removeColor(square[9])
            break;
        case 'j':
            removeColor(square[10])
            break;
        case 'm':
            removeColor(square[11])
            break;
        case ',':
            removeColor(square[12])
            break;
        case 'l':
            removeColor(square[13])
            break;
        
    
        default:
            console.log('М И М О')
            break;
    }
})


function setColor(element) {
    const color =`rgb(${getRandomColor(0, 255)},${getRandomColor(0, 255)},${getRandomColor(0, 255)})` // - определить
    // рандомный цвет в формате rgb от rgb(0, 0, 0) до rgb(255, 255, 255) - т. е. ввесь спектр цветов и оттенков
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 3px ${color}, 0 0 14px ${color}`
}

function removeColor(element) {

    let noteKey = element.getAttribute('class')

    if(noteKey === 'square dies'){ 
        element.style.backgroundColor = '#000'
        element.style.boxShadow = `0 0 2px #000`
    } else{
        element.style.backgroundColor = '#6e6b6b'
        element.style.boxShadow = `0 0 2px #000`
    } // - этим условием узнаем какая клавиша была отжата и применяем соответствующие стили
    
}

function playNote() {
    let audio = new Audio();
    let audioNote = getRandomNote()
    audio.src = `${audioNote}`
    audio.autoplay = true; 
} // - функция воспроизведения звука ноты (РАНДОМНОГО) - в данном примере не используется

function playNote2(el, vol) {
    let noteIndex = el.getAttribute('id')
    let audio = new Audio();
    audio.src = `${notes[noteIndex]}`
    // audio.autoplay = true -> можно использовать автоплей, тогда НЕ нужно возвращать audio и НЕ вызывать playNote2(?, ?).play()
    audio.volume = vol
    return audio
} // - функция определения звука ноты соответствующего нажатой клавише и воспроизведения его




function getRandomColor(min, max) {
    let colorIndex =   Math.round(Math.random() * (max - min) + min)
    return colorIndex
} // - здесь всё стандартно)

function getRandomNote() {
    let noteIndex =  Math.floor(Math.random() * notes.length)
    console.log(notes[noteIndex])
    return notes[noteIndex]
} // - для рандомного звука, в данном примере не используется