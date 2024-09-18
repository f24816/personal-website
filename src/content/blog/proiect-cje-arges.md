---
title: 'Proiectul-E și Consiliul Județean al Elevilor Argeș'
author: 'Andrei Valentin'
image: 'https://i.imgur.com/VOUdznq.png'
alt: ''
pubDate: 2024-08-06
topic: 'politics'
---
La sfârșitul anului 2020, în timp ce eram elev în clasa a XI-a la Liceul de Arte Dinu Lipatti Pitești niște colege au fost alese democratic să facă parte din instituția de reprezentare studențească a Consiliului Elevilor. Tot de la ele primesc și un chestionar, făcut pentru a mă alătura unui grup de „feedback” pentru un proiect nou al CJE Argeș.

După completarea acestui chestionar intru într-un grup de WhatsApp. Acest grup avea ca scop adunarea de elevi care ar vrea să ajute Consiliul Elevilor la realizarea unui proiect, anume, o platformă de e-learning. Nu era clar ce o să fie platforma, cunoaștem doar că voia să ajute într-un fel experiența de școală online pe care am avut-o în pandemie, imediat după ce s-au închis școlile și am fost nevoiți să stăm ore în șir pe Zoom închiși în casă în fața unui ecran pe post de școală. 

Nu ne-au fost date alte detalii de către administratorii grupului, ci am fost lăsați în ceață la început, cu mici intervenții de la administratori de tip „o să aflați în curând mai multe detalii” și „așteptați ordinele noastre”. 

Printre acești administratori se numără și șeful CJE Argeș, Robert Seghedi. Cine e Robert Seghedi? Un tânăr și actual vicepreședinte al TNL Argeș, organizația de tineret a Partidului Național Liberal.[^1] A fost elev la Colegiul Național „Zinca Golescu” din Pitești, un liceu cu prestigiu pe care l-a început în 2019. În 2020 la începutul pandemiei Robert trece de la funcția de secretar executiv al CJE Argeș, în cea de președinte.[^2]

