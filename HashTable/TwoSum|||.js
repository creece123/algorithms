/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
    this._table = new Map();
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
    let count = this._table.has(input) ? this._table.get(input) : 0;
    this._table.set(input, count + 1);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let key of this._table.keys()) {
        let target = value - key;
        if (target === key) {
            if (this._table.get(target) > 1) return true;
        } else {
            if (this._table.has(target)) return true;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var twoSum = new TwoSum();
 * twoSum.add(number);
 * twoSum.find(value);
 */
