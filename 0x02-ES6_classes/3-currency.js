export default class Currency {
  constructor(code, name) {
    // Validate code
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    this._code = code;

    // Validate name
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(CodeValue) {
    if (typeof CodeValue !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = CodeValue;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(NameValue) {
    if (typeof NameValue !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = NameValue;
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
