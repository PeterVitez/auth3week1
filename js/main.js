// import your packages here
import Team from './modules/DataModule.js'
;(() => {
  // stub * just a place for non-component-specific stuff
  console.log('loaded')

  console.log(Team)

  let userSection = document.querySelector('.users-section').children

  userSection[1].textContent = Team.Justin.name
  userSection[2].textContent = Team.Justin.role
  userSection[3].textContent = Team.Justin.nickname
})()
