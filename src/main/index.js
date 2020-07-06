'use strict';
var _ = require('lodash');
var numRef =  require('./data.json');

var numToWord = function (num){

    return _.reduce(numRef, function (accum, ref) {
        return ref.num === num ? ref.word : accum;
    }, '');
}

var wordToNum = function (word) {

    return _.reduce(numRef, function (accum, ref) {
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
}
module.exports = {numToWord, wordToNum};
