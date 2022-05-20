A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

    encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
    decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
    In both methods, any character outside the alphabet should remain the same.
    But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.


1. Create the ShiftCipher class which takes a numerical value as constructor parameter.

2. It has a method 'encrypt' which capitalizes a string with shifted letters based on the shift numerical value.
        +toUpperCase() string.
        +Find unicode values at each position.
        +.map() each value in string by +(num).
        +if value will go out of limits set looping rule.
        + return string.
        

3. It has a method 'decrpyt' which takes a message and returns a lower case string with each letter shifted backwards by the set shift value.
         +toLowerCase() string.
        +Find unicode values at each position.
        +.map() each value in string by -(num).
        +if value will go out of limits set looping rule.
        + return string.


4. In both methods, any character that is not alphabetical remains the same.
        if (character < 97 || character > 122)
            do nothing to that character


5. But if a character is shifted outside the alphabet it will loop back to the start.
        +Unicode numbers for the alphabet are 97 - 122 for lower case.
            To loop back to start:
            if (x >= 97 || x <= 122) {
                if (x - this._shift < 97)
                return x = (x - this._shift) + 26;
        +Unicode numbers for the alphabet are 65 - 90 for capitals.
            To loop back to start:
            if (x >= 65 || x <= 90) {
                if (x + this._shift > 90)
                return x = (x + this._shift) - 26;



