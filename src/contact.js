export default function Contact(cached) {
  console.log("here")
  const contactPeople = [
    {
      "name": "Roberto Roboto",
      "role": "Head Chef",
      "phoneNumber": "010-101-0101",
      "email": "cannotpasscaptcha@falsereality.com"
    },
    {
      "name": "Walter Wiring",
      "role": "Manager",
      "phoneNumber": "010-101-0100",
      "email": "binaryboy@falsereality.com"
    },
    {
      "name": "Bottholomew Bot",
      "role": "Chief Vision Weaver",
      "phoneNumber": "010-101-1000",
      "email": "l33thack3r@falsereality.com"
    }
  ]
  const mainContent = cached.mainDocumentBody
  const pageHeading = document.createElement("h1")
  pageHeading.textContent = "Contact Us"
  const pageSubHeading = document.createElement("h3")
  pageSubHeading.textContent = "A Being that is Totally Not a Bot Will Get Back to You"
  mainContent.appendChild(pageHeading)
  mainContent.appendChild(pageSubHeading)

  const contactPeopleDiv = document.createElement("div")
  contactPeopleDiv.className = "contact--segment"
  contactPeople.forEach((person) => {
    const singlePersonDiv = document.createElement("div")
    singlePersonDiv.className = "home--segment"
    const personName = document.createElement("p")
    personName.textContent = person.name
    const personRole = document.createElement("p")
    personRole.textContent = person.role
    const personNumber = document.createElement("p")
    personNumber.textContent = person.phoneNumber
    const personEmail = document.createElement("p")
    personEmail.textContent = person.email
    singlePersonDiv.appendChild(personName)
    singlePersonDiv.appendChild(personRole)
    singlePersonDiv.appendChild(personNumber)
    singlePersonDiv.appendChild(personEmail)
    contactPeopleDiv.appendChild(singlePersonDiv)
  })

  mainContent.appendChild(contactPeopleDiv)

}
