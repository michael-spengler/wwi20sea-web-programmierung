# WWI20SEA Web Programmierung


## Prüfungsleistung
1. Viele Open Source Module  
2. Gruppenarbeiten i.S.v. Web Apps / Chatbots 

## Meilensteine der Web Programmierung
### Web 1 (static web)
Statische HTML Seiten mit Links (Internet der frühen 90iger)  

### Web 2 (dynamic web)
Wie Web 1 nur zusätzlich dynamisch v.A. Javascript  

### Web 3 (distributed web)
Wie Web 2 nur zusätzlich dezentral (DAPPs...)  

## Brainstorming Ergebnis vom Anfang der Vorlesungsreihe
![Screenshot 2022-02-17 at 16 08 03](https://user-images.githubusercontent.com/43786652/154510190-24fb925c-a8df-4779-a483-451ad28b355d.png)

## Vorlesungsgestaltung
Feedback geben  
Theorieteil + Zeit für Gruppenarbeiten etc. 
Spengler steht für Troubleshooting via Telegram bereit --> vorab empfehle ich, dass Sie jeden "Blocker" als stackoverflow post formulieren.

## Bewertungskriterien

### Contributions Tagebuch
z.B. learnings.md + contributions.md   

### Saubere Dokumentation

### Codequalität
Separation of Concerns (kein Spaghetticode)   
Sprechende Variablen- & Methodennamen   
High Cohesion   
Loose Coupling  

### Korrekte Funktion
Funtional Correctness Tests

### Goodies
100% Testabdeckung - Tests als ausführbare Spezifikation 
Wenn ihr keine 100% Testabdeckung habt, habt ihr entweder eine unvollständige Spezifikation oder unnötigen Code.

### Open Source Module veröffentlicht / optimiert
Lizenzen (GNU GPL v3 / MIT / Apache ... )   

### Zwischenpräsentationen
Ihr könnt jederzeit einen "so far" Punktestand von mir erhalten, indem Ihr mir Eure bisherigen Arbeitsergebnisse zeigt. 

## Tipps für einen schönen Pfad der Erkenntnis  
Um sich die theoretischen Inhalte effizient anzueignen empfehle ich die Nutzung der [Fancy Flashcard App](https://github.com/fancy-flashcard/ffc/blob/master/README.md). Sie können [hier](https://github.com/fancy-flashcard/deck-collection) ihre eigenen Decks erstellen und per Pull Request hinzufügen. Diese können Sie dann mit dem entsprechenden Raw Link ([Beispiel](https://raw.githubusercontent.com/fancy-flashcard/deck-collection/main/wirtschaftsinformatik/Finanzbuchhaltung.json)) in der Fancy Flashcard App importieren. Die Fancy Flashcard App ist dann auch im offline- / Flugzeugmodus nutzbar.  

Um sich die praktischen Inhalte effizient anzueignen empfehle ich "just do it" - soll heißen: ausprobieren, ausprobieren, ausprobieren :)   
Da Deno für viele eine neue RTE / Technologie ist, empfehle ich [diese Module](https://github.com/michael-spengler/wwi20sea-web-programmierung/blob/main/excursus-deno/example-modules.md) zum Einstieg in das Thema auszuprobieren. 


## Recommended IDE
[VS Code Insiders](https://code.visualstudio.com/docs/?dv=osx&build=insiders)

## Eventuell hilfreiche Links
https://www.w3schools.com/  
https://www.typescriptlang.org/  

## Gruppengestaltung
Issue pro Themenvorschlag aufmachen und jeder, der sich für das Thema interessiert soll diesen issue kommentieren.   
Ideale Gruppengröße 3 - 5 Leute  


## Get Going with Svelte using Snel
https://deno.land/x/snel

## Architekturen

### Monolithische Architekturen
ups:  
evtl. schnellere Entwicklung  

downs: 
Keine Individuelle Skalierbarkeit   
Niedrige Resilienz des Gesamtsystems    
Wenig technologische Freiheit bzgl. jedes einzelnen Microservices   


### Microservices Architekturen
ups:  
Individuelle Skalierbarkeit   
Resilienz des Gesamtsystems    
Technologische Freiheit bzgl. jedes einzelnen Microservices    
Flexibles Lifecycle Management der einzelnen Microservices - API Versionierung  

downs:  
Komplexer Orchestrierungsaufwand  


## Cloud Services
### Infrastructure as a Service (IaaS)
https://hetzner.de 

### Platform as a Service (PaaS) / Function as a Service (FaaS)  
Google Cloud Platform, AWS, ... 

### Software as a Service (SaaS)
SAP 

## Infrastructure as Code
Das Infrastruktursetup wird per Code definiert und kann z.B. bei beliebigen Infrastructure as a Service Anbietern inititialisiert werden.  
Docker Compose etc. ...

## Deployment / Page Provisioning
### Frontend (Page Provisioning)
Option 1: Provide page via server https://github.com/michael-spengler/wwi20sea-web-programmierung/blob/main/backend/server.ts#L6-L10  
Option 2: Provde page via GitHub Pages https://github.com/michael-spengler/wwi20sea-web-programmierung/settings/pages  

### Backend
order a server e.g. via https://hetzner.de, ...., install and use e.g. https://www.npmjs.com/package/pm2 to start e.g. a [Webserver / Process](https://github.com/michael-spengler/wwi20sea-web-programmierung/blob/main/backend/server.ts)  

### Automation (CI/CD)
Continuous Integration, Continuous Deployment and other tasks can be orchestrated via [GitHub Actions](https://github.com/michael-spengler/wwi20sea-web-programmierung/blob/main/.github/workflows/notification.yml)

## Performance Optimierung
### Frontend
Reduce Bundle Size & Test via https://pagespeed.web.dev/  

### Backend

## Hackathons / Bounty Hunting Possible
Company Specific  
https://gitcoin.co/hackathons

## XUnit Test Patterns
[Test Double Patterns](http://xunitpatterns.com/Test%20Double.html)   
[Outside In vs. Inside Out](http://xunitpatterns.com/Philosophy%20Of%20Test%20Automation.html)  

Quick Defect Localization --> wo genau liegt der Fehler....  

## Web Harvesting
Chicken & Egg Problem --> initial daten in meine web app bekommen   
Deep Learning braucht Daten zum trainieren / optimieren der modelle  
.... 

... leveraging testframeworks like https://codecept.io/basics/#architecture.

## Synergies Web Development & Deep Learning
see https://www.kaggle.com/ & Web Harvesting



## Monitoring (planned)
Notification via [Telegram Chatbot](https://deno.land/x/telegram_chatbot) - e.g. if [lower bollinger band was reached](https://deno.land/x/bollinger_bands).

Ich nehme das Thema Monitoring mit auf weil der Trend zu DevOps Teams wahrscheinlich anhalten wird.  
Show Use Cases around https://dydx.exchange/ & https://www.npmjs.com/package/dydx_nodejs_connector + corresponding monitoring.  




