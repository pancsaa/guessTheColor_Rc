kód amivel létrehozzuk az alapot: "npm create vite@latest . -- --template react-ts"

## SZÍNKERESŐ JÁTÉK
# Induláskor (betöltés) megjelenik:
-   cím
-   kód
-   kattintás-szám
-   gratuláció lehetősége
-   Külön szekcióban grid-négyzetek (64db)
-   szekció alatt: "újrakezdés-gomb"

# Működés:
- betöltés: 
    - guessed color("rgb()") - (szín amelyiket ki kell találnia)
    - random color - négyzetek amelykben a random színeket megjelenítjük(lehetőségek)
- Kattintás a négyzeteken:
    - keret a kattintottra
    - színkód kivétele
    - szín kód összehasonlítása a keresett színkóddal
    - game-status beállítása
    - kattintás növelése (ha még nem volt rá kattintva)
    - kitalálták -> piros keret, inaktivitás
- Gombra kattintás:
    - számláló nullázása
    - új színek
    - új kód
    - játékállapot beállítása
    - keretek levétele

# Állapotok:
- Négyzetek állapota:
    - id
    - háttérszín
    - isClicked
    - isFound
    - sorszám
- Globális állapotok:
  - kattintás szám
  - game-status
  - kitalálandó szín