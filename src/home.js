
export default function loadHome(cached) {
  const mainContent = cached.mainDocumentBody
  const pageHeading = document.createElement("h1")
  pageHeading.textContent = "AI Restaurant"
  const pageSubHeading = document.createElement("h3")
  pageSubHeading.textContent = "Food for Nobody"
  const menuItem = document.createElement("img")
  menuItem.src = "./menu/salmon-cake.png"
  menuItem.alt = "salmon carnival cake"
  const menuItemTitle = document.createElement("h5")
  menuItemTitle.textContent = "Salmon Carnival Cake"
  mainContent.appendChild(pageHeading)
  mainContent.appendChild(pageSubHeading)
  mainContent.appendChild(menuItem)
  mainContent.appendChild(menuItemTitle)
};
