var MovingAverage = function(size) {
    this.size = size;
    var arr = [];

    this.next = function(val) {
        if (arr.length >= this.size) {
            arr.shift();
        }
        arr.push(val);
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }


        return sum / arr.length;
    }
}
