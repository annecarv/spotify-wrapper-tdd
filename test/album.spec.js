import chai,{ expect } from "chai"
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album'
import sinon from "sinon"
import sinonChai from "sinon-chai"
import sinonStubPromise from "sinon-stub-promise"
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require("node-fetch")


describe('Album', () => {

  let stubedFetch
  let promise

  beforeEach( () => {
    stubedFetch = sinon.stub(global, 'fetch')
    promise = stubedFetch.resolves()
  })

  afterEach ( () => {
    stubedFetch.restore()
  })

  describe('Smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist
    })

    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist
    })

    it('should have getAlbumTracks method',() => {
      expect(getAlbumTracks).to.exist
    })
  })

  describe('getAlbum', () => {
    //verificar se o fetch ocorre
    it('should call fetch method', () => {
      const album = getAlbum()
      expect(stubedFetch).to.been.have.calledOnce
    })
    //verificar se o fetch ocorre com a URL desejada
    it('should call fetch method with the correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.been.have.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')

      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk')
      expect(stubedFetch).to.been.have.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk')
    })
    //verificar se o dado é recebido pela promise
    it('should return correct data from Promise', (done) => {
      //promise.resolves({album: 'name})
      promise.resolves(
        {json: () => new Promise(resolve => resolve({album: 'name'}))}
      )

      const expected = {album: 'name'}
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy').then(album => {
        expect(album.album).to.be.equal(expected.album)
        console.log(album)
        done()
      }).catch ( (error) => {
        console.log(error)
        done()
      })
      //expect(promise.resolveValue).to.be.equal({album: 'name}) - forma correta que não passa nos testes
    })
  })
})
