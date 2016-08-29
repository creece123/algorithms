function Logger() {
    var hash = {};
    this.shouldPrintMessage = function(timestamp, message) {
        if (hash[message] > timestamp) {
            return false;
        } else {
            hash[message] = timestamp + 10;
            return true;
        }
    }
}
