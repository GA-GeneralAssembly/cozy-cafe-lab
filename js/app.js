const mainTitleElement = document.querySelector('#main-title')
const bodyElement = document.querySelector('body')
const paraElement = document.querySelector('p')
const higTitElement = document.querySelectorAll('.highlight-title')
const pastMenuList = document.querySelector('#past-menu-items')
const pastMenuItemELement = document.createElement('li')
const cafeSpecialtiesList = document.querySelector('#cafe-specialties')
const cafeSpecElement = document.createElement('li')

const blogSection = document.querySelector('#blogs')
const newDiv = document.createElement('div')
const newH3 = document.createElement('h3')
const newPara = document.createElement('p')

mainTitleElement.textContent = 'Welcome to the Cozy Cafe'
mainTitleElement.style.textAlign = 'center'

bodyElement.style.backgroundColor = 'bisque'

paraElement.textContent = 'Life happens, coffee helps.'

higTitElement.forEach ((higElement) => {
  higElement.style.fontStyle = 'italic'
})

pastMenuItemELement.textContent = 'Rose Cake'
pastMenuList.appendChild(pastMenuItemELement)

cafeSpecElement.textContent = 'Karak Tea'
cafeSpecialtiesList.appendChild(cafeSpecElement)

newDiv.classList.add('blog-post')
newH3.textContent = 'Karak Tea Tasting Event'

newPara.textContent = 'Join us for a delightful afternoon of Karak Tea tasting, featuring unique blends and savory accompaniments.';

newDiv.appendChild(newH3)
newDiv.appendChild(newPara)

blogSection.appendChild(newDiv)