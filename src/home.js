
export default function loadHome() {
  const cacheDom = () => {
    const mainDocumentBody = document.getElementById("content")
    return (
      mainDocumentBody
    )
  }

  const dom = cacheDom()
  const pageHeading = document.createElement("h1")
  pageHeading.textContent = "AI Diner"
  const pageSubHeading = document.createElement("h3")
  pageSubHeading.textContent = "Food for Nobody"
  const menuItem = document.createElement("img")
  menuItem.src = "./menu/salmon-cake.png"
  menuItem.alt = "salmon carnival cake"
  const menuItemTitle = document.createElement("h5")
  menuItemTitle.textContent = "Salmon Carnival Cake"
  dom.appendChild(pageHeading)
  dom.appendChild(pageSubHeading)
  dom.appendChild(menuItem)
  dom.appendChild(menuItemTitle)

};
