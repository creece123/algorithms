/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if(!intervals || intervals.length < 1){
        intervals.push(newInterval);
        return intervals;
    }
    var res = [];
    for(var i = 0; i < intervals.length; i++){
      
      if (intervals[i].end < newInterval.start){
          res.push(intervals[i]);
      }else if(newInterval.end < intervals[i].start){
          res.push(newInterval);
          newInterval = intervals[i];
      }else{
          newInterval.start = Math.min(newInterval.start, intervals[i].start);
          newInterval.end = Math.max(newInterval.end, intervals[i].end);
      }
    }
            res.push(newInterval);

  
  return res;
};