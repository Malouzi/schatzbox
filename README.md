# Schnitzeljagd-Shop

## Features
- **Shop-Bereich**: Verkauf von digitalen Schnitzeljagd-Dateien mit Bezahl- und Download-Funktion.
- **Online-Spiel**: Interaktive Schnitzeljagd-Elemente für Kinder.
- **Benutzerverwaltung**: Registrierung und Anmeldung für Benutzer.
- **Admin-Bereich**: Verwaltung von Benutzern, Produkten und Bestellungen.
- **Suchfunktion**: Schnelle Suche nach Produkten.
- **Produkt-Übersicht**: Detailinformationen zu Produkten.
- **Produktfilter**: Filterung von Produkten nach Kategorien, Preisen, etc
- **Produktsortierung**: Sortierung von Produkten nach verschiedenen Kriterien.
- **Kundenbewertungen**: Bewertungen und Kommentare von Kunden.
- **Sichere Zahlungsabwicklung**: Integration von Zahlungsdiensten.
- **Kontaktformular**: Kontaktformular für Kunden.
- **FAQ**: Häufig gestellte Fragen.
- **Impressum**: Impressum mit wichtigen Informationen.
- **Datenschutz**: Datenschutzinformationen.

## Technologien

### Frontend:
- **React mit Vite**
- **CSS für das Styling**
- **JavaScript für die Interaktion**
- **HTML für die Struktur**

### Backend:
- **Node.js mit Express**
- **MongoDB als Datenbank**
- **Mongoose für die Datenbank-Interaktion**
- **Bcrypt für die Passwörter-Verschlüsselung**
- **Authentifizierung mit JWT**

## API Entpunkte
- **GET /api/products**: Liste aller Produkte
- **GET /api/products/:id**: Einzelnes Produkt
- **POST /api/products**: Neues Produkt erstellen
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





