/* Écrire 2 instances date_1 et date_2 de l’objet
   Date avec les mêmes valeurs (2014, 5, 8, 14,
   50, 25)
   ▹ Comparer les 2 objets avec l’opérateur ==
   ▹ Comparer les 2 objets en utilisant == et la
   fonction getTime()
   ▸ Que constatez vous?
   ▸ Modifier l’une des 2 dates en utilisant un setter
   de l’objet Date? */

   var date_1 = new Date(2015, 5, 8, 14, 50,25);
   var date_2 = new Date(2015, 5, 8, 14, 50,25);

   if(date_1 == date_2) {
    var actualDate = date_1.setTime(getTime(date_1));   
    console.log(actualDate);
   } else {
       console.log('none');
   }
