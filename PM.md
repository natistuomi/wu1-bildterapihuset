# PM (Redesign av Bildterapihuset) - Natalie Tuomi xx.03.21

## Inledning

Syftet med projektet är att framställa en förbättrad samt fungerande version av Bildterapihusets hemsida. (Se https://jensnti.github.io/bth-old/) Det här gör vi genom att utgå från designen vi gjorde i Figma i kursen Digitalt Skapande. (Se https://www.figma.com/file/uUORBwZ2f2L0M1yzLxAiFf/Bildterapihuset-(Desktop)?node-id=0%3A1) Det främsta problemet som behövde lösas från orginalmaterialet var navigationen. Orginalsidan var svår att navigera, med otydliga rubriker och dåligt uppdelad information. Arbetet skedde enligt mobile-fist-principen. 

**De absolut mest grundkläggande kraven för slutresultatet:**
* Minst 1 färdig sida (landing page)
* Responsiv
* 1 bild
* Utfört tester bl.a. validering

**Mitt slutresultat:**
* Alla informationssidor är kompletta, fungerande och färdiga.
* Bokningssidorna är inte ett fungerande formulär, men ger en bild av hur det ska se ut.
* Flertalet bilder som även är responsiva.
* HTML & CSS som validerats flera gånger genom arbetets gång.
* Användartestat med gott resultat.
* Responsiv för mobiltelefoner, men även väldigt breda skärmar.

## Bakgrund

Arbetet påbörjades med en planeringsfas. Den användes för att strukturera upp hur arbetet skulle delas upp enligt min befintliga design, starta en logg och en projectbräda, skriva ner mitt färgschema samt fontval och designa en enkel footer. Huvudsakligen delade jag upp arbetade i tre delar. Först och främst en navigationsheader med sidans titel och logga samt navigeringslänkar, men sedan även en simpel footer. Båda delarna var redan från början planerade för att vara kopieringsbara så att de enkelt skulle kunna klistras in i alla sidor. Innehållet var den tredje delen och den som varierade mest. Det var en typ av innehåll för förstasidan och sedan skapade jag även en mall för informationssidorna. Grundidén med hela planeringen var att göra det så lätt som möjligt att klippa och klistra ihop alla sidorna.

Det praktiska arbetet började med ett fulltständigt fokus på förstasidan, men övergick sedan till informationsidorna och till sist bokningssidorna. Förstasidan fick allt fokus framtills den ansågs vara 'färdig'. De efterliggande sidorna arbetades på simultant eftersom de i allt utom innehåll var identiska. Headern och footern klistrades in i samtliga sidor. Allt utgick självklart från Figma-designen, men vid vissa tillfällen anpassade jag mig efter vad jag senare insåg kunder vara bättre.

I planeringen hade jag bestämt mig för att använda en CSS fil till alla sidor. Detta tidiga val gjorde att allt arbete med CSS utfördes med huvudsakligen klass namn istället för semantiska element. De gånger CSS användes på element gjordes det efter de regler som oftast skulle gälla och eventuella undantag skrevs in med style attributen i HTML. 

Vid struktureringen i HTML var det viktigt att hålla sidan öppen för att kunna vara responsiv och det gjorde att mycket av layouten skrevs med flexbox. Dessutom användes papper och penna för att analogt rita och anteckna vilka element som krävdes och hur de skulle vara nästlade. 

Bilderna är alla hämtade från Unsplash med en hänvisning i footern till fotografen. Jag använde sedan Photoshop för att optimera bildatorleken utan att förlora kvalitén. Jag skapade på så sätt två versioner av bilderna varav en var större och en var mindre. Det var för att kunna göra bilderna responsiva efter skärmstorlek. Mobiler har mindre skärmar, men vill ofta spara på datan. (Se https://unsplash.com/collections/QIlMFB5s-tQ/wu1-project?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Eftersom arbetet har gjorts utefter mobile-first-principen är den grundläggande delen av CSS och till viss del även HTML anpassat för mindre skärmar och en vertikal layout. Media queries anpassar sedan sidan till större skärmar när bredden fyller ett minimikrav. Den kan även skapa marginaler från sidorna om skärmen börjar bli större än optimalt.

Både HTML-filerna och CSS-filen valdierades vid flera stadier i arbetsprocessen. Några enstaka slarvar uppfattades, men annars var det aldrig något större problem. HTML kritiserades däremot för att vissa semantiska element inte innehåll headings. Detta ansåg jag personligen inte var ett problem som krävde något fixande. När sidan wavades uppstod dessvärre ett smärre kontrastfel då den gröna färgen inte har en riktigt perfekt kontrast mot en vit bakgrund. Jag testade andra alternativ, men ansåg till sist att det inte fanns någon tillfredsställande lösning. Jag gjorde till sist beslutet att behålla färgen som det var, men skulle anse att det är ett område som kan förbättras. Sidan har även användartestats på en handfull personer som alla ansåg att sidan var grafiskt acceptabel och funtionell.

### Grafisk profil

**Färger:**
* #183152 (Primär/Huvudfärg)
* #3E5D7A (Sekundär/Komplementfärg)
* #A8CA55 (Sekundär/Komplementfärg)
* #B82D2D (Kontrast vid ett tillfälle)

Blå i olika nyanser kan utge en känsla av frihet, tillit, självuttryck och ärlighet, men det används dessutom för att minska stress. De här är alla delar som definitivt hör hemma i alla typer av terapi även om vissa såklart blir mer framstående när bild kommer med i bilden. Genom att bygga grunden av hemsidan primärt med dessa färger så förmedlar vi allt det här utan att behöva säga ett ord.
	
Ljusgrön symboliserar utveckling och tillväxt vilket lätt är det absolut viktigaste med terapi eftersom det är vad man strävar efter. Terapi är resan, utveckling är målet. Den dyker upp på mindre ställen än dem blå och används som kontrastfärg. Den lyckas väldigt bra med det eftersom den är klarare än dem primära färgerna.


**Fonter:**
* Josefin Sans
* Roboto

Sans serifer för att inte bli för stelt, men samtidigt mjuka och ordentliga former för att utstråla både vänlighet och professionalitet.

## Positiva erfarenheter

Det var intressant att lära sig mer om responsivt arbete. Det är definitivt en viktig del av hemsidor för att de ska fungera väl för olika skärmar. Media queries och bildval är användbara hjälpmedel för att kunna anpassa sidor och arbetet med dem var väldigt givande. Nu när jag testat att arbeta med mobile-first-principen har jag kommit fram till att det för arbetet i webb otroligt mycket lättare och effektivare. Att designa på det sättet som vi gjorde i kursen Digitalt Skapande vid framställningen av sidans design var i motsatt inte alls lika lätt. Själv vill jag påstå att responsiviteten i sidan fungerar ganska bra och det var aldrig några problem med att få till det. Det beror troligen på att jag läste på en hel del om det innan jag började med dem momenten.

Själva uppgiftens storlek och utformning skapade goda förutsättningar för att kunna lära sig mycket och skapa en sida som skulle kunna vara riktig. Det finns en enorm skillnad om man bara jämför med vår föregående uppgift med CV-sidan. Den sidan fick oss bekväma med HTML och CSS, men den här gången fick vi mer rum att försöka få det att följa praxis och tillgänglighets anpassningar. Planeringen hjälpte verkligen till att få allting att landa rätt i det här fallet då det var smidigt att ha det klappat och klart innan man faktiskt kom till dem olika delarna.

## Negativa erfarenheter

Mina bokningssidor är en mall för hur det skulle kunna se ut, men är verkligen inte något fungerande formulär. Det gör att sidans känns halvfärdig medan man fått en tydlig bild av något som vi inte har lärt oss än. Hur fungerar formulär på hemsidor? Hur får man informationen från dem sparad? Hur gör man helt enkelt sidan mer dynamisk? Vill man ta det ett steg längre kan man även fundera över hur webbshoppar fungerar då det även kräver betalning eller sidor med inloggning... 

Linjering. Det var ibland en ren pina att få de olika delarna att linjera eller gruppera sig som önskat. Det var överväldigande mycket pillergöra med att få till det ordentligt och sedan gällde det att det fungerade oavsett skärmstorlek. Det gav en hel del kunskap om CSS och flexbox, men det var inte en rolig lärdom att få ta till sig. Det skulle ha varit en bra idé att anteckna alla pixel och remvärden inlagda vid placeringar.

Arbetet gick smidigt, men stötte ibland på mindre farthinder. I början höll jag mig till planen och gjorde del för del. När jag sedan längre fram bestämde mig för att det saknades en markering eller liknande i headern så behövde det ändras på alla sidor. Små justeringar som inte vara påtänkta i förväg behövde alltid fixas på flera ställen och sedan kontrolleras att inget glömdes. Jag skulle i efterhand erkänna att det hjälpte att ha en tydligen idé om hur sidan skulle se ut och fungera, men det förhindrade inte att småsaker alltid behövde justeras längre fram. Det är inget som egentligen kan undvikas utan kräver möjligen ett finjusterat arbetssätt.

## Sammanfattning

Den största lärdomen jag fått från det här projektet är värdet av en god arbetsprocess. Planering, design, research, markering, styling... Hur man väljer att göra något kan ha stor impakt på vad du kan få för slutresultat och det kan därmed vara värdefullt att testa flera metoder. Mobile-first-principen är bevisligen enklare att tillhandahålla sig till med webben medan jag fortfarande tvivlar om dess effektivitet vid design. Samtidigt har jag kommit fram till att det är enklast att jobba på liknande sidor samtidigt för att få ett enhetligt resultat.

Jag är väldigt nöjd med slutresultatet utifrån mina nuvarande kunskaper, men det finns flera områden som skulle kunna vidareutvecklas eller förbättras: 

Designmässigt handlar det om tillgänglighet. Alla bilder har alternativa texter och de flesta kontraster är anpassade för att vara så tydliga som möjligt. Det finns däremot rum för förbättring vilket skulle vara ett bra område att vidareutvecklas med. Det skulle kunna vara en idé att skriva en lista med anpassningar för att öka tillgänglighet för att enkelt kunna överblicka möjligheter...

Funktionsmässigt handlar det mesta om bokningssidorna. Det skulle definitvt vara aktuellt att få dem att fungera som ett ordentligt formulär, men jag kan tyvärr erkänna att det är utanför mina befintliga kapabiliteter. 