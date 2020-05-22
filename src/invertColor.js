'use strict';

/**
 * Write a function accepting 6 digit HEX color with a leading #
 * and returning inverted color (color + inverted === white)
 *
 * invertColor('#000000') === '#FFFFFF' // 0x000000 + 0xFFFFFF === 0xFFFFFF
 * invertColor('#DDEEAA') === '#221155' // 0x221155 + 0xDDEEAA === 0xFFFFFF
 * invertColor('#012345') === '#FEDCBA' // 0x012345 + 0xFEDCBA === 0xFFFFFF
 *
 * @param {string} color
 *
 * @return {string}
 */
function invertColor(color) {
  const hexArray = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const reversetHexArray = [
    'F', 'E', 'D', 'C', 'B', 'A', '9', '8',
    '7', '6', '5', '4', '3', '2', '1', '0'];

  const reversetColor = ['#'];

  for (let i = 1; i < color.length; i++) {
    reversetColor
      .push(reversetHexArray[hexArray.indexOf(color[i].toUpperCase())]);
  }

  return reversetColor.join('');
}

module.exports = invertColor;
