// Write class below
class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }
  encrypt(message) {
    // capitalise string and turn into array
    const upperCaseMessage = message.toUpperCase();
    const upperCaseMessageArr = upperCaseMessage.split('');

    // find unicode values
    const unicodeArray = upperCaseMessageArr.map(x => x.charCodeAt(0));

    // shift each unicode value
    const unicodeShiftedArray = unicodeArray.map(x => {
      if (x >= 65 || x <= 90) {
        if (x + this._shift > 90)
                return x = (x + this._shift) - 26;
        else {
          return (x + this._shift);
        };
      } else {
        return x;
      }
    });

    // return new string of letters
    let arrFromUnicodeShifted = [];
    for (let i = 0; i < unicodeShiftedArray.length; i++) {
      arrFromUnicodeShifted.push(String.fromCharCode(unicodeShiftedArray[i]));
    };

    const encryptedMessage = arrFromUnicodeShifted.join('');
    console.log(encryptedMessage);
  }
// end Encrypt function

  decrypt(message) {
    // lower case string and turn into array
    const lowerCaseMessage = message.toLowerCase();
    const lowerCaseMessageArr = lowerCaseMessage.split('');

    // find unicode values
    const unicodeArray = lowerCaseMessageArr.map(x => x.charCodeAt(0));

    // shift each unicode value
    const unicodeShiftedArray = unicodeArray.map(x => {
      if (x >= 97 || x <= 122) {
        if (x - this._shift < 97)
                return x = (x - this._shift) + 26;
        else {
          return (x - this._shift);
        };
      } else {
        return x;
      }
    });

    // return new string of letters
    let arrFromUnicodeShifted = [];
    for (let i = 0; i < unicodeShiftedArray.length; i++) {
      arrFromUnicodeShifted.push(String.fromCharCode(unicodeShiftedArray[i]));
    };

    const decryptedMessage = arrFromUnicodeShifted.join('');
    console.log(decryptedMessage);
  }
// end decrypt function.
}

const shiftOfTwo = new ShiftCipher(11);




