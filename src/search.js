import { API_URL } from './config'
import { toJSON } from './utils'


export const search = (query, type) => (
  fetch(`${API_URL}/search?q=${query}&type=${type}`)
    .then(toJSON)
  )
export const searchArtists = (query) => {
  search(query, 'artist')
}
export const searchAlbums = (query) => {
  search(query, 'albums')
}
export const searchTracks = (query) => {
  search(query, 'tracks')
}
export const searchPlaylists = (query) => {
  search(query, 'playlist')
}

export default {search, searchArtists, searchAlbums, searchTracks, searchPlaylists}
