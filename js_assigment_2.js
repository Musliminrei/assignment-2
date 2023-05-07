const btnSubmit = document.getElementById('btn-submit')
const btnEdit = document.getElementById('btn-edit')


let formBiodata = document.getElementById('form-biodata')
let inputNama = document.getElementById('input-nama')
let inputRole = document.getElementById('input-role')
let inputAviability = document.getElementById('input-aviability')
let inputUsia = document.getElementById('input-usia')
let inputLokasi = document.getElementById('input-lokasi')
let inputYearexperience = document.getElementById('input-year-experience')
let inputEmail = document.getElementById('input-email')
let textNama = document.getElementById('text-nama')
let textRole = document.getElementById('text-role')
let textAviability = document.getElementById('text-aviability')
let textUsia = document.getElementById('text-usia')
let textLokasi = document.getElementById('text-lokasi')
let textYearexperience = document.getElementById('text-year-experience')
let textEmail = document.getElementById('text-email')
let defaultNama = 'muslimin'
let defaultRole = 'web design'
let defaultAviability = 'intern'
let defaultUsia = 20
let defaultLokasi = 'tangerang'
let defaultYearexperience = 2
let defaultEmail = 'min@gmail.com'
textNama.innerText = defaultNama
textRole.innerText = defaultRole
textAviability.innerText = defaultAviability
textUsia.innerHTML = defaultUsia
textLokasi.innerText = defaultLokasi
textYearexperience.innerHTML = defaultYearexperience
textEmail.innerText = defaultEmail



btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(inputNama.value,'ini input nama value');
    console.log(inputRole.value,'ini input role value');
    console.log(inputAviability.value,'ini input aviability value');
    console.log(inputUsia.value,'ini input usia value');
    console.log(inputLokasi.value,'ini input lokasi value');
    console.log(inputYearexperience.value,'ini input year experience value');
    console.log(inputEmail.value,'ini input email value');
    textNama.innerText = inputNama.value
    textRole.innerText = inputRole.value
    textAviability.innerText = inputAviability.value
    textUsia.innerText = inputUsia.value
    textLokasi.innerText = inputLokasi.value
    textYearexperience.innerText = inputYearexperience.value
    textEmail.innerText = inputEmail.value
    formBiodata.style.display = 'none'
})

btnEdit.addEventListener('click' , function() {
    console.log(formBiodata.style);
    if(formBiodata.style.display == 'none') {
        formBiodata.style.display = 'block'
        inputNama.value = textNama.innerText
        inputRole.value = textRole.innerText
        inputAviability.value = textAviability.innerText
        inputUsia.value = Number(textUsia.innerText)
        inputLokasi.value = textLokasi.innerText
        inputYearexperience.value = Number(textYearexperience.innerText)
        inputEmail.value = textEmail.innerText
    } else {
        formBiodata.style.display = 'none'
    }
})

function confirmAction() {
    var result = confirm("Apakah Anda yakin data ini sudah benar?");
    if (result == true ) {
      alert("Perubahan berhasil disimpan!");
    } else {
      alert("Perubahan dibatalkan.");
    }
  }

function resetAction(){
  textNama.innerText = defaultNama
  textRole.innerText = defaultRole
  textAviability.innerText = defaultAviability
  textUsia.innerText = defaultUsia
  textLokasi.innerText = defaultLokasi
  textYearexperience.innerText = defaultYearexperience
  textEmail.innerText = defaultEmail
  formBiodata.style.display = 'none'
}