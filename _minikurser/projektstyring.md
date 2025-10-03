---
title: Projektstyring
description: '- orden i sagerne'
order: 0
---
## Indledning
Projektstyring er et læringsmål i sig selv. Det forventes, at der arbejdes struktureret med planlægning og opgavenedbrydning i alle forløb. 

Til projektstyring findes en lang teorier og metoder. Et velkendt eksempel er _scrum_. 

## Hvorfor projektstyring?
I 3.g-teknikfaget på HTX skal man arbejde med komplekse og selvstændige projekter. For at få mest muligt ud af jeres idéer, samarbejde og tid, er projektstyring et afgørende redskab. Uanset om I arbejder med app-udvikling, produktdesign, elektronik eller noget helt fjerde, er det nødvendigt at kunne planlægge, strukturere og evaluere jeres arbejde løbende.

Projektstyring handler ikke kun om at holde styr på deadlines – det handler om at skabe overblik, ansvar og fremdrift i et projekt med mange delelementer.

Projektstyring er ikke noget, man kun bruger i store virksomheder – det er et værktøj, der gør jeres arbejde nemmere, mere overskueligt og mere professionelt. Ved at bruge Trello, bryde opgaver ned og arbejde iterativt, får I ikke bare bedre projekter – I træner også samarbejde, koordinering og projektledelse.

Der er mange forskellige metoder og teorier om optimal projektstyring. I det følgende beskrives en række af de faktorer som indgår. 

## Værktøjer
Der findes et utal af værktøjer der understøtter effektiv projektstyring. I DDU anvender vi i øjeblikket Trello.

I Trello anvender man kort (_cards_, emner, opgaver) og tavler (_boards_) til at danne overblik.
Et kort kan kategoriseres og tildeles attributter på et utal af måder - fx deadline, ejer, kategori, prioritet mv. 

## Kanban
En typisk måde at organisere sit board er kanban. I sin simpleste form består det at tre kolonner som svarer til  emnets "tilstand" (_state_): 

- Bagkatalog (_Backlog_ eller _To Do_)
- I gang (_Doing_)
- Færdig (_Done_)

Dertil føjer man ofte 

- Afventer (_Waiting_)
- Test

Tilstanden Afventer betyder at emnet har en afhængighed til andre emner som skal løses først. 
Test betyder at emnet skal afprøves og godkendes inden det kan lukkes.
Generelt kan kolonner tilføjes efter individuelt behov. 

Princippet i et kanban er en venstre-højre progreession af emner - efterhånden som opgaverne tages i behandling og løses, rykker de længere mod højre. Det giver et godt overblik. 

Opgaver som der arbejdes aktiv på, lægger altid i tilstanden "i gang" (ellers rykkes de tilbage i "To Do")

Burn rate refererer til hvor hurtigt opgaver bliver færdiggjort over tid – altså hvor hurtigt “brættet bliver tømt”.
Hvis der opstår et meget lang bagkatalog, er det en indikator på at man skaber flere opgaver inden man løser. 
Det vil sige at ens _burn rate_ er for lav, eller at man har for få ressourcer, eller at man har for store ambitioner. 

## Roller (arbejdsfordeling)
I mange grupper findes der en naturlig arbejdsdeling baseret på medlemmmernes kompetancer og interesser.
Ved at fordele og tildele emner til gruppens medlemmer kan man tydeliggøre denne arbejdsdeling og fordele ansvaret for det samlede resultat. 
Typiske roller er 

- Projekleder (PL): opdaterer Trello, har overblikket
- Udvikler eller programmør: teknisk anvarlig
- Designer: ansvarlig for UX og UI


## Iterativ udvikling
Iterativ udvikling er centralt i DDU. 

 Man kan ikke forvente én perfekt løsning i første forsøg. I stedet arbejder vi med iterativ udvikling. Det vil sige, at man:
	1.	Udvikler en første version (prototype)
	2.	Tester og indsamler feedback
	3.	Forbedrer og tilretter ens løsning
	4.	Gentager processen

Denne tilgang er helt central i både teknikfaget og i den virkelige verden. Det hjælper jer med at:
	•	Lære af fejl og uforudsete problemer
	•	Finde bedre løsninger
	•	Blive mere refleksive og systematiske i jeres arbejde

