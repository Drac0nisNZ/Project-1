const modal = document.getElementById('modal') //declaring variable and linking to the modal class from the html
const showModal = document.getElementById('showModal')
const modalClose = document.getElementById('modal-close') //declaring variable and linking to the modal-close class from the html
const bookmarkForm = document.getElementById('bookmark-form') //declaring variable and linking to the bookmark-form class from the html
const websiteNameEl = document.getElementById('website-name') //declaring variable and linking to the website-name class from the html
const websiteUrlEl = document.getElementById('website-url') //declaring variable and linking to the website-url class from the html
const bookmarksContainer = document.getElementById('bookmarks-container') //declaring variable and linking to the bookmarks-container class from the html

let bookmarks = [] // empty array holding the data from the bookmarks

function showModal() {
    modal.classList.add("showModal")
    websiteNameEl.focus() // shows the tag as a website link
}

modalClose.addEventListener("click", () => {  // clicking on the X will close the bookmark or bookmarking page
    modal.classList.remove("show-modal")
})