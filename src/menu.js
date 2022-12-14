import footer from "./footer";

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
      },
      {
        "src": "./menu/fettucini-alfredo-blue.png",
        "alt": "alfredo with mystery blue",
        "itemName": "Fettucini Alfredo w/ Blue"
      },
      {
        "src": "./menu/forever-burning-chicken.png",
        "alt": "cooking chicken with six legs",
        "itemName": "Forever Burning Chicken"
      }
    ];

    const mainContent = cached.mainDocumentBody;
    const pageHeading = document.createElement("h1");
    pageHeading.textContent = "Menu";
    pageHeading.className = "menu-heading";
    const pageSubHeading = document.createElement("h3");
    pageSubHeading.textContent = "A Smorgasbord of Sadness";
    pageSubHeading.className = "menu-subheading";
    mainContent.appendChild(pageHeading);
    mainContent.appendChild(pageSubHeading);

    const menuItemsDiv = document.createElement("div");
    menuItemsDiv.className = "menu-segment";

    menuItems.forEach((item, index) => {
      const singleMenuItemDiv = document.createElement("div");
      singleMenuItemDiv.className = "menu-item-cont";
      singleMenuItemDiv.id =  `item-number-${index}`;
      const menuItem = document.createElement("img");
      menuItem.src = item.src;
      menuItem.alt = item.alt;
      const menuItemTitle = document.createElement("h5");
      menuItemTitle.textContent = item.itemName;
      const textContainer = document.createElement("div");
      textContainer.className = "menu-item-description";
      textContainer.appendChild(menuItemTitle);
      singleMenuItemDiv.appendChild(textContainer);
      singleMenuItemDiv.appendChild(menuItem);
      menuItemsDiv.appendChild(singleMenuItemDiv);
    });
    mainContent.appendChild(menuItemsDiv);


    footer(cached);
}
