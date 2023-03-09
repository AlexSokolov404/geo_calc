const input_pos_dist_rlo = document.querySelectorAll('.pos-dist-rlo')
const input_pos_dist_rpn = document.querySelectorAll('.pos-dist-rpn')
const btn_calc_rlo = document.querySelector('.btn-calc-rlo')
const btn_calc_rpn = document.querySelector('.btn-calc-rpn')
const input_dir_corner_rlo = document.querySelector('.input-dir-corner-rlo')
const input_dir_corner_rpn = document.querySelector('.input-dir-corner-rpn')
const input_height_rlo = document.querySelector('.input-height-rlo')
const input_height_rpn = document.querySelector('.input-height-rpn')
const input_distance_rlo = document.querySelector('.input-distance-rlo')
const input_distance_rpn = document.querySelector('.input-distance-rpn')
let key_rlo = false
let key_rpn = false

let i_rlo = 0
let i_rpn = 0 
let square_rlo = 0
let square_rpn = 0
let Ktp_rlo = 0
let Ktp_rpn = 0
const I_TREB_RLO = 4.49604
const I_TREB_RPN = 4.11436
const Sko_rlo = {
    Skor1: 8,
    Skor2: 7
}
const Sko_rpn = {
    Skor1: 9,
    Skor2: 10
}

let midle_value = 2

let input_mas_rlo = []
let input_mas_rpn = []

console.clear()

function calc_pos_dist_rlo(){
    input_pos_dist_rlo.forEach((elem, i) => {
        input_mas_rlo.push(Number(elem.children[1].children.item(0).value))
        input_mas_rlo.push(Number(elem.children[2].children.item(0).value))
    })    
    return input_mas_rlo
}

function calc_pos_dist_rpn(){
    input_pos_dist_rpn.forEach((elem, i) => {
        input_mas_rpn.push(Number(elem.children[1].children.item(0).value))
        input_mas_rpn.push(Number(elem.children[2].children.item(0).value))
    })    
    return input_mas_rpn
}

function calc_area( lat1, lat2, lng1, lng2) {
    const R = 6371000; // радиус Земли в метрах
    var k = Math.PI / 180;
    return k * R * R 
      * Math.abs( Math.sin(lat1 * k) - Math.sin(lat2 * k))
      * Math.abs( lng1 - lng2);
  }

function calc_i_rlo() {
    let lat1 = input_mas_rlo[0]
    let lat2 = input_mas_rlo[5]
    let lng1 = input_mas_rlo[1]
    let lng2 = input_mas_rlo[6]
    const SQUARE = (calc_area(lat1, lat2, lng1, lng2)/1000000).toPrecision(9)
    square_rlo = SQUARE
    const [, KN] = _Rc()
    const RT = _Rt().toFixed(2)
    const DIR_CORNER = input_dir_corner_rlo.value
    const HEIGHT = input_height_rlo.value
    const DISTANCE = input_distance_rlo.value
    const TONI = input_data[0].value
    const TIME = input_data[1].value
    // console.log(SQUARE, KN, RT, DIR_CORNER, HEIGHT, DISTANCE, TONI, TIME)
    i_rlo = (RT*KN*Math.log2((SQUARE*HEIGHT*DIR_CORNER*DISTANCE)/((922*Math.pow(Sko_rlo.Skor2, 3)*2*Math.pow(Sko_rlo.Skor1, 2))+(2*Math.pow(Sko_rlo.Skor2, 2))))*Math.exp(-TIME/TONI)).toPrecision(5)
    _Ktp_rlo(i_rlo)
}

function calc_i_rpn() {
    let lat1 = input_mas_rpn[0]
    let lat2 = input_mas_rpn[5]
    let lng1 = input_mas_rpn[1]
    let lng2 = input_mas_rpn[6]
    const SQUARE = (calc_area(lat1, lat2, lng1, lng2)/1000000).toPrecision(9)
    square_rpn = SQUARE
    const [, KN] = _Rc()
    const RT = _Rt().toFixed(2)
    const DIR_CORNER = input_dir_corner_rpn.value
    const HEIGHT = input_height_rpn.value
    const DISTANCE = input_distance_rpn.value
    const TONI = input_data[0].value
    const TIME = input_data[1].value
    // console.log(SQUARE, KN, RT, DIR_CORNER, HEIGHT, DISTANCE, TONI, TIME)
    i_rpn = (RT*KN*Math.log2((SQUARE*HEIGHT*DIR_CORNER*DISTANCE)/((922*Math.pow(Sko_rlo.Skor2, 3)*2*Math.pow(Sko_rlo.Skor1, 2))+(2*Math.pow(Sko_rlo.Skor2, 2))))*Math.exp(-TIME/TONI)).toPrecision(5)
    _Ktp_rpn(i_rpn)
}

function _Ktp_rlo(_i_rlo) {
    if(_i_rlo > I_TREB_RLO){
        Ktp_rlo = 1
        return 1
    }
    else if(_i_rlo < 0){
        Ktp_rlo = 0
        return 0
    }
    else{
        Ktp_rlo = _i_rlo/I_TREB_RLO 
        return(_i_rlo/I_TREB_RLO)
    }
}

function _Ktp_rpn(_i_rpn) {
    if(_i_rpn > I_TREB_RPN){
        Ktp_rpn = 1
        return 1
    }
    else if(_i_rpn < 0){
        Ktp_rpn = 0
        return 0
    }
    else{
        Ktp_rpn = _i_rpn/I_TREB_RPN
        return(_i_rpn/I_TREB_RPN)
    }
}

// console.log(calc_pos_dist_rlo())

btn_calc_rlo.addEventListener('click', () => {
    AC = calc_pos_dist_rlo()
    calc_i_rlo()
    areaRlo([[AC[0], AC[1]], [AC[2], AC[3]], [AC[4], AC[5]], [AC[6], AC[7]], [AC[0], AC[1]]])
    key_rlo = true
    
    // [[56.121, 36.683], [56.256, 37.936], [55.298, 39.221], [55.173, 36.189], [56.121, 36.683]]
    // [53.048, 42.242], [53.351, 44.846], [52.416, 43.802], [52.396, 43.292], [53.048, 42.242]
})

btn_calc_rpn.addEventListener('click', () => {
    AC = calc_pos_dist_rpn()
    calc_i_rpn()
    areaRpn([[AC[0], AC[1]], [AC[2], AC[3]], [AC[4], AC[5]], [AC[6], AC[7]], [AC[0], AC[1]]])
    key_rpn = true
})
