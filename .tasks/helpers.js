var chalk   = require('chalk')
  , _       = require('lodash')
  ;

module.exports = {

  /**
   * [jsonify description]
   * @param  {[type]} data [description]
   * @param  {[type]} conf [description]
   * @return {[type]}      [description]
   */
  jsonify: function(data, conf) {
    conf = conf || {};

    defaults = {
      color: 'cyan'
    , space: 4
    };

    conf =  _.extend(defaults, conf);

    return chalk[color](JSON.stringify(conf.data, null, conf.space));
  }


  /**
   * Removes all line comments from JSON content
   * @param  {string} str JSON content containing line comments
   * @return {string}     Commentless JSON content
   */
, minify: function(str) {
    return JSON.parse(str.replace(/^[\s\t]*\/\/.+/g, ''));
  }


  /**
   * [colorizeMetaInfo description]
   * @param  {[type]} name  [description]
   * @param  {[type]} value [description]
   * @param  {[type]} color [description]
   * @return {[type]}       [description]
   */
, colorizeMetaInfo = function(name, value, color) {
    if (!color) { color = 'cyan'; }

    if (value) {
      value = chalk[color](value);
    } else {
      value = '';
    }

    return [chalk.gray('>'), name+':', value, EOL].join(' ');
  }


  /**
   * [writeLine description]
   * @param  {[type]} message   [description]
   * @param  {[type]} color     [description]
   * @param  {[type]} highlight [description]
   * @return {[type]}           [description]
   */
, writeLine = function(message, color, highlight) {
    if (!color) { color = 'white'; }

    if (highlight) {
      color = ['bg', color.toUpperCase().substr(0,1), color.substr(1)].join('');
    }

    return [
        '|'
      , spacer
      , chalk[color](message)
      , new Array(maxWidth - leftMargin - pipeCount - message.length).join(' ')
      // , '|'
    ].join('');
  }
};
