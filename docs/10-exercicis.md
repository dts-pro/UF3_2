# Exercicis - Nivell bàsic

1. Escriu un programa que done els “bon dia”.
2. Escriu un programa que calcule i mostre l'àrea d'un quadrat de costat igual a 5.
3. Escriu un programa que calcule l'àrea d'un quadrat el costat del qual s'introdueix per teclat.
4. Escriu un programa que llija dos números, calcule i mostre el valor de les seues suma, resta,
producte i divisió.
5. Escriu un programa que pren com a dada d'entrada un número que correspon a la longitud
d'un radi i ens escriu la longitud de la circumferència, l'àrea del cercle i el volum de l'esfera que
corresponen amb aquest ràdio.
6. Escriu un programa que donat el preu d'un article i el preu de venda real ens mostre el
percentatge de descompte realitzat.
7. Escriu un programa que llija un valor corresponent a una distància en milles marines i escriga la
distància en metres. Sabent que una milla marina equival a 1.852 metres.
8. Escriu un programa que demana l'edat per teclat i ens mostra el missatge de “Eres major
d'edat” sol si ho som.
9. Escriu un programa que demana l'edat per teclat i ens mostra el missatge de “eres major
d'edat” o el missatge de “eres menor d'edat”.

# Exercicis - Nivell mitjà

10. Escriu un programa que llig dos números, calcula i mostra el valor de la seua suma, resta, producte i divisió. (Ten en compte la divisió per zero).
11. Escriu un programa que llig 2 números i mostra el major.
12. Escriu un programa que llig un número i em diu si és positiu o negatiu, considerarem el zero com a positiu.
13. Escriu un programa que llig dos números i els visualitza en ordre ascendent.
14. Escriu un programa que llig dos números i ens diu quin és el major o si són iguals.
15. Escriu un programa que llija tres números diferents i ens diga quin és el major.

# Exercicis - Nivell avançat

16. Escriu un programa que llija una qualificació numèrica entre 0 i 10 i la transforma en qualificació alfabètica, escrivint el resultat.

- de 0 a 2 Molt Deficient.
- de 3 a 4 Insuficient.
- de 5 a 6 Bé.
- de 7 a 8 Notable
- de 9 a 10 Excel·lent


17.  Escriu un programa que rep com a dades d'entrada una hora expressada en hores, minuts i segons que ens calcula i escriu l'hora, minuts i segons que seran, transcorregut un segon.
18.  Escriu un programa que calcula el salari net setmanal d'un treballador en funció del nombre d'hores treballades i la taxa d'impostos d'acord amb les següents hipòtesis:

- Les primeres 35 hores es paguen a tarifa normal.
- Les hores que passen de 35 es paguen a 1,5 vegades la tarifa normal.
- Les taxes d'impostos són:
  - Els primers 500 euros són lliures d'impostos.
  - Els següents 400 tenen un 25% d'impostos.
  - Els restants un 45% d'impostos.

Escriure nom, salari brut, taxes i salari net.

# Exercicis d'ampliació

19. Una botiga ven banderes personalitzades de la màxima qualitat i ens ha demanat fer un configurador que calcule el preu segons alt i ample. El preu base d'una bandera és d’un cèntim d’euro el centímetre quadrat. Si la volem amb un escut brodat, el preu s'incrementa en 2,50 € independentment de l'escut. Les despeses d'enviament són 3,25€. L'IVA ja està inclòs a totes les tarifes.

**Exemple**:

```plaintext
Introduïu l'alçada de la bandera en cm: 20
Ara introduïu l'amplada: 35  
Vol escut brodat? (s/n): n  
Gràcies. Aquí teniu el desglossament de la vostra compra.  
Bandera de 700 cm2: 7,00 €  
Sense escut: 0,00 €  
Despeses d'enviament: 3,25 €  
Total: 10,25 €  
```

20. Una pastisseria ens ha demanat fer un programa que faça pressupostos de pastissos. El programa preguntarà primer de quin sabor vol l'usuari el pastís: poma, maduixa o xocolata. El pastís de poma val 18 euros i el de maduixa 16. En cas de seleccionar el pastís de xocolata, el programa ha de preguntar a més si la xocolata és negra o blanca; la primera opció val 14 euros i la segona 15. Finalment, es pregunta si s'hi afegeix nata i si es personalitza amb un nom; la nata suma 2,50 i l'escriptura del nom 2,75.

**Exemple**: 

```plaintext
Trieu un sabor (poma, maduixa o xocolata): xocolata
Quin tipus de xocolata voleu? (negre o blanc): negre
Vol nata? (si o no): si
Voleu posar-hi un nom? (si o no): no
Pastís de xocolata negra: 14,00 €
Amb nata: 2,50 €
Total: 16,50 €
```

21. Implementa el joc pedra, paper y tisora. Primer, l’usuari 1 introdueix la seua jugada y després l’usuari 2.

**Exemple 1**:

```plaintext
Torn del jugador 1 (introdueix pedra, paper o tisora): paper
Torn del jugador 2 (introdueix pedra, paper o tisora): paper
Empat
```

**Exemple 2**:

```plaintext
Torn del jugador 1 (introdueix pedra, paper o tisora): paper
Torn del jugador 2 (introdueix pedra, paper o tisora): tisora
Guanya el jugador 2
```

**Exemple 3**:

```plaintext
Torn del jugador 1 (introdueix pedra, paper o tisora): pedra
Torn del jugador 2 (introdueix pedra, paper o tisora): tisora
Guanya el jugador 1
```