## Opgavenedbrydning
Her følger en generel beskrivelse af hvordan og hvorfor man nedbryder opgaver i planlægningsfasen.

Når man er færdig med sin projektbeskrivelse og problemformuleringen, har man i princippet den opgave der skal løses - nemlig "gør det som der står". Det er dog ikke så simpelt.

Hvis man fx skulle lave et unity-spil og en tilhørende rapport, kunne man begynde med at opstille disse opgaver: 

(1) Lav spil  
(2) Skriv rapport

Det er dog for bredt og løst og umuligt at arbejde med. Vi har brug for at at bryde den samlede opgave ned og identificere alle de delopgaver som "gemmer" sig i den samlede opgave.

Så det man har brug for, når man begynder på et nyt projekt og forsøger at danne sig et overblik, er _opgavenedbrydning_. 

Hvad vil det sige? Det vil sige at man forsøger at definere alle de _delopgaver_ som man kan identificere, man _nedbryder_ altså den store opgave i en række små opgaver. 
Ideen kendes fra princippet om hvordan man spiser en elefant - hvilket ikke er så svært: "En bid ad gangen".

Opgavenedbrydning har en række fordele. Efter nedbrydning kan opgaverne:

- beskrives
- estimeres 
- prioriteres
- kategoriseres
- tidsfæstes (tildeles en tidsfrist)
- uddelegeres (tildeles en ejer)
- annoteres (tildeles attributter)

&#x2139; Alle de nævnte handlinger understøttes af gængse projektstyringsværktøjer af en vis kvalitet.

Hvad er det optimale omfang på en opgave - hvordan nedbryder man? Her er et par forslag. 

**Varighed.** Først og fremmest skal en opgave have en overskuelig varighed. 
Den skal kunne løses indenfor et tidsrum hvis varighed kan estimeres nogenlunde.
Et godt udgangspunkt er en varighed på ca. 1-2 timer.

**Kompleksitet.** 
Kompleksitet er udviklerens værste fjende. Kan man opdele en kompleks algoritme i tre separate dele, er den samlede kompleksitet af delene på magisk vis mindre end helhedens. 1 + 1 + 1 er ikke altid 3. Kan man bevidst forsimple en problemstilling? Det er nemmere at arbejde med 22/7 end &#x03C0;.

**Afgrænsning.** Opgaven skal optimalt set kunne løses uden at påvirke andre opgaver eller selv at være påvirket af andre opgaver - den skal være afgrænset. Har man fx at gøre med en to komponenter der kommunikerer, må opgaven kun påvirke den ene komponent. Består et system af flere subsystemer, må opgaven kun ligge i det ene subsystem. Subsystem er i øvrigt en oplagt kandidat for et label, fx "API", eller "Client".

**Ejerskab.** Optimalt set skal en opgave naturligt ligge hos en ejer og ikke kræve flere personers samarbejde. En opgave kan dog sagtens sendes videre til en anden ejer hvis situationen kræver det.

Der kan nævnes mange andre kriterier, men dette er en start.

## Beskrivelse af opgaver
Hvordan beskriver man en opgave? Her er nogle forslag.

**Beskrivelse.** 
Indhold. Hvad består opgaven i - hvad skal laves - giv kort præcis beskrivelse. 

Kriterier. Hvis man er rigtig flittig, beskriver man også _Acceptance Criteria_. 
Altså - hvornår kan opgaven siges at være færdig? 

Test. Og tilsidst - hvordan tester man det. Beskrivelse - trin for trin - af de skridt som man skal tage for at afgøre om opgaven er færdig.

**Kategori.** Oplagt kandidat til et label (#tag). Kategori kan være subsystem, komponent eller lignende.
Eksempler på kategorier: Database, Kode, Frontend, Interaktion, Rapport, Test osv. 

**Ejer.** Hvem skal løse opgaven?

**Estimat.** Hvor lang tid tager opgaven? 

**Vigtighed.** Need-to-have, Nice-to-have, MVP osv. Oplagt kandidat til et label.

Som en tommelfingerregel svarer en opgave til et card i Trello.