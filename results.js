let func_dop_mas = ['Тракт формирования радионавигационных сигналов стандартной точности одного диапазона 1600 МГц',
  'Тракт формирования радионавигационных сигналов стандартной точности двух диапазонов 1600 и 1250 МГц',
  'Тракт формирования радионавигационных сигналов вы-сокой точности одного диапазона 1600 МГц',
  'Тракт формирования радионавигационных сигналов вы-сокой точности двух диапазонов 1600 и 1250 МГц',
  'Шасси ПС с усилителем мощности 10 Вт', 'Шасси ПС с усилителем мощности 25 Вт',
  'Тракт формирования корректирующей информации с выдачей поправок по псевдодальностям',
  'Тракт формирования корректирующей информации с выдачей поправок по координатам',
  'Блок контроля целостности с одним методом контроля',
  'Блок контроля целостности с двумя методами контроля'
]

const btn_save_res = document.querySelector('.btn-save-res')
const tbody_rlo = document.querySelector('.tbody-rlo')
const tbody_rpn = document.querySelector('.tbody-rpn')

function func_dop_rlo(data = []) {
  console.log(Ktp_rlo.toPrecision(1))
  let _Ktp_rlo = parseFloat(Ktp_rlo.toPrecision(1))
  console.log(typeof _Ktp_rlo)
  if (Ktp_rlo >= 1) {
    tbody_rlo.innerHTML = `
    <tr class="tableRows"><td>Коэффициент Ктп находится в норме, <br>в добавлении ФД нет необходимости</td></tr>`
    return 0
  }
  switch (_Ktp_rlo) {
    case 0.1:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[1]}</td></tr>
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[4]}</td></tr>`
      break;
    case 0.2:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[0]}</td></tr>
      <tr class="tableRows"><td>${data[5]}</td></tr>`
    case 0.3:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[9]}</td></tr>
      <tr class="tableRows"><td>${data[6]}</td></tr>
      <tr class="tableRows"><td>${data[5]}</td></tr>`
      break;
    case 0.4:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[7]}</td></tr>`
      break;
    case 0.5:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[7]}</td></tr>
      <tr class="tableRows"><td>${data[8]}</td></tr>`
      break;
    case 0.6:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[8]}</td></tr>
      <tr class="tableRows"><td>${data[1]}</td></tr>
      <tr class="tableRows"><td>${data[2]}</td></tr>`
      break;
    case 0.7:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[7]}</td></tr>`
      break;
    case 0.8:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[4]}</td></tr>
      <tr class="tableRows"><td>${data[6]}</td></tr>`
      break;
    case 0.9:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[2]}</td></tr>`
      break;
    default:
      tbody_rlo.innerHTML = `
      <tr class="tableRows"><td>Коэффициент Ктп слишком мал, <br>добавление ФД не поможет осуществить топопривязку</td></tr>`
      break;
  }
}

function func_dop_rpn(data = []) {
  let _Ktp_rpn = parseFloat(Ktp_rpn.toPrecision(1))
  if (_Ktp_rpn >= 1){
    tbody_rpn.innerHTML = `
    <tr class="tableRows"><td>Коэффициент Ктп находится в норме, <br>в добавлении ФД нет необходимости</td></tr>`
    return 0
  }
  switch (_Ktp_rpn) {
    case 0.1:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[7]}</td></tr>
      <tr class="tableRows"><td>${data[8]}</td></tr>`
      break;
    case 0.2:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[7]}</td></tr>`
    case 0.3:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[8]}</td></tr>
      <tr class="tableRows"><td>${data[1]}</td></tr>
      <tr class="tableRows"><td>${data[2]}</td></tr>`
      break;
    case 0.4:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[0]}</td></tr>
      <tr class="tableRows"><td>${data[5]}</td></tr>`
      break;
    case 0.5:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[1]}</td></tr>
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[4]}</td></tr>`
      break;
    case 0.6:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[9]}</td></tr>
      <tr class="tableRows"><td>${data[6]}</td></tr>
      <tr class="tableRows"><td>${data[5]}</td></tr>`
      break;
    case 0.7:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[4]}</td></tr>
      <tr class="tableRows"><td>${data[6]}</td></tr>`
      break;
    case 0.8:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[3]}</td></tr>
      <tr class="tableRows"><td>${data[2]}</td></tr>`
      break;
    case 0.9:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>${data[7]}</td></tr>
      <tr class="tableRows"><td>${data[3]}</td></tr>`
      break;
    default:
      tbody_rpn.innerHTML = `
      <tr class="tableRows"><td>Коэффициент Ктп слишком мал, <br>добавление ФД не поможет осуществить топопривязку</td></tr>`
      break;
  }
}

btn_save_res.addEventListener('click', () => {
  if (key_rlo && key_rpn) {
    func_dop_rlo(func_dop_mas)
    func_dop_rpn(func_dop_mas)
  }
})