
export default function loadHome(cached) {
  const mainContent = cached.mainDocumentBody

  const segmentContent = [
    {
      "heading": "AI Restaurant",
      "subHeading": "AI Generated Food in the Heart of New Chusan",
      "src": "./menu/ai-restaurant-interior.jpg",
      "alt": "interior of restaurant",
      "description": "AI Restaurant: God's Favourite Mistake"
    },
    {
      "heading": "Today's Special",
      "subHeading": "Salmon Carnival Cake",
      "src": "./menu/salmon-cake.png",
      "alt": "salmon cake",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat \
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "heading": "Meet Our Chef",
      "subHeading": "Roberto Roboto",
      "src": "./menu/ai-restaurant-chef.png",
      "alt": "an ai generated image of a chef",
      "description": "Nibh nisl condimentum id venenatis. Leo in vitae turpis massa sed \
      elementum tempus egestas. Tempus urna et pharetra pharetra massa massa ultricies mi \
      quis. Euismod in pellentesque massa placerat duis. Aliquet risus feugiat in ante metus \
      dictum at tempor. Diam quam nulla porttitor massa id. Gravida quis blandit turpis \
      cursus in hac habitasse platea dictumst. Integer enim neque volutpat ac. Maecenas \
      volutpat blandit aliquam etiam erat velit scelerisque. Luctus accumsan tortor posuere \
      ac ut consequat semper. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Duis \
      ut diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate \
      ut. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Condimentum id \
      venenatis a condimentum vitae sapien."
    }
  ]

  segmentContent.forEach((segment) => {
    const restaurantDiv = document.createElement("div")
    restaurantDiv.className = "home--segment"
    const restaurantHeading = document.createElement("h1")
    restaurantHeading.textContent = segment.heading
    const restaurantSubHeading = document.createElement("h3")
    restaurantSubHeading.textContent = segment.subHeading
    const restaurantPicture = document.createElement("img")
    restaurantPicture.src = segment.src
    restaurantPicture.alt = segment.alt
    const restaurantTitle = document.createElement("h5")
    restaurantTitle.textContent = segment.description
    restaurantDiv.appendChild(restaurantHeading)
    restaurantDiv.appendChild(restaurantSubHeading)
    restaurantDiv.appendChild(restaurantPicture)
    restaurantDiv.appendChild(restaurantTitle)
    mainContent.appendChild(restaurantDiv)
  })
};
