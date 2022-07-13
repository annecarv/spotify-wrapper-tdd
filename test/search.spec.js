import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from "../src/search"

import chai, { expect } from "chai"
import sinon from "sinon"
import sinonChai from "sinon-chai"
import sinonStubPromise from "sinon-stub-promise"
import { Body } from "node-fetch"
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require("node-fetch")

describe("Search", () => {

  let fetchedStub
  let promise

  beforeEach( () => {
    fetchedStub = sinon.stub(global, 'fetch')
    promise = fetchedStub.resolves()
  })

  afterEach ( () => {
    fetchedStub.restore()
  })

  describe("smoke tests", () => {
    //searchs
    it("should exist the search method", () => {
      expect(search).to.exist
    })

    it("should exist the searchAlbums method", () => {
      expect(search).to.exist
    })

    it("should exist the searchArtists method", () => {
      expect(search).to.exist
    })

    it("should exist the searchTracks method", () => {
      expect(search).to.exist
    })

    it("should exist the searchPlaylists method", () => {
      expect(search).to.exist
    })
  })

  describe("Generic Search", () => {

    it("should call fetch function", () => {
      const artists = search()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it("should receive the correct url to fetch", () => {
      context("passing one type", () => {
        const artists = search("Incubus", "artist")

        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist"
        )

        const albums = search("Incubus", "album")
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=album"
        )
      })

      context("passing more than one type", () => {
        const artistsAndAlbums = search("Incubus", ["artist", "album"])

        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist,album"
        )
      })
    })

    it('should return the JSON Data from the Promise', () => {
    const artists = search('Incubus', 'artist')
    promise.resolves(Body)

    expect(artists.resolveValue).to.be.equal(Body)
    })
  })

  describe("searchArtists", () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with correct URL', () => {
      const artists = searchArtists('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')
    })
  })

  describe("searchAlbums", () => {
      it('should call fetch function', () => {
        const albums = searchAlbums('Incubus')
        expect(fetchedStub).to.have.been.calledOnce
      })

      it('should call fetch with correct URL', () => {
      const albums = searchAlbums('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albums')
    })
  })

  describe("searchTracks", () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

      it('should call fetch with correct URL', () => {
      const tracks = searchTracks('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=tracks')
    })
  })

  describe("searchPlaylists", () => {
    it('should call fetch function', () => {
      const tracks = searchPlaylists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with correct URL', () => {
      const playlist = searchPlaylists('Incubus')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')
    })
  })
})
