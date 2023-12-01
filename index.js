const words = document.querySelectorAll(".fancy")

words.forEach(word => {
    const letters = word.innerText.split("")
    word.innerText = null
    letters.forEach(letter => {
        const span = document.createElement("span")
        span.classList.add('letter')
        span.innerText = letter
        span.style.transform = 
        word.appendChild(span)
    })

    const chars = word.querySelectorAll(".letter")

    word.addEventListener('mouseenter', event => {
        chars.forEach(letter => {
            const top = Math.floor(Math.random() * 80) - 40
            const left = Math.floor(Math.random() * 60) - 30
            const deg = Math.floor(Math.random() * 10) - 5
            letter.style.transform = `translate(${left}%, ${top}%) rotate(${deg}deg)`
        })
    })

    word.addEventListener('mouseleave', event => {
        chars.forEach(letter => {
            letter.style.transform = null
        })
    })

})




const blob = document.getElementById('blob')

window.addEventListener('mousemove', event => {
    const { clientX, clientY } = event;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, {duration: 2000, fill: 'forwards', })
})

window.addEventListener('touchstart', event => {
    const { clientX, clientY } = event;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, {duration: 2000, fill: 'forwards', })
})
