"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchTracks = exports.searchPlaylists = exports.searchArtists = exports.searchAlbums = exports.search = exports["default"] = void 0;

var _config = require("./config");

var _utils = require("./utils");

var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type)).then(_utils.toJSON);
};

exports.search = search;

var searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchAlbums = function searchAlbums(query) {
  search(query, 'albums');
};

exports.searchAlbums = searchAlbums;

var searchTracks = function searchTracks(query) {
  search(query, 'tracks');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;
var _default = {
  search: search,
  searchArtists: searchArtists,
  searchAlbums: searchAlbums,
  searchTracks: searchTracks,
  searchPlaylists: searchPlaylists
};
exports["default"] = _default;