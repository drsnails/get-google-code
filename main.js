'use strict'

function onInit() {
    const queryStrs = new URLSearchParams(window.location.search)
    const code = queryStrs.get('code')
    const elMain = document.querySelector('main')
    const elCode = elMain.querySelector('.code')
    elCode.innerText = code
    elMain.hidden = false
    const elGreenV = document.querySelector('.green-v')

    document.querySelector('.btn-copy').addEventListener('click', function () {
        navigator.clipboard.writeText(code)
            .then(() => {
                this.innerText = 'Copied! ✅'
            })
    })
}