const StringUtils = {
    convertLowerCase: function (word) {
      return word.toLowerCase();
    },
    
    convertToUpperCase: function (word) {
      return word.toUpperCase();
    },

    stringUpdate: function (words) {
      return words.replaceAll(" ", "").replace(words[0], words[0].toLowerCase());
    },

    replace: function (words,word) {
      return words.replace(word, "");
    },
  
    isNotEmpty: function (checkVal) {
      if (checkVal && isNaN(checkVal) && checkVal.trim() && checkVal.length>1) {
        return true;
      } 
      else if(!isNaN(checkVal)){
        return true;
      }
      else {
        return false;
      }
    },
  };
  export default StringUtils;
  