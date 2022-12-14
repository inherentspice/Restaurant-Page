import footer from "./footer";

export default function Contact(cached) {
  const contactPeople = [
    {
      "name": "Roberto Roboto",
      "role": "Head Chef",
      "phoneNumber": "010-101-0101",
      "email": "cannotpasscaptcha@falseemail.com"
    },
    {
      "name": "Walter Wiring",
      "role": "Manager",
      "phoneNumber": "010-101-0100",
      "email": "binaryboy@falseemail.com"
    },
    {
      "name": "Bottholomew Bot",
      "role": "Chief Vision Weaver",
      "phoneNumber": "010-101-1000",
      "email": "l33thack3r@falseemail.com"
    }
  ];
  const mainContent = cached.mainDocumentBody;
  const pageHeading = document.createElement("h1");
  pageHeading.textContent = "Contact Us";
  pageHeading.className = "contact-heading";
  const pageSubHeading = document.createElement("h3");
  pageSubHeading.textContent = "A Being that is Totally Not a Bot Will Get Back to You";
  pageSubHeading.className = "contact-subheading";
  mainContent.appendChild(pageHeading);
  mainContent.appendChild(pageSubHeading);

  const contactPeopleDiv = document.createElement("div");
  contactPeopleDiv.className = "contact-segment";
  contactPeople.forEach((person) => {
    const singlePersonDiv = document.createElement("div");
    singlePersonDiv.className = "contact-cont";
    const personName = document.createElement("p");
    personName.textContent = person.name;
    const personRole = document.createElement("p");
    personRole.textContent = person.role;
    const personNumber = document.createElement("p");
    personNumber.textContent = person.phoneNumber;
    const personEmail = document.createElement("p");
    personEmail.textContent = person.email;
    singlePersonDiv.appendChild(personName);
    singlePersonDiv.appendChild(personRole);
    singlePersonDiv.appendChild(personNumber);
    singlePersonDiv.appendChild(personEmail);
    contactPeopleDiv.appendChild(singlePersonDiv);
  });

  mainContent.appendChild(contactPeopleDiv);

  footer(cached);
}
