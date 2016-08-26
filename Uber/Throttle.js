function throttle(fn, delay) {
    var timer = null;


    return function() {

        var context = this,

            args = arguments;



        if (timer) {

            clearTimeout(timer);

        }

        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    }()

}

function onScroll() {
    console.log(new Date());
}

throttle(onScroll, 10000);
console.log(new Date());
