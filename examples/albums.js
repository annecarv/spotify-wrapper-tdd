global.fetch = require('node-fetch')

import { search, searchAlbums } from "../src/main";

const albums = searchAlbums('Incubus')

albums.then(data => console.log(data))
