# 7. Eixida i entrada estàndard

## 7.1. Eixida estàndard

Ja hem vist l'ús de System.out per a mostrar informació per pantalla:

- print(“...”) imprimeix text per pantalla
- println(“...”) imprimeix text per pantalla i introdueix un salt de línia.

La utilització de System.err seria totalment anàloga per a enviar els missatges produïts per errors en l'execució (és el canal que usa també el compilador per a notificar els errors trobats).  
>**Per exemple**, per a presentar el missatge de salutació habitual per pantalla, i després un missatge d'error, tindríem la següent classe (encara que en realitat tota la >informació va a la consola de comandos on estem executant el programa):
>
>```java
>public static void main(String[] args){
>
>   System.out.print(”HOLA ”); 
>   System.out.println(”mundo”);
>   System.err.println(”Mensaje de error”);
>}
>```
>
>I l'eixida seria la següent:
>```
>HOLA mundo  
>Mensaje de error
>```

També poden imprimir-se variables de qualsevol tipus, així com combinacions de text i variables concatenades amb l'operador +:

>***Per exemple:***
>```java
>public static void main(String[] args){
>   String nombre = 'Pepito';
>   int edad = 25;
>   System.out.println(nombre);
>   System.out.println(edad);
>   System.out.println(nombre + " tiene " + edad " años");
>}
>```
>
>I l'eixida seria la següent:
>```
>Pepito
>25
>Pepito tiene 25 años
>```

## 7.2. Entrada estàndard

L'entrada estàndard (llegir informació del teclat, escrita per l'usuari) és una mica més complexa. Hi ha diverses maneres de fer-ho però la més senzilla és utilitzar la classe Scanner.  
Sempre que vulguem llegir informació del teclat primer haurem de declarar un
objecte Scanner que llija de l'entrada estandar System.in així:  

```java
Scanner reader = new Scanner(System.in);
```

NOTA: En aquest exemple hem creat un objecte Scanner anomenat reader però podríem posar-li qualsevol nom. Ara podrem utilitzar reader tantes vegades com vulguem per a llegir informació del teclat. Per exemple:

```java
String texto = reader.nextLine();
```

El mètode reader.**nextLine()** recollirà el text que l'usuari escriga per teclat (fins a pressionar la tecla Intro) i ho guardarà en text (de tipus String). Existeixen molt altres mètodes segons la mena de dada que es vulga llegir:

- **nextByte():** obté un nombre enter tipus byte.
- **nextShort()**: obté un nombre enter tipus short.
- **nextInt()**: obté un nombre enter tipus int.
- **nextLong()**: obté un nombre enter tipus long.
- **nextFloat()**: obté un nombre real float.
- **nextDouble()**: obté un nombre real double.
- **next()**: obté el següent token (text fins a un espai).

No existeixen mètodes de la classe Scanner per a obtindre directament booleans ni per a obtindre un sol caràcter.

**IMPORTANT!**: Per a poder utilitzar la classe Scanner és necessari importar-la des del paquet ***java.util*** de Java. És a dir, a dalt del tot (abans del public class…) cal escriure la següent sentència:

```java
import java.util.Scanner;
```

>***Exemple:*** llegim una cadena de text i la mostrem per pantalla:
>
>```java
>import java.util.Scanner;
>
>public class EjemploScanner{
>
>   public static void main(String[] args){
>     String nombre;
>     Scanner entrada = new Scanner (System.in);
>     System.out.println ("Introdueix el teu nom: ");
>     nombre = entrada.nextLine();
>     System.out.println ("Hola " + nombre);
>   }
>}
>```
>
>I l'eixida és;
>
>```
>Introdueix el teu nom: Pepito
>Hola Pepito
>```

Exemple en el qual llegim un valor tipus double. El programa demana a l'usuari que introduïsca el radi d'un cercle, després calcula la seua àrea i circumferència, finalment el mostra per pantalla.

>***Exemple:*** llegim un valor de tipus double:
>```java
>import java.util.Scanner;
>
>public class EjemploScanner{
>
>   public static void main(String[] args){
>     double radio, area, circumferencia;
>     Scanner entrada = new Scanner (System.in);
>     System.out.println ("Introdueix el radi: ");
>     radi = entrada.nextDouble();
>     area U math.PI * Math.pow(radio, 2);
>     circumferencia = 2 * Math.PI * radio;
>     System.out.println ("L'àrea és " + area);
>     System.out.println ("La circumferència es " + circumferencia);
>   }
>}
>```
>
>I l'eixida és;
>
>```
>Introdueix el radi: 2,9
>L'àrea és 26.42079421669016
>La circumferència és: 18.2212373908208
>```
