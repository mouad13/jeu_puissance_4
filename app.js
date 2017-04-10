var cases =  [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]];

var nblignes = 6;
var nbcolones = 7;
var nbbouttons = 7;
var grilles = $("#grilles");
var cellules = $("#cases");
var joueur = 1;
var joueur2 = 2;

// creation des lignes, des colonnes et les boutons du tableux

for (var i = 0; i < nblignes; i++) {

    for (var j = 0; j < nbcolones; j++) {
        grilles.append('<div class="tableau" id="case'+i+'-'+j+'"></div>');  // on ajoute la div dans la grille 
    }
}
    // on ajoute des boutons
    
    for (var k = 0; k < nbbouttons; k++) {
    	 cellules.append('<button class="button" id="'+k+'"></button>');


    }
       

$("button").click(function() { 
   var col = $(this).attr("id");	      
   var i = 0;
 // tant que les cases sont vides la boucle continue et remplie les cases
   while(i < nblignes && cases[i][col] == 0) {
       i++;
   }
	       
 // si la case est remplie on passe a une autre case   
   var lig = i-1;
     if (joueur == 1) {
        joueur = 0;
        cases[lig][col] = 1;
      }
 // 
     else {
        joueur = 1;
        cases[lig][col] = 2;
     }
     actualiserGrille();
    
 });


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



function resultatcol (){
	for (var i = 0; i < nbcolones.length; i++) {
		if(joueur == 4){ 
			console.log("gagner");


		}
	}
        
}        
