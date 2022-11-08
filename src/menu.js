export default function Menu(cached) {
    const menuItems = [
      {
        "src": "./menu/salmon-cake.png",
        "alt": "salmon carnival cake",
        "itemName": "Salmon Carnival Cake"
      },
      {
        "src": "./menu/cheese-soda.png",
        "alt": "a glass of soda",
        "itemName": "Cheese Soda"
      },
      {
        "src": "./menu/cow-ice-cream.png",
        "alt": "a cow's head in a bowl",
        "itemName": "Cow Ice Cream"
      },
      {
        "src": "./menu/danger-latte.png",
        "alt": "a cup of coffee",
        "itemName": "Danger Latte"
      },
      {
        "src": "./menu/existential-dread-pancakes.png",
        "alt": "rows of pancakes with mysterious black on top",
        "itemName": "Existential Dread Pancakes"
      },
      {
        "src": "./menu/narwhal-surprise-hamburger.png",
        "alt": "a hamburger",
        "itemName": "Narwhal Surprise Burger"
      },
      {
        "src": "./menu/yellow-curry-with-poodles.png",
        "alt": "yellow curry with chunks of mystery meat",
        "itemName": "Yellow Curry w/ Poodle"
      }
    ]

    const mainContent = cached.mainDocumentBody
    const pageHeading = document.createElement("h1")
    pageHeading.textContent = "Menu"
    const pageSubHeading = document.createElement("h3")
    pageSubHeading.textContent = "A Smorgasbord of Sadness"
    mainContent.appendChild(pageHeading)
    mainContent.appendChild(pageSubHeading)

    const menuItemsDiv = document.createElement("div")
    menuItemsDiv.className = "menu--segment"

    menuItems.forEach((item) => {
      const singleMenuItemDiv = document.createElement("div")
      singleMenuItemDiv.className = "home--segment"
      const menuItem = document.createElement("img")
      menuItem.src = item.src
      menuItem.alt = item.alt
      const menuItemTitle = document.createElement("h5")
      menuItemTitle.textContent = item.itemName
      singleMenuItemDiv.appendChild(menuItem)
      singleMenuItemDiv.appendChild(menuItemTitle)
      menuItemsDiv.appendChild(singleMenuItemDiv)
    })
    mainContent.appendChild(menuItemsDiv)

};