Numele proiectului am aflat mai târziu era „Proiect [E]”. Nu a existat până atunci comunicare din partea Consiliului sau a lui Robert în ceea ce privește sponsori sau direcții ulterioare. Dar, după aproximativ o lună am primit o notificare. Robert a achiziționat o interfață pentru site — repet nu se clarifică de unde vin bani pentru această achiziție — mai exact un [template UI](https://duckduckgo.com/?q=admin+panel+ui&t=h_&iax=images&ia=images) care să fie folosit pentru acest proiect. Nu a fost clar până atunci în ce etapă de dezvoltare se află aplicația sau dacă mai este măcar în dezvoltare, și deși aveam speranțe că Robert o să revină cu mai multe detalii, acest lucru nu se întâmplă. În schimb proiectul părea să fie abandonat.

Interesant e faptul că Robert a postat în August 2020 pe un [forum de SAMP](https://www.sa-mp.ro/forums/topic/34563-ucp-laravel-robert-seghedi-2020-version-legat-cu-forum-ips/) o prezentare a unui astfel de panou de admin pentru jocul GTA San Andreas pe care l-a creat sau editat. Utilizatorul *max* răspunde la această postare cu „sincer o parnae de panel care nici nu respecta arhitecutara laravel mai bine faceai cu modele si queryurile in controale”. Deci înțeleg de ce nu l-a făcut el.

![](https://i.imgur.com/bgYuqaJ.png)

Trebuie să menționez și că au existat două grupuri, unul de anunțuri pe care l-am atașat deasupra și un grup de discuții pe care puteam trimite mesaje. Eu am fost destul de *vocal* pe acel grup, și doream să mă implic, dacă nu practic atunci să ofer feedback și să propun moduri în care putem să realizam ceva care să ajute elevii să învețe cu ajutorul internetului. Mai multe despre propunerile mele mai târziu, acum să ne întoarcem la Proiectul E care avea să devină *colegul.ro*.

### Colegul.ro

Ce mai exact s-a întâmplat de atunci? Din Noiembrie 2020 până acum încă nu este finalizat. Numele pentru platforma de e-learning a fost schimbat în [colegul.ro](https://www.colegul.ro/) atunci când a fost cumpărat domeniul pe 06 Mai 2023. Ce este își propune să fie *Colegul*? Un asistent cu inteligență artificială. Poți să îl folosești? Momentan, nu. Butonul de Login te duce pe o pagină de eroare de configurare de unde putem să observăm că abilitățile *IT* ale lui Robert lasă de dorit. Site-ul a intrat în mentenanță de curând deci nu pare complet abandonat.

![](https://i.imgur.com/uD8A8R8.png)

Robert scrie pe pagina lui de LinkedIn despre Colegul: „Împreună, transformăm experiența educației liceale, aducând-o în secolul XXI. Descoperă o comunitate vibrantă, unde pasiunea pentru cunoaștere se întâlnește cu tehnologia de vârf. Alătură-te nouă și împreună creăm viitorul educației!” Deși site-ul nu este funcțional și nu este în tocmai ce își propunea Proiect-E să facă este destul de clar că vorbim despre același proiect, iar „viitorul educației!” pe care Robert îl propune e Chat-GPT, dar pe un alt site... care nu funcționează.

Ok, poate par rău intenționat și site-ul în dezvoltare, poate s-au făcut niște teste. De ce s-a început cu site-ul atunci dacă nu există nici-un produs real? De ce platforma are testimoniale deși nu există? De ce au trecut 4 ani de când a fost început proiectul și încă nu există nimic funcțional? Foarte interesant, deci, am săpat mai adânc. ⛏️

### Spade Studio

Robert mai are un site, o companie defapt, care are ca activitate „servicii de marketing”. Numit [Spade Studio](https://www.spade.ro/), această *companie* se ocupă din câte putem înțelege cu promovarea de businessuri în online prin realizarea de site-uri și oferirea de consultanță într-un pachet de bază în valoare de 6.600 RON. 

![](https://i.imgur.com/kMDnNrH.png)

Robert oferă și alte servicii contra cost, cum ar fi optimizare tehnică prin care pare că își propune să reducă spațiul pe care îl ocupă imaginile de pe site pentru 500 RON… Prețurile și „pachetele” de pe site nu au sens mai ales pentru cineva care lucrează în IT, iar descrierile sunt incoerente. Altele sună de parcă au fost scrise cu Chat-GPT „Conexiuni API” care costă 1.290 RON nu oferă vreo informație relevantă unui cumpărător care nu lucrează în IT și par să fie doar de formă.

Robert spune pe LinkedIn că Spade.ro este o firmă pe care o deține cu „2-10 angajați” și se ocupă cu „servicii de marketing”. Așa că am apelat la [listafirme.ro](https://listafirme.ro/) să vedem dacă Robert chiar deține această firmă. Numele firmei este **YYY SOCIETY SRL** și este deținută în totalitate de Robert, a fost înființată în anul 2017 când era încă elev în clasa a VI-a. Domeniul de activitate raportat este „Fabricarea bijuteriilor si articolelor similare din metale si pietre prețioase” nicidecum servicii de marketing.

![](https://i.imgur.com/ofWuTVQ.png)

Cifra de afaceri pentru această firmă? Zero. Doar în anul 2017 și 2018 firma a încasat profituri nete de 9 respectiv 1.315 RON. Asta înseamnă că testimoniale de la diverse persoane care laudă firma și profesionalismul de care dă dovadă sunt false? Nu neapărat. Site-urile lor chiar există, numai că cifra de afaceri indică faptul că după 2018 firma lui nu a încasat nici-un venit.

Până acum, poate nu înțelegi ce se întâmplă și de ce am ajuns să caut ce declară la ANAF, o să explic. Robert folosește un *website builder* pe nume [Framer](https://www.framer.com/) care te ajută să faci website-uri care arată destul de bine, dar relativ identic. E un fel de [Wix](https://www.wix.com/) sau [Blogger](https://www.blogger.com) pentru cine cunoaște sau a folosit aceste platforme. Robert într-un fel reciclează șabloane existente de site-uri pentru diferitele lui proiecte, apoi le publică pe net cu [Vercel](https://vercel.com/)(cum e în cazul colegul.ro și spade.ro, lucru pe care l-am aflat din erorile de configurare de pe site) și le atașează un domeniu pe care îl achiziționează de pe un site de specialitate. 

Doar aceste domenii costă în jur de 15€ pe an, motiv pentru care să ceri o sumă fixă pentru un site așa cum o face el nu e chiar *smart*, de obicei ceri o sumă fixă pentru dezvoltare și un „abonament” pentru a avea site-ul activ pe internet și mentenanță, astfel firma nu are nevoie să angajeze un om la IT și tu îi oferi o prezență în online în schimbul unei sume de bani.

Costurile nu sunt așa de mari pentru un domeniu dacă ai deja venituri suficiente și publicarea unui site pe Vercel este gratuită, deci e foarte posibil ca Robert să fi făcut aceste site-uri fără a cere să fie compensat în vreun fel. Astfel, el dă impresia că are o firmă de sucesc cu numeroși clienți, deși datele publice ne dovedesc opusul. 

Robert mai are și un PFA, deci nu putem afirma că este o operațiune frauduloasă — domnule sau doamnă judecător — iar când vine vorba de înființarea firmei, este probabil moștenită de la părinți. Dar, din nou, e interesat că a ales să treacă site-ul spade.ro pe numele unei firme cu datorii de 1.778 RON în timp ce el lucrează pe PFA. Dar o să vedeți că nu e singurul lucru pe jumătate adevărat cu care încearcă să își creeze o imagine de „băiat deștept”.

### SpanVault și finanțarea de la Amazon

[Adevărul](https://adevarul.ro/) spune despre că Robert a „dezvoltat de patru luni o aplicație ce a atras deja atenția mai multor companii IT din Europa de Vest și America.” și că a „atras deja finanțare de la Amazon” pentru o aplicație care „este practic un concept de inteligență artificială” un „sistem descentralizat, stochează toate produsele digitale de pe glob”.[^3]

![](https://cdn.adh.reperio.news/image-c/ca3df65e-a27f-4116-b817-c206c07e4168/index.jpeg?p=f%3Djpeg%26w%3D1400%26r%3Dcontain)
*Robert la Radio România Actualități*

Despre ce e vorba? Robert a avut chiar și un interviu la Radio România Actualități în care a vorbit despre aplicație, SpanVault, în care descrie exact ce face deja site-ul [alternativeto.net](https://alternativeto.net/) dar cu AI și făcut special pentru studenți și elevi. Să spunem că în afară de acest articol nu mai există alte mențiuni pe Google despre această aplicație cu „finanțare de la Amazon”.

Robert îmi aduce aminte de alt tânăr pasionat de IT. Sebastian Dobrincu „tânărul milionar în vârstă de 24 de ani”.[^4] Sebastian a făcut parte recent dintr-un scandal cu canalul de Youtube [TPN LABS](https://www.youtube.com/watch?v=2a8ZvNAFbEU), care a „dezvăluit” informații publice despre Sebastian. Informații cum ar fi faptul că a mințit la mai multe podcast-uri la care a fost despre reușitele lui în viață și banii pe care i-a făcut din proiecte la fel de cunoscute și funcționale ca cele ale lui Robert. Totul într-o campanie de imagine care pare să-i fi reușit deoarece în acest moment contul lui de Instagram *sebyddd* are 259K followers. 

Robert totuși pare că a fost interesat mai mult de lumea politică decât de faima pe internet.

### PNL Tineret

În Mai 2022 Robert declară pe Facebook că a aderat la PNL Tineret.[^5] După ce în Ianuarie al aceluiași an se lăuda cu „onoarea” lui pe Facebook, se înscrie în partidul care fost la guvernare și care avea ca scop o „Românie Educată” și care a eșuat *lamentabil*. Defapt perioada 2020-2021, în care s-au luat multe din deciziile pe care le critica Robert a fost guvernată chiar de către de PNL.

Un partid de care nici-un om cu *onoare* și interesat de educație și bunăstarea elevilor nu s-ar atinge, pare totuși să fie **OK** pentru șeful CJE Argeș. 👌

![](https://i.imgur.com/BQqc5G1.jpeg)
*Robert la „o discuție cu reprezentanții PNL privind sistemul educațional din România”*

Mi-ar lua prea mult timp să menționez toate motivele pentru care PNL a eșuat să rezolve problemele din educație, rata abandonului școlar, cu cel mai crescut nivel din ultimul deceniu conform INS. Nu au existat acțiuni care să schimbe rezultatele academice și satisfacția elevilor în cei 10 ani de președinție a lui Johannis, *omul* cu „România Educată”. Cei mai mulți specialiști spun că este un dezastru ce se întâmplă și din punct de vedere economic.

Pe Facebook, există mai multe postări în 2021 în care discută cu membri PNL și deputați PSD anume Aurel Bălășoiu și Nicolae Pavelescu. În 2022 cu câteva luni înainte să devină membru PNL Tineret, Robert spune că „România predă tuturor elevilor o lecție de umilință fără precedent.” criticând astfel acțiunile guvernului PNL.[^6] Mai exact de a închide școli și a le trece în online doar dacă există mai mult de 3 cazuri de COVID-19 confirmate într-o clasă.[^7]

Și aici mă întreb, poate că Robert e un băiat bun care vrea să fie parte dintr-un val de oameni competenți și să transforme în bine Partidul Național Liberal. Oameni care au interesul oamenilor ca prioritate, deși are și niște opinii mai problematice.

În perioada pandemiei declară: „în teritoriu avem incidente extraordinar de mari, iar cu toate acestea, în scoli si licee tot nu se respectă măsurile igienico-sanitare. Există camere de supraveghere, există măsuri care se pot lua. Nu se vrea.”[^8] Camere de supraveghere, deci 1984? Măcar este de partea specialiștilor și credea de pe atunci că pandemia este reală.

De pe Twitter-ul lui în schimb putem observa faptul că e fan Andrew Tate, *influencer* judecat în România pentru viol și trafic de persoane. Într-un tweet spune, și aici traduc din engleză, „să faci site-uri web nu costă nimic, iar oamenii încă plătesc 1000$+ unui alt om care știe să folosească un no-code website builder pentru a construi unul.”[^9] aici „no-code website builder” se referă la Framer, programul pe care îl folosește el. În alt tweet răspunde „gay”[^10] la o postare de pe Reddit în care cineva pune o întrebare — și parafrazez aici să se înțeleagă mai bine — „ești homosexual dacă ai sentimente pentru o fată trans?”. Destul de transfobic dacă mă întrebi pe mine.

După aderarea la PNL declară în [interespublic.ro](https://interespublic.ro/) faptul că „am observat în rândul persoanelor din generația noastră o tentație spre extremismul politic, fapt ce mă dezamăgește profund. Sunt foarte puține persoane de vârsta mea care iau în calcul votarea corectă din punct de vedere social.” și completează cu „un plus de extremism din partea generației noastre nu ar aduce decât și mai multă instabilitate în mediul politic din România, având în vedere contextul actual.”[^11] Dacă nu vă dați seama și vi se par doar niște platitudini, aceasta este linia de partid, discursul PNL pe care îl au și persoane precum [Nicolae Ciucă](https://www.digi24.ro/stiri/actualitate/politica/nicolae-ciuca-am-constituit-o-coalitie-de-guvernare-pentru-a-asigura-stabilitate-nu-convulsii-2555641).

Robert își construiește o carieră de politician ca la carte, o funcție mai mică în consiliul elevilor, promovat la președinte, apoi apariții în anumite publicații online urmată de o aderarea la PNL Tineret. O imagine fabricată a *băiatului deștept care are afaceri de succes în IT și a condus Consiliul Elevilor într-o direcție mai bună*. Urmat de o posibilă aderare la PNL. Până la urmă e clar că de aici e mai ușor să urce pe scara politică.

### Experiența Personală

Ceea ce mă interesează mai mult și motivul pentru care am scris acest articol este pentru că am vrut și am crezut că există adolescenți interesați de tehnologie, care au avut ocazia cu acest proiect să-i ajute toți elevii să aibă o șansă în viață. Să poată să învețe singuri, fără să mai trebuiască să plătească mediații sau culegeri scumpe. Un lucru care putea să demareze o schimbare în educație.

Cum mi-am imaginat eu să existe o platformă? 

Ministerul cu bani publici și cu ajutorul industriei IT prea cunoscută din România face un site gen **Wikipedia** unde profesorii și scriitori manualelor pot să redacteze cursuri și pentru o experiență mai imersivă ai un canal de Youtube unde profesorii pot să înregistreze cursuri. Pentru că e stupid să predai materia Zoom de fiecare dată. Asta împreună cu o bibliotecă online de unde poți să descarci: cărți, manuale, reviste etc. Iar pentru conversațiile face to face cu elevii se pot face și conferințe de tip Zoom dar pe altă platformă care nu îți fură datele personale.[^12]

Toate aceste lucruri puteau să fie implementate în decurs de câteva luni dacă nu săptămâni de *niște băieți*. Sau dacă nu, atunci de către un ONG. Costurile acestei platforme? Minimale, singurul lucru care ar costa cu adevărat este rețeaua de distribuit documente care trebuie să existe împreună cu arhivă la nivel național.

Practic un sistem mai egal în care banii să nu conteze și la care toată lumea are acces. Sună utopic, poate chiar a socialism 👻 dar asta pentru că se bazează pe aceleași principii. Așa cum spune Paulo Freire, un educator și filosof marxist brazilian, nu putem separa politica de educația. La fel cum nu sunt luate astfel de măsuri în educație — pentru că ar deranja status-quo-ul — același lucru se întâmplă cu restul problemelor politice.

> „Rolul ideologiei capitaliste nu este de a argumenta în mod explicit pentru ceva în felul în care o face propaganda, ci de a ascunde faptul că operațiunile capitalului nu depind de niciun fel de o credință asumată subiectiv.” — Mark Fisher, [Realism capitalist: Nu există nicio alternativă?](https://www.google.com/search?client=firefox-b-d&q=realism+capitalit)

Avem impresia că deciziile de bun simț până la urmă nu sunt luate pentru că *conducerea* este incompetentă, când adevărul este că deciziile sunt luate pe bază ideologică. Mișcările de „rezistență” sunt o parte esențială în mențineri status-quo-ului. Consiliul Elevilor est o instituție care prin aparența de control direct al elevilor în sistem, ne sunt prezentate următoarele idei ca fapt „avem un sistem bun, pentru că este democratic” și „uite, elevii au un cuvânt de spus” astfel validând deciziile care sunt luate prin aparență tot cu acordul nostru.

Într-un fel democrația este o fațadă în astfel de instituții, adevăratele probleme care nu s-a rezolvat în ultimi X ani rămân în continuare ne-rezolvate, dar o perpetuă mișcare de „perfecționare” fără vreo reformă adevărată continuă să țină un sistem — care la baza lui este *injust* și ne-funcțional — în viață. Asta pentru că ni se spune că e *cel mai bun sistem posibil*. Sună similar? Pentru că este același mod în care România a funcționat după '99.

Singurul stat cu un sistem educațional bun din Europa, mai exact Norvegia a avut o guvernare de sociali democrați în timpul reformelor educației din 1969 și celei din 1994. Reforme care au dus la schimbări socio-economice radicale în Norvegia dar și celelalte țări nordice.[^13] Desigur PSD este cel mult o pervertire de principiile social democrate incapabil să producă astfel de schimbări instituționale. Mai ales când liderul PSD e ocupat să manipuleze piețe de capital.[^14]

### Concluzie

În concluzie, soluția pare să fie mai puțin capitalism și mai puțină corupție. O schimbare mai mare de guvernare politică decât a celor două culori. Așa că implicați-vă în politică. Oamenii care au reușit să schimbe lucrurile în bine nu au fost cei care au așteptat ca schimbarea să vină de la alții. Ei au fost cei care, cu o dorința de schimbare, curaj și perseverență, au luptat pentru o lume mai bună. Așa cum ei au avut puterea să transforme lumea puțin câte puțin, și tu poți fi unul dintre acei oameni care fac o diferență. ✌️

[^1]: https://tnl.ro/tnl-arges-si-a-ales-biroul-de-conducere/
[^2]: https://ziarulargesul.ro/tanarul-pitestean-robert-seghedi-despre-curaj-onoare-si-implicare/
[^3]: https://adevarul.ro/stil-de-viata/tehnologie/aplicatia-revolutionara-dezvoltata-de-robert-un-2203580.html
[^4]: https://www.libertatea.ro/entertainment/averea-lui-sebastian-dobrincu-tanarul-in-varsta-de-24-de-ani-e-milionar-4624030
[^5]: https://ziarulargesul.ro/robert-seghedi-trece-la-un-alt-nivel-alaturi-de-pnl-arges/
[^6]: https://www.facebook.com/seghedirobert/posts/pfbid02t7w5gb5PyztAgJj7qm5awAjsUd8sUeTfit5LE4Pf8fvAwgBbGvcM9bdu31vdETYHl
[^7]: https://www.digi24.ro/stiri/actualitate/educatie/alexandru-rafila-explica-noile-reguli-pentru-scoli-de-ce-trec-clasele-in-online-cand-apar-3-cazuri-de-covid-19-1803085
[^8]: https://ziarulargesul.ro/tanarul-pitestean-robert-seghedi-despre-curaj-onoare-si-implicare/
[^9]: https://x.com/robertseghedi/status/1768378216362676667
[^10]: https://x.com/robertseghedi/status/1768303499589095902
[^11]: https://interespublic.ro/educatie/robert-seghedi-indiferent-daca-votam-la-16-ani-sau-la-18-ani-trebuie-sa-votam-in-deplina-cunostinta-de-cauza/
[^12]: https://medium.com/privacy-corner/the-zoom-privacy-scandal-what-do-you-need-to-know-b792ac0e86b3
[^13]: https://journals.sagepub.com/doi/full/10.1177/1474904118823104
[^14]: https://www.digi24.ro/stiri/actualitate/politica/ciolacu-raspunde-acuzatiilor-de-manipulare-in-cazul-rosia-montana-eu-joc-la-bursa-dansii-joaca-nu-am-avut-informatii-de-la-avocati-2717517