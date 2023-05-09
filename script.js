let formData = {}
const form = { 
    name: document.querySelector('input[form-name]'),
    message: document.querySelector('textarea[form-message]'),
    btnSend: document.querySelector('button[form-btn = "send"]'),
}

if (localStorage.getItem('form')){ 
    formData = JSON.parse(localStorage.getItem('form'))
    form.name.value = formData.name
    form.message.value = formData.message
} else { 
    localStorage.setItem('form', JSON.stringify({}))
}

setFormData = (newData) => {
    formData = {...newData}
    localStorage.setItem('form', JSON.stringify(formData))
}

form.name.addEventListener('input', () => {
    formData = { 
        ...formData,
        name: form.name.value
    }
    setFormData(formData)
})

form.message.addEventListener('input', () => {
    formData = { 
        ...formData,
        message: form.message.value
    }
    setFormData(formData)
})

form.btnSend.addEventListener('click', () => {
    localStorage.removeItem('form')
    window.location.reload()
})
