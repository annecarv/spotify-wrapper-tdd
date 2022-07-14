"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = exports.getAlbumTracks = exports.getAlbum = void 0;

var _config = require("../src/config");

var _utils = require("../src/utils");

const getAlbum = id => {
  return fetch(`${_config.API_URL}/albums/${id}`).then(_utils.toJSON);
};

exports.getAlbum = getAlbum;

const getAlbums = ids => {
  return fetch(`${_config.API_URL}/albums/?ids=${id}`).then(_utils.toJSON);
};

exports.getAlbums = getAlbums;

const getAlbumTracks = () => {
  return fetch(`${_config.API_URL}/albums/${id}/tracks`).then(_utils.toJSON);
};

exports.getAlbumTracks = getAlbumTracks;