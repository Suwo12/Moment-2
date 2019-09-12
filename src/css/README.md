#Laboration två
**_Uppgiften är en del i kursen Webbutveckling III_**
##NodeJs & Gulp

###Syfte och mål med uppgiften

Syftet med uppgiften är att:

*få en inblick i Node.js.

*Kunna automatisera uppgifter med något kommandobaserat verktyg i Node.js, med syfte att förenkla utvecklingsarbetet av en webbplats.

*Skapa en grundstruktur som sedan kan användas som grund till kommande webbplatser.

De nya kunskaperna kommer sedan att kunna applicera i en egen projektwebbplats.

###Vad som skapats i uppgiften

*Konkatinering och minimering av samtliga CSS- och Js-källkodsfiler till en given katalog till en CSS- och Js-resultatfil. 

Resultatfilen i detta projekt heter _pub_


*Det node.js-baserade verktyget Gulp har använts för att skapa automatisering.

*CSS-koden är uppdelad i flera källkodsfiler i arbetskatalogen, en för styling av bilder en för styling av grundstruktur samt en för text, detsamma gäller för JavaScript.

*Det ska finnas en automatik som genomför lämpliga tasks om källkodsfilerna ändras. Denna kallas watchTask.

*Det finns en livereload som körs om någon av resultatfilerna förändras.

*Projektet kan köras på vilken dator som helst som har node.js och npm installerat.

###Beskrivning av teoretiska frågor

#### Vad är automatiserings-processens syfte?

Att kunna minska filer på så vis att man konkatinerar och minifierar filer, från arbetsfiler till en separat katalog för att snabba upp verstionen på server.
Filer kar concatinerats komprimerat javas css, kopierats

#### Ange vilka paket och verktyg du använt, och varför du valt just dessa?

[Gulp-concat](https://www.npmjs.com/package/gulp-concat): Slår samman, konkatinerar JS-filer


[Gulp-uglify](https://www.npmjs.com/package/gulp-uglify): Minifierar JavaScript (ES5)

[Gulp-uglify-es](https://www.npmjs.com/package/gulp-uglify-es): Minifierar JavaScript (ES6)

[CSSNano](): Försökte hitta det men fann ej ersatte med concatCSS och uglifyCSS

[Autoprefixer](https://www.npmjs.com/package/autoprefixer): som lägger itll prefix för olika webbläsare

[Gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin): Minifierar bildfiler

[Gulp-livereload](https://www.npmjs.com/package/gulp-livereload): laddar om webbläsarfönstret automatiskt 

[concatCSS](https://www.npmjs.com/package/gulp-concat-css):
Konkatinerar CSS-filer

[uglifyCSS](https://www.npmjs.com/package/uglifycss):
Minifierar CSS-filer


#### Beskriv systemet du skapat, hur man startar upp det och de tasks som ingå

#### Ta även med om du lagt till något extra.


![Bild på Gulps logotyp](https://hackernoon.com/hn-images/1*-hn8bzW5kPQ4XNja3UBJLg.png)

