module.exports = function reverse (a) {
    var b = '';
    if (a >= 0)
    {
        var c = String(a);
        for (var i = c.length-1; i >= 0; i--)
        {
            b = b + c[i];
        }
    }
    else
    {
        var c = String(a);
        for (var i = c.length-1; i > 0; i--)
        {
            b = b + c[i];
        }
    }
    return Number(b);
}
