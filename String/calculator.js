/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var values = [],
        ops = [];
    s = s.trim();

    for (var i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue;
        }

        if (s[i] >= '0' && s[i] <= '9') {
            var num = 0;
            while (s[i] >= '0' && s[i] <= '9' && i < s.length) {
                num = num * 10 + (s[i] - '0');
                i++;
            }
            i--;
            values.push(num);
        } else if (s[i] === '(') {
            ops.push(s[i]);
        } else if (s[i] === ')') {
            while (ops.peek() !== '(') {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }

            ops.pop();
        } else if (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/') {
            while (ops.length > 0 && hasPrecedence(ops.peek(), s[i])) {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }

            ops.push(s[i]);
        }
    }

    while (ops.length > 0) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
    }

    return values.pop();
};

function hasPrecedence(op1, op2) {
    if (op2 === '(' || op2 === ')') {
        return false;
    }

    if ((op1 === '+' || op1 === '-') && (op2 === '*' || op2 === '/')) {
        return false;
    } else {
        return true;
    }
}

function applyOp(op, v1, v2) {
    switch (op) {
        case '+':
            return v1 + v2;
        case '-':
            return v2 - v1;
        case '*':
            return v1 * v2;
        case '/':
            return parseInt(v2 / v1);
    }

    return 0;
}

Array.prototype.peek = function() {
    var tmp = this.pop();
    this.push(tmp);
    return tmp;
}
