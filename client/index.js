/**
 * @class
 *
 * XssPrevention class to escape the occurrence of each special character.
 */
class XssPrevention {
  /**
   * escape the occurrence of each special character.
   *
   * @param {any} text                          HTML TAG to this function.
   */
  static escapeHtml( text ) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }
}
