export default function reloadPage(cached) {
  while (cached.mainDocumentBody.firstChild) {
    cached.mainDocumentBody.removeChild(cached.mainDocumentBody.firstChild)
  }
}
