import { API_URL } from '../src/config'
import { toJSON } from '../src/utils'

export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`)
    .then(toJSON)
}

export const getAlbums = ids => {
  return fetch(`${API_URL}/albums/?ids=${id}`)
    .then(toJSON)
}
export const getAlbumTracks = () => {
  return fetch(`${API_URL}/albums/${id}/tracks`)
    .then(toJSON)
}
