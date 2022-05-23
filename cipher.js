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

const shiftOfTwo = new ShiftCipher(2);


// *************************JASPER'S COMMENTS*****************************

class ShiftCipher {
  constructor(shift) {
    this.shift = shift
  }
  
  // since both operations need to sanitise this string
  // we want to keep them close - pass the function names
  // 'toUpperCase' or 'toLowerCase' depending on what we're doing
  cleanString(message, operation) {
    return [...message[operation]()]
  }
  
  // both operations need to convert an array of codepoints
  // to a single string again so have a reusable method
  // for this
  codePointsToString(codePoints) {
    return codePoints.map(codePoint => String.fromCharCode(codePoint))
      .join('')
  }
  
  /**
   * encryption
   */ 
  
  encrypt(message) {
    const clean = this.cleanString(message.toString(), 'toUpperCase')
    const shifted = this.shiftStringIn(clean)
    return this.codePointsToString(shifted)
  }
  
  // take the cleaned input string and perform our mapping on it
  shiftStringIn(array) {
    return array.map(char => {
      const unicodePoint = char.charCodeAt(0)

      // make sure that we only operate on codepoints
      // within our alphabet range
      //
      // I'm not sure if it was part of the task, but the logic
      // OR in your text is incorrect - in order to know whether
      // something falls between two points, it needs to be AND (&&)
      // here otherwise you don't get the upper and lower limits
      // and it starts to do weird things with punctuation
      if (unicodePoint >= 65 && unicodePoint <= 90) {
        // if the operation pushes us outside our range
        // loop back around
        if (unicodePoint + this.shift > 90) {
          return (unicodePoint + this.shift) - 26
        }
        
        // otherwise just do the shifting
        return unicodePoint + this.shift
      }
      
      // our unicode point was outside alphabet range
      // so we do nothing to it
      return unicodePoint
    })
  }
    
  /**
   * decryption
   */ 
  
  decrypt(message) {
    const clean = this.cleanString(message.toString(), 'toLowerCase')
    const shifted = this.shiftStringOut(clean)
    return this.codePointsToString(shifted)
  }
   
  // take our encrypted array of codepoints and reverse it
  // on another day, we might make this shifting method
  // a single method where you pass mathematical operators
  // but that will make this very difficult to read so I
  // prefer two separate, more-readable methods
  shiftStringOut(array) {
    return array.map(char => {
      const unicodePoint = char.charCodeAt(0)
      // we know this string will be uppercase so set our
      // codepoint brackets
      if (unicodePoint >= 97 && unicodePoint <= 122) {
        // flip all our operations from the other string method
        if (unicodePoint - this.shift < 97) {
          return (unicodePoint - this.shift) + 26
        }
        return unicodePoint - this.shift
      }
      
      // anything that was outside our range on encryption
      // was left alone so still nothing to do here
      return unicodePoint
    })
  }
}


function demonstrate(input) {
  const shift = new ShiftCipher(10)
  const encrypted = shift.encrypt(input)
  const decrypted = shift.decrypt(encrypted)
  console.log(
    input, encrypted, decrypted,
    // checking that our decrypted string is unchanged isn't
    // very scientific because those operations could do nothing
    // at all to return true here, which is why we check after that
    // the encrypted string is different
    
    // in normal unit testing, we would take strings that we know
    // to be correctly encrypted and actually check them but we
    // won't do that here! You should also check things like spaces
    // and punctuation not getting messed with, and if you're feeling
    // particularly spicy, you could check emoji because this
    // doesn't support that
    'Decryption === input', input === decrypted,
    'Encryption !== input', input !== encrypted,
  )
}

demonstrate('abcdefghijklmnopqrstuvwxyz')
demonstrate('hello cal i hope this code makes sense')

