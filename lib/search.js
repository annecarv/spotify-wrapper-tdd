"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchTracks = exports.searchPlaylists = exports.searchArtists = exports.searchAlbums = exports.search = exports.default = void 0;

var _config = require("./config");

var _utils = require("./utils");

const search = (query, type) => fetch(`${_config.API_URL}/search?q=${query}&type=${type}`).then(_utils.toJSON);

exports.search = search;

const searchArtists = query => {
  search(query, 'artist');
};

exports.searchArtists = searchArtists;

const searchAlbums = query => {
  search(query, 'albums');
};

exports.searchAlbums = searchAlbums;

const searchTracks = query => {
  search(query, 'tracks');
};

exports.searchTracks = searchTracks;

const searchPlaylists = query => {
  search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;
var _default = {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists
};
exports.default = _default;