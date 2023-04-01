function verificar() {
    let idade = document.getElementById('section#idade')    // idade informada no campo de números
    const radioButtons = document.getElementsByName('genero');
    let ver = document.getElementById('section#ver')        // botao VERIFICAR
    let res = document.getElementById('div#res')


    // Adiciona um event listener para cada radio button
    radioButtons.forEach(button => {
        button.addEventListener('click', event => {
            // Obtém o valor do radio button selecionado
            const selectedValue = event.target.value;
        });
    });

    let idadev = Number(idade.value)

    let idadet = 2023 - idadev

    if (idadet >= 1 && idade < 11) {
        if (selectedValue == 'masculino') {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;            
        } else {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;
        }
    } else if (idadet < 17) {
        if (selectedValue == 'masculino') {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;            
        } else {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;
        }
    } else if (idadet < 50) {
        if (selectedValue == 'masculino') {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;            
        } else {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;
        }
    } else if (idadet < 130) {
        if (selectedValue == 'masculino') {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;            
        } else {
            res.innerHTML = `Detectamos ${selectedValue} de ${idadet} anos.`;
        }
    } else {
        res.innerHTML = `Idade inválida`
    }
}