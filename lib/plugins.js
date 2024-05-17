
var config = require('../config');
var commands = [];
function cmd(_0x440d05, _0x57163d) {
  _0x440d05["function"] = _0x57163d;
  if (!_0x440d05.pattern && _0x440d05.cmdname) {
    _0x440d05.pattern = _0x440d05.cmdname;
  }
  if (!_0x440d05.alias) {
    _0x440d05.alias = [];
  }
  if (!_0x440d05.dontAddCommandList) {
    _0x440d05.dontAddCommandList = false;
  }
  if (!_0x440d05.desc) {
    _0x440d05.desc = _0x440d05.info ? _0x440d05.info : '';
  }
  if (!_0x440d05.fromMe) {
    _0x440d05.fromMe = false;
  }
  if (!_0x440d05.category) {
    _0x440d05.category = _0x440d05.type ? _0x440d05.type : "misc";
  }
  _0x440d05.info = _0x440d05.desc;
  _0x440d05.type = _0x440d05.category;
  if (!_0x440d05.use) {
    _0x440d05.use = '';
  }
  if (!_0x440d05.filename) {
    _0x440d05.filename = "Not Provided";
  }
  commands.push(_0x440d05);
  return _0x440d05;
}
const Module = {
  'export': cmd
};
module.exports = {
  'cmd': cmd,
  'AddCommand': cmd,
  'Function': cmd,
  'Module': Module,
  'smd': cmd,
  'commands': commands,
  'bot': cmd
};
 
 