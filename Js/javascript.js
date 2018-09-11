var gauche = 48;
var droite = 48;
var haut = 45;
var bas = 45;
var personnage = document.getElementById('personnage');
const body = document.querySelector('body');
var positions = personnage.style.top;

body.onkeydown = function()
{
    var touche_clavier = event.keyCode;

    switch(touche_clavier)
    {
        case 37:
        
            droite -= 0.5;
            personnage.style.left = droite + '%';
            console.log(droite);
    
            if(droite == 44)
            {
                alert('Vous ne pouvez pas sortir de la piste');
                 droite =48 ;
                 personnage.style.left= droite + '%';
            }
         break;   
      
         case 39:

            gauche += 0.5;
            personnage.style.left= gauche + '%';
            console.log(gauche);

           if(gauche == 52 )
           {
               alert('Vous ne pouvez pas quitter la piste');
               gauche = 48 ;
               personnage.style.left = gauche + '%';
           }
         break;

         case 38:
             haut -= 0.5;
             personnage.style.top = haut + '%';
             console.log(haut);

             if(haut == 0)
             {
                 alert('Vous ne pouvez sortir de la piste');
                 haut += 0.5;
                personnage.style.top= haut + '%';
                console.log(haut, pos);
             }
         break;

         case 40: 
             bas += 0.5;
             personnage.style.top = bas + '%';
             console.log(bas);

             if(bas == 95)
             {
                 alert('Vous ne pouvez pas sortir de la piste');
                 bas = 45 ;
                 personnage.style.top = bas + '%';
                 console.log(bas);
             }
         break; 

    }
 
}