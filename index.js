// Strings-Library/index.js

String.prototype.convertStringToList = function() {
    return this.split('');
}

String.prototype.isLetter = function() {
    return ((this.length === 1 && this.match(/[a-z]/i)) ? true : false)
}

//// CAPITALIZE ////
String.prototype.firstCharUpper = function() {
    if (this.length == 0) return ''
    return this.charAt(0).toUpperCase() + this.slice(1)
}

//// ALL CAPS ////
String.prototype.allCaps = function() {
    return this.toUpperCase()
}

//// CAPITALIZE WORDS ////
String.prototype.allfirstCharsToUpper = function() {
    return this.split(' ').map(word => word.firstCharUpper()).join(' ')
}

//// DEPRECATED: CAPITALIZE FIRST CHAR OF EACH WORD ////
    // String.prototype.allfirstCharsToUpper = function () {
    //     lst = convertStrToLst(this)
    //     for (i in lst) {
    //         lst[i] = firstCharUp(lst[i])
    //     }
    //     return lst.join(' ')
    // }

// broken
// String.prototype.capEvOthLet = function() {
//     return this.split(' ').filter((word, idx) => {
//         idx % 2 !== 0 && (word = firstCharUp(word))
//         console.log('word:', word);
        
//     }).join(' ')
// }

//// REMOVE ALL WHITE SPACE ////
String.prototype.removeWhiteSpace = function() {
    return this.replace(/\s/g, "");
}

//// KABOB CASE ////
String.prototype.kabobCase = function () {
    return this.removeWhiteSpace().split(' ').join('-')
}

//// SNAKE CASE ////
String.prototype.snakeCase = function () {
    return this.removeWhiteSpace().split(' ').join('_')
}

/// CAMEL CASE ////  (This function was donated by Jake Shams https://github.com/jshams)
String.prototype.camelCase = function () {
    let camelStr = ''
    let firstWord = true
    for (word of this.removeWhiteSpace().split('')) {
        if (firstWord) {
            camelStr += word
            firstWord = false
        }
        else camelStr += word.firstCharUpper()
    }
    return camelStr
}
