# 6. Literals

A l'hora de tractar amb valors dels tipus de dades simples (i de tipus Strings) s'utilitza el que es denomina “literals”. Els literals són elements que serveixen per a representar un valor en el codi font del programa. A Java existeixen literals per als següents tipus de dades:

- Lògics (boolean)
- Caràcter (char)
- Enters(byte,short, int i long)
- Reals (double i float)
- Cadenes de caràcters (String)

## 6.1. Literals lògics

Són únicament dos, les paraules reservades true i false. Exemple: `boolean activat = false;`

## 6.2. Literals enters

Els literals de tipus enters (nombres enters): byte, short, int i long poden expressar-se en decimal (base 10), octal (base 8) o hexadecimal (base 16). A més, pot afegir-se al final del mateix la lletra L per a indicar que l'enter és considerat com long (64bits).  
En Java, el compilador identifica un enter decimal (base 10) en trobar un número el primer dígit del qual és qualsevol símbol decimal excepte el zero (de l'1 al 9). A continuació poden aparéixer dígits del 0 al 9.  
La lletra L al final d'un literal de tipus sencer pot aplicar-se a qualsevol sistema de numeració i indica que el nombre decimal siga tractat com un enter llarg (de 64 bits). Aquesta lletra L pot ser majúscula o minúscula, encara que és aconsellable utilitzar la majúscula ja que en cas contrari pot confondre's amb el dígit un (1) en els llistats.

::: details ***Exemple:***

```java
long max1 = 9223372036854775807L; //aquest és el valor màxim per a un enter llarg
```

:::

## 6.3. Literals reals

Els literals de tipus real serveixen per a indicar valors float o double. A diferència dels literals de tipus sencer, **no poden expressar-se en octal o hexadecimal**.  
Existeixen dos formats de representació: mitjançant la seua part sencera, el punt decimal ( . ) i la part fraccionària; o mitjançant notació exponencial o científica:

::: details ***Exemples equivalents:***

```
3.1415
0.31415e1
.31415e1 0.031415E+2
.031415e2 314.15e-2
31415E-4
```

:::

Igual que els literals que representen sencers, es pot posar una lletra com a sufix. Aquesta lletra pot ser una F o una D (majúscula o minúscula indistintament).

- F --> Tracta el literal com de tipus float.
- D --> Tracta el literal com de tipus double.

::: details ***Exemple:***

```
3.1415F
.031415d
```

:::

## 6.4. Literals caràcter

Els literals de tipus caràcter es representen sempre entre cometes simples. Entre les cometes simples pot aparéixer:

- Un **símbol** (lletra) sempre que el caràcter estiga associat a un codi Unicode. Exemples: ‘a’ , ‘B’ , ‘{‘ , ‘ñ’ , ‘á’ .
- Una “**seqüència de fuita**”. Les seqüències de fuita són combinacions del símbol
contrabarra \ seguit d'una lletra, i serveixen per a representar caràcters que no tenen una
equivalència en forma de símbol. Les possibles seqüències de fuita són:

```
\n // Nova Línia
\t // Tabulador
\r // Reculada de Carro
\f // Començament de Pàgina
\b // Esborrat a l'Esquerra
\\ // El caràcter barra inversa ( \ )
\' // El caràcter preval simple ( ' )
\" // El caràcter preval doble o bi-prima ( " )
```

Per exemple:

- Per a imprimir una diagonal inversa s'utilitza: \\
- Per a imprimir cometes dobles en un String s'utilitza: \"

## 6.5. Literals cadenes (String)

Els Strings o cadenes de caràcters no formen part dels tipus de dades elementals a Java, sinó que són instanciats a partir de la classe java.lang.String, però accepten la seua inicialització a partir de literals d'aquest tipus, per la qual cosa es tracten en aquest punt.

Un literal de tipus String va tancat entre cometes dobles ( “ ) i ha d'estar inclòs completament en una sola línia del programa font (no pot dividir-se en diverses línies).

Entre les cometes dobles pot incloure's qualsevol caràcter del codi Unicode (o el seu codi precedit del caràcter \ ) a més de les seqüències de fuita vistes anteriorment en els literals de tipus caràcter.

Així, per exemple, per a incloure un canvi de línia dins d'un literal de tipus string haurà de fer-se mitjançant la seqüència de fuita \n:

::: details ***Exemples equivalents:***

```java
System.out.println(”Primera línia\nSegona línia del string\n”); 
System.out.println(”Hola”);
```

La visualització del string anterior mitjançant println() produiria la següent eixida per pantalla:

```java
Primera línia
Segona línia del string

Hola
```

:::

La manera d'incloure els caràcters cometes dobles ( “ ) i contrabarra ( \ ) és mitjançant les seqüències de fuita \” i \\ respectivament (o mitjançant el seu codi Unicode precedit de \ ).

Si el String és massa llarg i ha de dividir-se en diverses línies en el fitxer font, pot utilitzar-se l'operador de concatenació de Strings (+) de la següent forma:

”Aquest String és massa llarg per a estar en una línia del ” + ”fitxer font i s'ha dividit en dues.”
