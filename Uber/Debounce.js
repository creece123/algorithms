function debounce(fn, delay) {
    var timer
    return function() {


        var context = this
        var args = arguments

        clearTimeout(timer)

        timer = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }()
}

function onScroll() {
    console.log(new Date());
}

debounce(onScroll, 1000);
console.log(new Date() + 'no debounce');
