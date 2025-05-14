# 8. Estructures alternatives

Com ja vam veure, lEs estructures alternatives són construccions que permeten alterar el flux seqüencial d'un programa de manera que en funció d'una condició o el valor d'una expressió, el mateix puga ser desviat en l'una o l'altra alternativa de codi. Les estructures alternatives disponibles a Java són:

- Alternativa Simple (if)
- Alternativa Doble (if-else)
- Alternativa Múltiple (switch)

## 8.1. Estructura alternativa simple (if)

L'alternativa simple es codifica de la següent forma:

|Codi|Ordinograma|
|----|-----------|
|**if (condició){ <br> //Accions <br>}** <br> El bloc d'Accions s'executa si la condició s'avalua a true (és vertadera). <br> **if (cont == 0){ <br> System.out.println(“cont és 0”); <br> //més instruccions... <br> }** <br> Si dins del if només hi ha una instrucció, no és necessari posar les claus. <br> **if (cont == 0) System.out.println(“cont és 0”);** | ![Estructura if](../UD3/img/estructura_if.jpg) |

## 8.2. Estructura alternativa Doble (if-else)

L'alternativa doble permet indicar quin codi executar si la condició és falsa.

|Codi|Ordinograma|
|----|-----------|
|**if (condició){ <br> //AccionsSI <br>} else{ <br> // AccionsNO <br> }** <br> El bloc AccionsSI s'executa si la condició s'avalua a true (vertadera). En cas contrari, s'executa el bloc de AccionsNO. <br> **if (cont == 0){ <br> System.out.println(“cont és 0”); <br> // més instruccions... <br> } else { <br> System.out.println("cont no és 0"); <br> //més instruccions... <br>}** <br> Si dins del if només hi ha una instrucció, no és necessari posar les claus. <br> **if (cont == 0) System.out.println(“cont és 0”); <br> else <br> System.out.println(“cont no és 0”);** | ![Estructura if](../UD3/img/estructura_if_else.jpg) |

**IMPORTANT**: Recordeu que l'operador relacional per a comprovar si són iguals és ==, no un sol = que correspon amb l'operador d'assignació. Aquest error no el detecta el compilador i és difícil d'esbrinar.

En moltes ocasions, es lliguen estructures alternatives if-else, de manera que es pregunte per una condició si anteriorment no s'ha complit una altra successivament.  

>**Exemple:**  
>Per exemple, suposem que realitzem un programa que mostra la nota d'un alumne en la forma (insuficient, suficient, bé, notable o excel·lent) en funció de la seua nota numèrica. Podria codificar-se de la següent forma:
>
>```java
>import java.util.Scanner;
>
>public class Nota{
>
>   public static void main(String[] args){
>
>     Scanner entrada = new Scanner (System.in);
>     int nota;
>     //Suposem que l'usuari introdueix el número correctament
>     //No fem comprovacions
>     System.out.println ("Dona'm un número entre 0 i 10");
>     nota = entrada.nextInt();
>
>     if (nota < 5) {
>       System.out.println ("Insuficient");
>     } else if (nota < 6) {
>       System.out.println ("Suficient");
>     } else if (nota < 7) {
>       System.out.println ("Bé");
>     } else if (nota < 9) {
>       System.out.println ("INotable");
>     } else {
>       System.out.println ("Excel·lent");
>     }
>  }
>}
>
>```
>
>I l'eixida és:
>
>```
>Dona'm un número entre 0 i 10
>8
>Notable
>```

És molt recomanable usar la tecla tabulador en les instruccions de cada bloc. Com es pot veure en l'exemple, cada **else** està alineat amb el seu **if** associat, d'aquesta manera és més fàcil llegir el codi.

## 8.3. Estructura Alternativa Múltiple (switch)

|Codi|Ordinograma|
|----|-----------|
|**switch (expressió) {<br> case Valor1: <br> //Accions1; break; <br> case Valor2: <br> //Accions2; break; <br> case ValorN: <br> //AccionsN; break; <br> default: <br> //Accions per defecte; <br>}**  | ![Estructura switch](../UD3/img/estructura_switch.jpg) |

És molt important entendre que en el switch s'avalua una expressió (un valor concret com 0, 5, 1…) no una condició (vertadera o falsa) com en el if i el if-else.  
El programa comprova el valor de l'expressió i saltarà al ‘case’ que corresponga amb aquest valor (valor1 o valor2 o …) executant el codi de dita ‘case’ (Accions1 o Accions2 o …). Si no coincideix cap valor, saltarà al ‘default’ i executarà les accions per defecte.  
És important afegir la sentència break; al final de cada ‘case’, ja que en cas contrari el programa continuarà executant el codi de les altres accions i normalment no voldrem que faça això (encara que Java permet fer-ho, és confús i per això està desaconsellat).

>**Exemple de l'estructura switch en codi:**  
>
>```java
>import java.util.Scanner;
>
>public class Alternativa_Multiple{
>
>   public static void main(String[] args){
>
>     Scanner entrada = new Scanner (System.in);
>     int dia;
>
>     System.out.println ("Dona'm un número entre 1 i 7");
>     dia = entrada.nextInt();
>
>     switch (nota) {
>       case 1:
>         System.out.println ("Dilluns");
>       case 2: 
>         System.out.println ("Dimarts");
>       case 3:
>         System.out.println ("Dimecres");
>       case 4:
>         System.out.println ("Dijous");
>       case 5: 
>         System.out.println ("Divendres");
>       case 6:
>         System.out.println ("Dissabte");
>       case 7:
>         System.out.println ("Diumenge");
>       default:
>         System.out.println("Error, el número ha d'estar entre 1 i 7");
>     }
>  }
>}
>```
>
>I l'eixida és:
>
>```
>Dona'm un número entre 1 i 7
>4
>Dijous
>```
