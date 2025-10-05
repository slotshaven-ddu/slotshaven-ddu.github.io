---
title: Rapport
description: '- struktur og formalia'
redirect_from:
    - /minikurser/rapportskabelon/
order: 1
---
Ikke to projekter er ens. Forskellige produkter giver forskellige udviklingsforløb. Der er naturligvis forskel på at udarbejde en app (software), en arduino-baseret robot eller en fuldautomatisk pantautomat. Det vil sige at denne skabelon tjener som inspiration og et solidt udgangspunkt - men man slipper ikke for at bruge sin egen sunde fornuft og kritiske sans.

## Struktur

Som udgangspunkt indeholder en tekniksfagsrapport i DDU følgende kapitler:

- [Projektbeskrivelse](#kapitel-projektbeskrivelse)  med problemformulering
- [Problemanalyse](#kapitel-problemanalyse)
- [Konceptudvikling](#kapitel-konceptudvikling)
- [Forproduktion](#kapitel-forproduktion) (prototyping) 
- [Implementering](#kapitel-implementering) 
- [Test](#kapitel-test)
- [Præsentation](#kapitel-præsentation)
- [Konklusion og evaluering](#kapitel-konklusion-og-evaluering)
- [Bilag](#bilag)

Disse kapitler svarer nogenlunde til produktudviklingens faser i en simpel verden.  
Projektbeskrivelse &rarr; Konceptudvikling &rarr; Implementering &rarr; Test &rarr; Lancering

Det er som sagt _udgangspunktet_. Afhængig af forløbets længde, projektets kompleksitet eller aftaler med læreren kan der afviges fra denne skabelon.

Nedenfor beskrives rapportens udstyr og kapitler i den _anbefalede_ rækkefølge.  
&#x2139; Husk at kapitler altid begynder på en ny side med en overskrift på niveau 1.

## Forsiden

Rapporten skal have en forside med

- Titel
- Billede af produkt
- Navne
- Fag, skolens navn og årstal

## Titelbladet

Bagsiden af forsiden kan med fordel anvendes til et såkaldt _titelblad_.
Her samles **al** praktisk information om rapporten og projektet.

- Rapportens titel
- Fag og vejleder
- Dato
- Evt. nøgleord 
- Evt. resume af opgaven (abstract)
- Fulde navne, hold og årgang
- Skolens navn og årstal

## Indholdsfortegnelsen

Dernæst følger en indholdsfortegnelse.
Indholdsfortegnelsen skal indeholde sidenumre og være aktiv - henvisningerne skal være links. 
Forsøg at ramme en balanceret struktur og niveauinddeling med højest 2, måske 3 niveauer.

 Her følger et eksempel som inspiration - men det er ikke one-size-fits-all.

```text
1. Projektbeskrivelse  
1.1 Indledning  
1.2 Problemformulering med tekniske spørgsmål  
1.3 Projektstyring
1.4 Afgrænsning

2. Problemanalyse  
2.1 Analyse af teknisk spørgsmål 1  
2.2 Analyse af teknisk spørgsmål 2  
2.3 Analyse af teknisk spørgsmål 3  
2.4 Opsamling på delkonklusioner  

3. Konceptualisering  
3.1 Regler
3.2 Design
3.3 Interaktion 

4. Forproduktion
4.1 Rutediagrammer
4.2 Tekniske tegninger
4.3 Prototyper

5. Implementering

6. Test
6.1 Testtype
6.2 Planlægning og udførsel
6.3 Resultater
6.3 Konklusioner og evaluering

7. Præsentation af produkt

8. Konklusion og evaluering  

Bilag A Kode
Bilag B Testresultater
```

## Kapitel: Projektbeskrivelse

Dette kapitel sætter scenen for det projekt som I skal i gang med.

### Indledning

Det er en god ide at begynde med en _indledning_. Her introduceres den fysiske og teoretiske virkelighed som projektet befinder sig i - hvem, hvad, hvor - og alle de forudsætninger som læseren skal kende til for at forstå de følgende kapitler. 

Den centrale ide i projektet gennemgåes og bekrives kort og konkret med den viden man har på det tidspunkt.

Når læseren har læst dette afsnit, har hun en god ide om hvad hele handler om.

### Problemformulering

Herefter opstilles en problemformulering. Den indfanger kort og præcist hvilket problem som man forsøger at løse.  
Det er vigtigt at en problemformulering er _åben men afgrænsende_. Den afgrænser de ydre rammer, men stiller sig nysgerrig over for hvilke beslutninger der skal træffes undervejs.
En typisk problemformulering er på formen 

> "Hvordan kan vi **bygge-skabe-udvikle-implementere** en/et **produkt-spil-app** som kan **løse problem A-forbedre løsning B-underholde målgruppe C** ved hjælp af **teknologi X-metode-Y-princip-Z**"

Ovenstående eksempel tjener selvfølgelig kun som inspiration. Den skal ikke kopieres 1:1.

### Tekniske spørgsmål

Herefter opstiller man en række spørgsmål, de såkaldte tekniske spørgsmål eller underspørgsmålene.

De tekniske spørgsmål skal belyse de tekniske udfordringer som skal løses hvis produktet skal komme i mål. 

De tager udgangspunkt i projektbeskrivelsen og problemformuleringen og _nedbryder_ disse i helt konkrete problemstillinger.  

De begynder gerne med et "Hvordan ...".  Eksempel: 

> "Hvordan kan man anvende protokol X til at kommunikere mellem Y og Z".

Termen "teknisk" skal forstås bredt - det betyder i denne sammenhæng først og fremmest at der lægges vægt på en videnskabelig, faktabaseret analyse af disse spørgsmål. Så i den henseende kan et teknisk spørgsmål sagtens handle om målgrupper eller interaktiondesign. 

### Afgrænsning

I afgrænsningen kan man på forhånd afgrænse sit problemfelt. Det er nogle gange nødvendigt at forsimple den virkelighed som man forholder sig til. Dette afsnit tillader gruppen at definere visse aspekter af problemfeltet som man ikke vil arbejde med eller inddrage i sit projekt.  
Eksempel: Man vil lave et spil med en topscorerliste, men man har i første omgang ikke planer om at implementere multi-player mode. Så topscorerlisten viser altid den samme spiller.

## Kapitel: Problemanalyse

I problemanalysen analyseres de opstillede spørgsmål fra projektbeskrivelsen.
Det nemmeste er at behandle hvert spørgsmål i sit eget afsnit eller underkapitel.
Har man 5 spørgsmål, får man altså fem afsnit. 

I disse afsnit analyseres problemet med hjælp af de gængse videnskabelige metoder som man har lært. Videnskabelige artikler, feltstudier, online-research, sammenligning, test osv. 

Hvert afsnit rundes af med en _delkonklusion_ - en opsummering af resultaterne af analysen i dette afsnit.

Den _samlede_ problemanalyse rundes af med en sammenfatning af alle delkonklusionerne.

Denne sammenfatning beskriver overordnet _konsekvenserne_ af analyseresultaterne - hvilken betydning har de for teknologivalget/produktet/implementeringen osv. 

Ergo: analysen viste det og det, og det betyder at vi har valgt den og den løsning.

## Kapitel: Konceptudvikling

I dette kapitel skal den beskrevne idé finpudses til et _koncept_. Det betyder groft sagt at man udarbejder og fastlægger på detajleniveau produktets endelig design, udformning og funktion. Hvis det er et brætspil eller et computerspil fastlægges også hhv. reglerne og gameplayet.

Slutproduktet kan være moodboards, designmanualer, regelbeskrivelser, detaljerede gameplays, salgs- eller konceptsvideoer, use cases.

## Kapitel: Forproduktion

Kaldes også Prototyper (prototyping).
Nu beskrives det forberedende arbejde inden man går i gang med implementering eller produktion. Denne fase handler om at skitsere og designe og planlægge.  Indholdet er i vid udstrækning afhængig af det produktets karakter. 

**Software**. Programmets struktur og virkemåde fastlægges med flowcharts, strukturdiagrammer, pseudokode, E/R-diagrammer, swimlanes osv.

**Fysiske artifakter**. Der udarbejdes målfaste tekniske tegninger, plantegninger, 3D-modeller.
For fysiske artikfakter gælder det at de krævede materialer beskrives i en _stykliste_. Styklisten viser i _tabelform_ materiale, mål, omfang, antal. Styklisten skal kunne bruges at bestille de nødvendige varer hjem.

**Prototyper**. De første prototyper udarbejdes. Man bruger de forhåndenværende materialer til de første udkast. Kasser kan bygges af pap eller papir. Man kan nå langt med limstifter, gaffa, piberensere, clips osv. Prototypen skal give et første indtryk som den videre udvikling kan basere sig på. Prototypens håndgribelighed hjælper med at stimulere diskussionen om den endelige udformning og gøre det muligt at afprøve produktet. 

## Kapitel: Implementering

Igen skelnes der mellem fysiske og digitale produkter.

Med **fysiske** produkter dokumenteres byggefasen grundigt - derfor er dette kapitel ofte billedtungt.
Ofte vil man rende ind forskellige uforudsete problemer - og det er interessant og skal dokumenteres. Hvad lærte man af det? Hvilke ændringer forårsagede det?

**Kode** bliver hurtigt indviklet og kedeligt at beskrive, så her skal man fatte sig i korthed. Udvælg et eller to væsentlige og relevante aspekter af den samlede løsning og gå i dybden med dem. Man kunne i den første del stille skarpt på programmets overordnede arkitektur, og så zoome ind på en central algoritme i den næste del. På den måde viser man både overblik og detaljekendskab.

Undgå skærmbilleder af diaglogbokse og konfigurationvinduer - de indeholder meget lidt information for læseren.

Formatering af kode. Gør læseren den tjeneste at indsætte koden som _tekst_   og rigtig gerne med linjenumre! Undgå klodsede skærmbilleder af kode i dark theme.
Lav en typografi som anvendes til kode - det bliver man glad for i længden.
Som i markdown, eksempel:

```python
1. # Create list with list comprehension
2. squares = [x**2 for x in range(10)]
```

## Kapitel: Præsentation

Dette korte kapitel indeholder en visuel præsentation af det færdige produkt. Videoer kan inddrages - under forudsætning af at de klippede og redigerede!

Hvis produktet er tænkt anvendt i en specifik brugsammenhæng eller på en specifik placering, så placer produktet der så det fremstår i en realistisk kontekst. 

## Kapitel: Test

Test-kapitlet handler kort sagt om at beskrive sine _fund_. Et fund er en observation, der indeholder en overraskende, uventet eller illustrativ pointe. 

Det er forholdsvist uinteressant, hvis konklusionen munder ud i at alle testpersoner havde en forventelig adfærd og var meget tilfredse med produktet. Det er stærk indikator på at testen ikke er grundigt udført, eller udført med de forkerte metoder.

Taldata og rådata placeres i bilagene i et læsevenligt format. 

Hvis testmaterialet inkluderer video, kan man repræsentere den med et skærmbillede. Videoer skal selvfølgelig redigeres og kun indeholde relevante scener. Det er en god ide at udvælge fx tre fund og fremhæve dem med indlagt tekst eller tale. Har man optaget en spiltest eller et interview, vil en redigeret version af videoen være interessant. 

Hold videoer korte som udgangspunkt. Anbring en henvisning til videoens online-adresse i bilagene.

~ * ~

Test skal forberedes før den udføres. Dette kapitel kan derfor med fordel struktures i tre dele: forberedelse, udførelse og evaluering.

### Forberedelse

I den første del, forberedelsen, redegører for sine overvejelser og begrunder sine valg. Det skal fremgå hvilke testmetoder man anvender og hvorfor. Det er altså en god ide at redegøre for egenskaber, fordele og ulemper ved forskellige testmetoder og på den baggrund begrunde sine valg. 

Dernæst beskriver man den praktiske udvælgelse af testsubjekter og den praktiske gennemførsel af testen, herunder gruppemedlemmernes rolle i afviklingen. 
Det forventes, at sammenhængen mellem en eventuel målgruppe og gruppen af testpersoner belyses.

### Udførelse

I næste afsnit, udførelsen, dokumenteres afviklingen af testen. Her afhænger meget af testform.

### Evaluering

I den sidste del, evalueringen, diskuterer man resultaterne.

Har man gennemført kvalitative interviews, vil uddrag og citater af signifikante pointer vil forventet.
Har man et talmateriale, opsummeres tallene på relevant vis.

Kort sagt, data analyseres og diskuteres og vigtige fund og pointer fremhæves.

Testkapitlet afrundes med en opsummering.

## Kapitel: Konklusion og evaluering

I konklusionen skal man "vende tilbage". Man skal vende tilbage til forlægget (den stillede opgave), problemformuleringen og en evt. kravspecifikation og reflektere over "hvordan gik det så?".
Kort sagt:
> reflekter over jeres resultater ved at forholde jer til udgangspunktet

Udgangspunktet er som sagt opgaven, problemformuleringen, analysen, kravspecificationen osv.
Her kommer testresultaterne i spil. For alt andet end meget trivielle systemer er det vanskeligt at skrive en troværdig konklusion hvis man ikke har nogle testresultater til at understøtte sine konklusioner med. Det er som regel ikke nok at skrive at "det virkede som forventet". Konklusioner skal som udgangspunkt baseres på en metodisk, systematisk afprøvning eller test.

## Bilag

De enkelte bilag er normalt "nummereret" med store bogstaver, A, B, C osv.
Ligesom kapitler begynder bilag øverst på en ny side.
Det er vigtigt at beskrive hvad de enkelte bilag indeholder.   

Eksempel:

> BILAG A. Testdata
> Her følger i fuld længde alle testresultater fra vores produkttest.  
> Testen blev udført den 10/10 af XX (observatør), YY (video) og ZZ (testleder) i lokale 73 på Slotshaven Gymnasium.
> Testpersoner var 10 tilfældigt udvalgte elever fra 2.g.

I bilagene anbringes dokumentation der er for omfattende til at indgå i selve rapporten.  
Eksempler kan være:

- kvalitative interviews
- testresultater i fuldt omfang
- kildekode
- tekniske illustration og diagrammer i fuld størrelse
