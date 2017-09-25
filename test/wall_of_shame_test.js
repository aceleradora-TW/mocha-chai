const expect = require('chai').expect
const wallOfShame = require('../wall_of_shame')

describe('Wall of Shame', () => {
  it('#filepe() deve retornar Percebe?', () => {

    expect(wallOfShame.filepe()).to.equal('Percebe?')
  })

  it('#fe() deve retornar Inacreditável', () => {
    expect(wallOfShame.fe()).to.equal('Inacreditável')
  })

  it('#sangallinho() deve retornar To Ficando Bem Brabo Ja', () => {
    let result = wallOfShame.sangallinho()

    expect(result).to.equal('To Ficando Bem Brabo Ja')
  })

  it('#andrei(4) deve retornar Sensacional com 4 S', () => {
    expect(wallOfShame.andrei(4)).to.equal('Sensacional com 4 S')
  })
})
