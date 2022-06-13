/**
 * Initializes the program
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @return {boolean}
 */
export function init2(config) {
  return config ? true : false;
}

/**
 * Exits the program
 * @param {number} code
 * @return {number}
 */
export function exit2(code) {
  return code + 1;
}
