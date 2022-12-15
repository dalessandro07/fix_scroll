/* Seleccionando los elementos del DOM. */

const buttonFix = document.querySelector('#buttonFix')
const actualYear = document.querySelector('#year')

if (actualYear) actualYear.textContent = new Date().getFullYear()

/* Si la tecla presionada es ctrl + alt + f, llamará a la función fixScroll. */
window?.addEventListener('keydown', e => {
  if (e.ctrlKey && e.altKey && e.key === 'f') fixScroll()
})

/* Si se hace clic en el botón principal se ejecutará la función `fixScroll` en la pestaña actual. */

buttonFix?.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fixScroll
  })
})

/**
 * Agrega un detector de eventos al documento que detiene la propagación del evento "wheel".
 */
const fixScroll = () => {
  document.addEventListener('wheel', event => event.stopPropagation(), {
    capture: true
  })

  alert('¡El scroll ha sido ajustado!')
}
