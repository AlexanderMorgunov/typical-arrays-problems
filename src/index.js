
exports.min = function min (array) {
    if(array==undefined||array==NaN||array==null||!array) return 0;
    let min=array[0];
    array.forEach(element => {
        if(element<min)min=element;
    });
    if (min==undefined) return 0;
  return min;
}

exports.max = function max (array) {
    if(!array)return 0;
    let max=array[0];
    array.forEach(element => {
        element>max?max=element:max;
    });
    if (max==undefined) return 0;
  return max;
}
exports.avg = function avg (array) {
    if(array==undefined||array==NaN||array==null||!array||array.length==0) return 0;
    let count=0;
    array.forEach(element => {
        count+=element;
    });
    return count/array.length.toFixed(2);
}
