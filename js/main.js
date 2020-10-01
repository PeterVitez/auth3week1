// import your packages here
import Person from './modules/DataModule.js'
;(() => {
  // stub * just a place for non-component-specific stuff
  console.log('loaded')

  console.log(Person)

  let userSection = document.querySelector('.users-section').children

  userSection[1].textContent = Person.name
  userSection[2].textContent = Person.role
  userSection[3].textContent = Person.nickname
})()
