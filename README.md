# Hey!

## Setup
Użyłem CRA z templatem typescripta, od siebie dodałem:
- redux, redux-toolkit, redux-persist: Głównie do łatwego cache'owania danych w local storage
- react-query: Szybkie, łatwe fetchowanie danych
- sass: Głównie żeby pokazać jak podszedłbym do struktury css w większym projekcie
- @material-ui: Do 3 buttonów, troche overkill :D
- playwright: Testy e2e (pisane na kolanie, testowałem tylko na chromium)

## Na co (nie) starczyło czasu
- Testy (przetestowalem tylko generowanie dat bo był to najbardziej skomplikowany util), nie starczyło czasu na testy reduxa, testy e2e na firefoxie, webKicie, symulowanie telefonów
- cleaup: W kodzie jest dużo zaimportowanych i nieużywanych modułów
- UI: Brzydkie jak noc, ale za to responsywne :) Niektóre zdjęcia mają niestandardową rozdzielczość i przez `background-size: cover` czasami są ucinane. Najłatwiej zfixować to przez użycie img zamiast diva z `background-size` i przerzucenie tekstu obok zdjęcia.