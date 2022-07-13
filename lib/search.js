'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_utils.toJSON);
};
var searchArtists = exports.searchArtists = function searchArtists(query) {
  search(query, 'artist');
};
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  search(query, 'albums');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  search(query, 'tracks');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};

exports.default = { search: search, searchArtists: searchArtists, searchAlbums: searchAlbums, searchTracks: searchTracks, searchPlaylists: searchPlaylists };