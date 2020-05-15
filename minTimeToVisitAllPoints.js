/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  var result = 0;
  for (let index = 0; index < points.length - 1; index++) {
      const point1 = points[index];
      const point2 = points[index + 1];
      let x = Math.abs(point1[0] - point2[0]);
      let y = Math.abs(point1[1] - point2[1]);
      result += Math.max(x, y);
  }
  return result;
};

console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]));