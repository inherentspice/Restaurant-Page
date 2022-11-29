import loadMenu from "./menu.js"
import reload from "./reload.js"

export default function loadHome(cached) {
  const mainContent = cached.mainDocumentBody

  const segmentContent = [
    {
      "heading": "AI Restaurant",
      "subHeading": "AI Generated Food in the Heart of New Chusan",
      "src": "./menu/ai-restaurant-interior.jpg",
      "alt": "interior of restaurant",
      "description": "AI Restaurant: God's Favourite Mistake.  Ever had? Had to be there at night. \
       Some of these places open up hours before. I'd leave early to go to the park and/or eat at a \
       nearby restaurant before going to bed.  It was a lot less convenient to be on your phone at \
       night. Now, imagine that they will leave hours later at 6am to go home. Same thing happens with \
       rumpleisure and other places where you can rest assured that you will be there at all times. \
       It's unfortunate that this happened, but it illustrates the point that there are benefits to \
       staying in bed at night.  Like bed rest is essential, and if you are going to stay occupied at \
       night, then the best thing to do is to sleep wherever you want. There are a lot of pros to bed \
       rest that I've not mentioned here, so just ignore them. No bed. No sheets. No pillow. No chair. \
       No pillow. Oh, yeah. It’s all relative. Different sounds need different people. Different bed \
       sheets. Different hair. Different rug. Bed rest is absolutely essential if you want to stay \
       focused and recover after a difficult day. And if you want to rest after a difficult day, then \
       help strengthen the bed with your meds. Some people are good at it, some people are not. Some \
       people tense it too much, some people tense it too late. Some people tense it wrongly, some \
       people tense it wrongly, some people just don't teach me. Some of these are signs of bad training,\
       but most of the times I find myself doing things better after correcting my habits.  Like going for \
       a run/bike rides, doing pushups, standing in line, etc.  That sort of thing.  So I find myself doing \
       these habits after correcting my habits, and the more I correct my routines the better I get.  Like \
       hammering away at my problem, the more I find the motivation to fix them.  This is a very personal \
       kind of training, and I would like to think that there are people who are still not good at it after \
       correcting their routines.  Helping out is often about helping people, not about learning from them.  \
       Most of us are still not good at it, but it's very important to learn from those people.  It's not \
       easy to do, but it's not impossible.  Thanks for the motivation!"
    },
    {
      "heading": "Today's Special",
      "subHeading": "Salmon Carnival Cake",
      "src": "./menu/salmon-cake.png",
      "alt": "salmon cake",
      "description": " Totally makes me happy and makes setting aside money for my birthday an option."
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

  const leadImageDiv = document.createElement("div")
  leadImageDiv.className = "lead-image-cont"
  const leadImageTextTitle = document.createElement("p")
  leadImageTextTitle.textContent = "Existential Dread Pancakes"
  leadImageTextTitle.className = "lead-image-title"
  const leadImageSubtitle = document.createElement("p")
  leadImageSubtitle.textContent = "Mouth-Watering Pancakes with a Dollop of Dread"
  leadImageSubtitle.className = "lead-image-subtitle"
  const menuButton = document.createElement("button")
  menuButton.className = "lead-image-menu-btn"
  menuButton.innerText = "Click here for more menu items"
  menuButton.addEventListener("click", () => {
    reload(cached)
    loadMenu(cached)
  })
  leadImageDiv.appendChild(leadImageTextTitle)
  leadImageDiv.appendChild(leadImageSubtitle)
  leadImageDiv.appendChild(menuButton)
  mainContent.appendChild(leadImageDiv)


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
