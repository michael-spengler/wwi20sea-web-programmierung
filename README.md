# WWI20SEA Web Programmierung


## Prüfungsleistung
1. Viele Open Source Module  
2. Gruppenarbeiten i.S.v. Web Apps / Chatbots 

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


### Goodies
100% Testabdeckung - Tests als ausführbare Spezifikation 
Wenn ihr keine 100% Testabdeckung habt, habt ihr entweder eine unvollständige Spezifikation oder unnötigen Code.

### Open Source Module veröffentlicht / optimiert


### Zwischenpräsentationen
Ihr könnt jederzeit einen "so far" Punktestand von mir erhalten, indem Ihr mir Eure bisherigen Arbeitsergebnisse zeigt. 

## Tipps für einen schönen Pfad der Erkenntnis  
Um sich die theoretischen Inhalte effizient anzueignen empfehle ich die Nutzung der [Fancy Flashcard App](https://github.com/fancy-flashcard/ffc/blob/master/README.md). Sie können [hier](https://github.com/fancy-flashcard/deck-collection) ihre eigenen Decks erstellen und per Pull Request hinzufügen. Diese können Sie dann mit dem entsprechenden Raw Link ([Beispiel](https://raw.githubusercontent.com/fancy-flashcard/deck-collection/main/wirtschaftsinformatik/Finanzbuchhaltung.json)) in der Fancy Flashcard App importieren. Die Fancy Flashcard App ist dann auch im offline- / Flugzeugmodus nutzbar.  

Um sich die praktischen Inhalte effizient anzueignen empfehle ich "just do it" - soll heißen: ausprobieren, ausprobieren, ausprobieren :)   
Da Deno für viele eine neue RTE / Technologie ist, empfehle ich die folgenden Module zum Einstieg in das Thema auszuprobieren: 

1. https://deno.land/x/distancecalculator  
2. https://deno.land/x/sleep  
3. https://deno.land/x/sort  
4. https://deno.land/x/bloomfilter    
5. https://deno.land/x/merkletrees  
6. https://deno.land/x/tries    
7. https://deno.land/x/airdrop  
8. https://deno.land/x/web3   
9. https://deno.land/x/hash  
10. https://deno.land/x/opine
11. https://deno.land/x/cors      
12. https://deno.land/x/http_to_https  
13. https://deno.land/x/request 
14. https://deno.land/x/injector
15. https://deno.land/x/monitoring
16. https://deno.land/x/persistence
17. https://deno.land/x/nlp  
18. https://deno.land/x/location   
29. https://deno.land/x/cicd  
20. https://deno.land/x/cities  
21. https://deno.land/x/countries  
22. https://deno.land/x/log  
23. https://deno.land/x/deno_moment    
24. https://deno.land/x/vofarm  
25. https://deno.land/x/coprime   

## Recommended IDE
[VS Code Insiders](https://code.visualstudio.com/docs/?dv=osx&build=insiders)

## Eventuell hilfreiche Links
https://www.w3schools.com/  
https://www.typescriptlang.org/  

## Gruppengestaltung
Issue pro Themenvorschlag aufmachen und jeder, der sich für das Thema interessiert soll diesen issue kommentieren.   
Ideale Gruppengröße 3 - 5 Leute  


## Grober Überblick
![Screenshot 2022-02-17 at 16 08 03](https://user-images.githubusercontent.com/43786652/154510190-24fb925c-a8df-4779-a483-451ad28b355d.png)

## Meilensteine der Web Programmierung
### Web 1

Statische HTML Seiten mit Links (Internet der frühen 90iger)
### Web 2
Wie Web 1 nur zusätzlich dynamisch v.A. Javascript 

### Web 3
Wie Web 2 nur zusätzlich dezentral (DAPPs...)

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

### Platform as a Service (PaaS) / Function as a Service (FaaS)  

### Software as a Service (SaaS)


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


## Monitoring
Show Use Cases around https://dydx.exchange/ & https://www.npmjs.com/package/dydx_nodejs_connector + corresponding monitoring.  

