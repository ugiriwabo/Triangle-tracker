
function triangleTracker(){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var tracker= ['Equilateral Triangle','Isosceles Triangle','This is not a triangle','Scalene Triangle']

        if (a ===b && b === c && c === a) {
          alert(tracker[0]);
      }
        else if (a === b || a === c || b === c ) {
          alert(tracker[1]);
      }
        else if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
          alert(tracker[2]);
      }
        else if (a !== b && b !== c ) {
          alert(tracker[3]);
      }

    }