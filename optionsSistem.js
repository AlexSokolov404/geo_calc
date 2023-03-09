const input_data = document.querySelectorAll('.form-control')
const save_btn = document.querySelector('.btn-save')

function _Rbr(Toni = 0, t = 0) {
  Toni = input_data[0].value
  t = input_data[1].value
  let Pbr = Math.exp(Toni / t)
  return Pbr
}

function _Ttp(Tp = 0, Tci = 0, Tal = 0, load_almanax = false) {
  Tp = input_data[2].value
  Tci = input_data[3].value
  Tal = input_data[4].value
  let Ttp = parseFloat(Tp) + parseFloat(Tci) + parseFloat(Tal)
  return Ttp
}

function _Rt(Ttp = _Ttp()) {
  let Rt
  let Ttp_treb = input_data[4].value
  if (Ttp < Ttp_treb) {
    Rt = Ttp_treb / Ttp
  }
  else { Rt = 1 }
  return Rt
}

function _Rn(SSNToni = []) {
  let Rn = 1
  let t = input_data[1].value
  for (let j = 0; j < 8; j++) {
    SSNToni.push(1 - Math.exp(-t / parseFloat(input_data[j + 6].value)))
  }
  console.log(SSNToni)

  for (let i = 0; i < 8; i++) {
    if (i < 7) {
      Rn = SSNToni[i] * Rn
    }
    else { return Rn }
  }
  console.log(Rn)
  return 1 - Rn
}

function _Rc(Totk = parseFloat(input_data[14].value), Robn = parseFloat(input_data[15].value), Rd = parseFloat(input_data[16].value)) {

  let Ttp = parseFloat(_Ttp())
  let Rn = parseFloat(_Rn().toPrecision(4))
  let Rc = Math.exp(-Ttp / Totk) + (1 - Math.exp(-Ttp / Totk)) * (1 - (1 - Robn))
  let Kn = Rn + Rc + Rd
  return [parseFloat(Rc), parseFloat(Kn)]
}

save_btn.addEventListener('click', () => {
  // console.log(`_Rbr = ${_Rbr().toFixed(2)}`)
  // console.log(`_Ttp = ${_Ttp().toFixed(2)}`)
  // console.log(`_Rt = ${_Rt().toFixed(2)}`)
  // console.log(`_Rn = ${_Rn().toFixed(4)}`)
  // console.log(`_Rc = ${_Rc()}`)
  const [rc, kn] = _Rc()
  let midleMas = [_Rbr().toFixed(2), _Ttp().toFixed(2), _Rt().toFixed(2), _Rn().toFixed(4), rc, kn]
  let tableRows = document.querySelector('.tableRows')
  let i = 0
  for (let elem of tableRows.children) {
    elem.innerHTML = midleMas[i]
    i++
  }
  i = 0
})
