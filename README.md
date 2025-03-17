# Schnitzeljagd-Shop

## Features
### Must:
- **Shop-Bereich**: Verkauf von digitalen Schnitzeljagd-Dateien mit Bezahl- und Download-Funktion.
    - **Produkt-Übersicht**: Detailinformationen zu Produkten. (In Arbeit)
    - **Produktsortierung**: Sortierung von Produkten nach verschiedenen Kriterien. (Fertig)
    - **Sichere Zahlungsabwicklung**: Integration von Zahlungsdiensten. (Nicht begonnen)

- **Admin-Bereich**: Verwaltung von Benutzern, Produkten und Bestellungen.
- **Online-Spiel**: Interaktive Schnitzeljagd-Elemente für Kinder.
- **Produktfilter/Generator**: Filterung von Produkten nach Kategorien, Preisen, etc

### Soll:
- **Kontaktformular**: Kontaktformular für Kunden.
- **Benutzerverwaltung**: Registrierung und Anmeldung für Benutzer.

### Kann:
- **Suchfunktion**: Schnelle Suche nach Produkten.
- **Kundenbewertungen**: Bewertungen und Kommentare von Kunden.

## Pages
- **FAQ**: Häufig gestellte Fragen.
- **Impressum**: Impressum mit wichtigen Informationen.
- **Datenschutz**: Datenschutzinformationen.

## Produkte
- **Deckblatt**
- **Inhaltsangabe**
- **Begrüßungstext (Vorwort)**
- **Materialliste**
- **Einkaufsliste**
- **Einladung**
- **Urkunde**
- **Schatzkarte + Sticker**
- **Ereigniskarten für die Stationen der Schnitzeljagd**
- **Bastelvorlagen**
- **Krone für den Schatzmeister**
- **Fähnchen für die Stationen**
- **Bastelvorlagen für Masken (themenbezogen)**
- **Ausmalkarte für jedes Kind**

- **Ideen für den Inhalt der Schatzkiste**
- **Geschichte für die Schnitzeljagd**
- **Abschlusstext**

## Technologien

### Frontend:
- **React mit Vite**
- **CSS für das Styling**: Simia
- **Farbschema**: https://www.schemecolor.com/retro-poster.php
- **![Farbschema](../pastel-print-2-color-scheme-desktop-wallpaper.png)**

- **Motion UI für Animationen**: Simia
- **JavaScript für die Interaktion**
- **HTML für die Struktur**

### Backend:
- **Node.js mit Express**
- **MongoDB als Datenbank**
- **Mongoose für die Datenbank-Interaktion**
- **Bcrypt für die Passwörter-Verschlüsselung**
- **Authentifizierung mit JWT**

## API Endpunkte
- **GET /api/products**: Liste aller Produkte
  - Beispiel: `GET /api/products`
  - Antwort: `[{ "id": 1, "name": "Produkt 1" }, ...]`
- **GET /api/products/:id**: Einzelnes Produkt
  - Beispiel: `GET /api/products/1`
  - Antwort: `{ "id": 1, "name": "Produkt 1" }`
- **POST /api/products**: Neues Produkt erstellen
  - Beispiel: `POST /api/products` mit Payload `{ "name": "Neues Produkt" }`
  - Antwort: `{ "id": 2, "name": "Neues Produkt" }`
- **PUT /api/products/:id**: Produkt bearbeiten
- **DELETE /api/products/:id**: Produkt löschen
- **GET /api/users**: Liste aller Benutzer
- **GET /api/users/:id**: Einzelner Benutzer
- **POST /api/users**: Neuer Benutzer erstellen
- **PUT /api/users/:id**: Benutzer bearbeiten
- **DELETE /api/users/:id**: Benutzer löschen
- **POST /api/orders**: Neues Bestellungsobjekt erstellen
- **GET /api/orders**: Liste aller Bestellungen
- **GET /api/orders/:id**: Einzelner Bestellungsobjekt
- **PUT /api/orders/:id**: Bestellungsobjekt bearbeiten
- **DELETE /api/orders/:id**: Bestellungsobjekt löschen
- **POST /api/payments**: Neues Zahlungsobjekt erstellen
- **GET /api/payments**: Liste aller Zahlungen
- **GET /api/payments/:id**: Einzelnes Zahlungsobjekt
- **PUT /api/payments/:id**: Zahlungsobjekt bearbeiten
- **DELETE /api/payments/:id**: Zahlungsobjekt löschen
- **POST /api/reviews**: Neues Bewertungsobjekt erstellen
- **GET /api/reviews**: Liste aller Bewertungen
- **GET /api/reviews/:id**: Einzelnes Bewertungsobjekt
- **PUT /api/reviews/:id**: Bewertungsobjekt bearbeiten
- **DELETE /api/reviews/:id**: Bewertungsobjekt löschen

- **POST /api/contacts**: Neues Kontaktformular erstellen
- **GET /api/contacts**: Liste aller Kontaktformulare
- **GET /api/contacts/:id**: Einzelnes Kontaktformular
- **PUT /api/contacts/:id**: Kontaktformular bearbeiten
- **DELETE /api/contacts/:id**: Kontaktformular löschen
- **POST /api/auth/register**: Nutzerregestrierung
- **POST /api/auth/login**: Nutzeranmeldung
- **POST /api/auth/logout**: Nutzerabmeldung
- **GET /api/auth/user**: Aktueller Nutzer
- **PUT /api/auth/user**: Nutzerdaten bearbeiten
- **DELETE /api/auth/user**: Nutzerlöschen
- **POST /api/auth/forgot-password**: Passwort vergessen
- **POST /api/auth/reset-password**: Passwort zurücksetzen
- **POST /api/auth/verify-email**: E-Mail-Adresse bestätigen
- **POST /api/auth/resend-verification-email**: E-Mail-Adresse erneut bestätigen

## Weiterentwicklung
- **Mehrsprachigkeit**: Unterstützung für mehrere Sprachen.
- **Darkmodus**: Möglichkeit, zwischen hellem und dunklem Modus zu wechseln.
- **Newsletter**: Implementierung eines Newsletter-Systems.
- **Social-Media-Integration**: Anbindung an soziale Netzwerke.

## Lizenz
- **MIT-Lizenz**
