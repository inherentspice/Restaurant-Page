export default function reloadPage(cached) {
  while (cached.mainDocumentBody.firstChild) {
    cached.mainDocumentBody.removeChild(dom.mainDocumentBody.firstChild)
  }
}
