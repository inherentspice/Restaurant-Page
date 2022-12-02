export default function footer(cached) {
  const mainContent = cached.mainDocumentBody;

  // creating footer as re-useable component
  const footerDiv = document.createElement("div");
  footerDiv.className = "footer-cont";
  const footerContact = document.createElement("p");
  footerContact.textContent = "704 NS 21st Avenue | New Chusan | 200000 | (010) 110-0101 | airestaurant@falseemail.com";
  const footerInfo = document.createElement("p");
  footerInfo.textContent = "DINE IN ONLY";
  const footerOpening = document.createElement("p");
  footerOpening.textContent = "Wednesday & Thursday: 8pm - 9pm";
  footerDiv.appendChild(footerContact);
  footerDiv.appendChild(footerInfo);
  footerDiv.appendChild(footerOpening);
  mainContent.appendChild(footerDiv);

}
