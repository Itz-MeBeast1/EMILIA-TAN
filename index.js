const fs = require("fs");
const path = require("path");
const events = require("./events");
const BgmDB = require('./plugins/sql/bgms');
const chalk = require('chalk');
const start = require('./data');
const MeBeast = require('./config');
const Config = require('./config');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./EMILIA-TAN/');
const { DataTypes } = require('sequelize');
const { getMessage } = require("./plugins/sql/greetings");
const simpleGit = require('simple-git');
const git = simpleGit();
const axios = require('axios');
const got = require('got');
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const DATABASE = MeBeast.DATABASE.define('EMILIA-TAN', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');
var MeBeast = { KL11: '916282344739,0' }

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

start.bot();
