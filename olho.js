function logar() {
    const email = document.getElementById('email').value 
    const senha = document.getElementById('senha').value

    if (email === 'admin' && senha === 'admin') {
        window.location.href = "./paginicial.hml"
    } else {
        alert('Email ou Senha incorretos, tente novamente.')
    }

	let inputs = document.getElementsByClassName('input-form');
		for (let input of inputs) {
			input.addEventListener("blur", function() {
				if(input.value.trim() != ""){
					input.classList.add("has-val");
				} else {
					input.classList.remove("has-val");
				}
			});
		}
}

