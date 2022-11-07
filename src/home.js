
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
      "description": ""
    },
    {
      "heading": "Meet Our Chef",
      "subHeading": "Roberto Roboto",
      "src": "./menu/ai-restaurant-chef.png",
      "alt": "an ai generated image of a chef",
      "description": ""
    }
  ]

  segmentContent.forEach((segment) => {
    const restaurantDiv = document.createElement("div")
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
