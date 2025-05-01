const form = document.getElementsByClassName('signup-form')[0]

form.addEventListener('submit', function(e) {
    e.preventDefault()
    document.getElementsByClassName('message')[0].style.display = 'inline'
    setTimeout(()=> {message.style.display = 'none'}, 2000)
})
