/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort(function(a, b) {
        return (a.start - b.start); });

    var valid = 0;
    for (var j = 1; j < intervals.length; j++) {
        if (intervals[j].start <= intervals[valid].end) {
            intervals[valid].end = Math.max(intervals[valid].end, intervals[j].end);
        } else {
            intervals[++valid] = intervals[j];
        }
    }
    intervals.length = valid + 1;
    return intervals;
};
