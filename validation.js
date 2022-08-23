let helper = document.querySelector('#helper')



const lunghezzaChecker = ()=>{
    helper.textContent = ''
    helper.classList = ''

    if(lunghezzaPwEl.validity.badInput){
        helper.textContent = 'Solo Numeri'
        helper.classList.add('help', 'is-danger')
        
        lunghezzaPwEl.value = 15
        return false
    }

    if(lunghezzaPwEl.value<15){
        helper.textContent = 'Lunghezza minima: 15'
        helper.classList.add('help', 'is-danger')
        
        return false
    }

    if(lunghezzaPwEl.value>200){
        helper.textContent = 'Lunghezza massima: 200'
        helper.classList.add('help', 'is-danger')
        lunghezzaPwEl.value = 200
        return false
    }

    return true
}