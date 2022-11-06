import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"
import reload from "./reload.js"

const loadPage = () => {
  const domCached = () => {
    const mainDocumentBody = document.getElementById("content")
    const pageTransitionDiv = document.getElementById("page--navigation")

    return {
      mainDocumentBody,
      pageTransitionDiv,
    }
  }

  const cached = domCached()
  loadHome(cached)

  // listener that deals with page changes
  cached.pageTransitionDiv.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON"
    if (!isButton) {
      return;
    } else {
      reload(cached)
      if (event.target.id === "home--button") {
        loadHome(cached)
      } else if (event.target.id === "menu--button") {
        loadMenu(cached)
      } else if (event.target.id === "contact--button") {
        loadContact(cached)
      }
    }
  })


}
loadPage()
