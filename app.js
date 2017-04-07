var cases =  [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]];
var nblignes = 6;
var nbcolones = 7;
var nbbouttons = 7;
var grilles = document.getElementById("grilles");
var cellules = document.getElementById("cases");
var joueurUn = 1;

    for (var i = 0; i < nblignes; i++) {

        for (var j = 0; j < nbcolones; j++) {
            var divElement = document.createElement("div");
            divElement.className = "tableau";
            grilles.appendChild(divElement);
            divElement.id = "case"+i+"-"+j;
        }
    }
    for (var k = 0; k < nbbouttons; k++) {
        var button = document.createElement("button");
        cellules.appendChild(button);
        button.className = "button";
        button.id = k;

        button.addEventListener ("click", function() {
           var col = this.id;
           var i = 0;
           while(i < 6 && cases[i][col] == 0) {
               i++;
           }
           var lig = i-1;
             if (joueurUn == 1) {
                joueurUn = 0;
                cases[lig][col] = 1;
              }

             else {
                joueurUn = 1;
                cases[lig][col] = 2;
             }
             actualiserGrille();
         });
    }

function afficherGrille (){
    for (var i = 0; i < cases.length; i++){
        console.log(cases[i]);
    }
}

function actualiserGrille(){
    for(var lig = 0; lig <  cases.length; lig++){
        for(col = 0; col < cases[lig].length; col++) {
            if (cases[lig][col] == 1) {
                document.getElementById("case"+lig+"-"+col).className = "playerone";
            }
            else if (cases[lig][col] == 2) {
                document.getElementById("case"+lig+"-"+col).className = "playertwo";
            }
        }
    }

}