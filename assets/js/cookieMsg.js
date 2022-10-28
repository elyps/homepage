function cookieMsgShow() {
  const ls = localStorage.getItem('accept-cookies')
  if (!ls) {
    const modalBtn = document.getElementById('modalButton')
    modalBtn.click()
  }
}

const closeModalBtn = document.getElementById('closeModalBtn')
const acceptBtn = document.getElementById('acceptCookies')

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('accept-cookies', 'true')
  closeModalBtn.click()
})
