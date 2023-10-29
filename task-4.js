
function calculateRectangleProperties(width, height) {
    var perimeter = 2 * (width + height);
    var area = width * height;
  
    var rectangleProperties = {
      perimeter: perimeter,
      area: area
    };
  
    return rectangleProperties;
  }
  
//var width = 15;
//var height = 30;
//var rectangle = calculateRectangleProperties(width, height);
//console.log("Rectangle Perimeter:", rectangle.perimeter);
//console.log("Rectangle Area:", rectangle.area);