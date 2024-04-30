const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
	container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
	container.classList.remove('active')
})


const form = document.getElementById('form')
const form2 = document.getElementById('form2')
const name = document.getElementById('name')
const pass = document.getElementById('pass')
const pass2 = document.getElementById('pass2')
const email = document.getElementById('email')
const emai2 = document.getElementById('emai2')

form.addEventListener('click', (e) => {
	e.preventDefault()

	checkInputs()
})

function checkInputs() {
	const nameValue = name.value.trim()
	const emailValue = email.value.trim()
	const passValue = pass.value.trim()

	if(nameValue === '') {
		setErrorFor(name, 'Username cannot be blank')
	} else {
		setSuccessFor(name)
	}
}