calcQuad();
    function calcQuad() {
    var result;

    var a = Number(prompt('Input a (a ≠ 0)'));
    var b = Number(prompt('Input b'));
    var c = Number(prompt('Input c'));
    
    var discr = (Math.pow(b, 2))- 4 * a * c;
    
    if (discr === 0) {
       result = 'there is only one root';
    } else if (discr < 0) {
        result = 'try again';
    } else if ( discr > 0) {
        var x1 = ( - b + Math.sqrt(discr)) / (2 * a);
        var x2 = ( - b - Math.sqrt(discr)) / (2 * a);
       
        result = 'x1 = ' + x1 + ', x2 = ' + x2;
    }
    
    document.write(result);
    }