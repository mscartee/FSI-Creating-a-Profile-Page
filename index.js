let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append("Rizzo")
content.append(header)

let divider=document.createElement('div')
divider.setAttribute('class','dog-content')

let dogImage =document.createElement('img')
dogImage.setAttribute('class','dog-image')
dogImage.src="./assets/rizzo.jpg"

divider.append(dogImage)
content.append(divider)