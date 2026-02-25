function palindromes(string) {
    let stringarr = string.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
    let cleanedstr = stringarr.join('');
    let reversed = stringarr.reverse().join('');
  
    
    if (cleanedstr === reversed) {
        return true;
    } else {
        return false;
    }

}


// Do not edit below this line
module.exports = palindromes;
