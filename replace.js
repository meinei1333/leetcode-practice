var defangIPaddr = function(address) {
    var str = address.replace(/\./g, 'Aacb');
    return str.replace(/Aacb/g, '[.]');
};