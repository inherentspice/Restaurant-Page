
export default function loadHome(cached) {
  const mainContent = cached.mainDocumentBody


  // restaurant info
  const restaurantDiv = document.createElement("div")
  const restaurantHeading = document.createElement("h1")
  restaurantHeading.textContent = "AI Restaurant"
  const restaurantSubHeading = document.createElement("h3")
  restaurantSubHeading.textContent = "AI Generated Food in the Heart of New Chusan"
  const restaurantPicture = document.createElement("img")
  restaurantPicture.src = "./menu/ai-restaurant-interior.jpg"
  restaurantPicture.alt = "interior of a restaurant"
  const restaurantTitle = document.createElement("h5")
  restaurantTitle.textContent = "AI Restaurant: God's Favourite Mistake"
  restaurantDiv.appendChild(restaurantHeading)
  restaurantDiv.appendChild(restaurantSubHeading)
  restaurantDiv.appendChild(restaurantPicture)
  restaurantDiv.appendChild(restaurantTitle)
  mainContent.appendChild(restaurantDiv)

  // dish of the day
  const specialDiv = document.createElement("div")
  const specialHeading = document.createElement("h1")
  specialHeading.textContent = "Today's Special"
  const specialSubHeading = document.createElement("h3")
  specialSubHeading.textContent = "Salmon Carnival Cake"
  const specialPicture = document.createElement("img")
  specialPicture.src = "./menu/salmon-cake.png"
  specialPicture.alt = "salmon cake"
  const specialDescription = document.createElement("p")
  specialDescription.textContent = ""
  specialDiv.appendChild(specialHeading)
  specialDiv.appendChild(specialSubHeading)
  specialDiv.appendChild(specialPicture)
  specialDiv.appendChild(specialDescription)
  mainContent.appendChild(specialDiv)

  // chef introduction

};
