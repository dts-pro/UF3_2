# 1. Introducció

**Java** és un llenguatge de programació de propòsit **general, concurrent i orientat a objectes** que va ser dissenyat específicament per a tindre tan poques dependències d'implementació com fora possible. El seu objectiu és permetre que els desenvolupadors d'aplicacions escriguen el programa una vegada i l'executen en qualsevol dispositiu (conegut en anglés com WORA, o "write once, run anywhere"), la qual cosa vol dir que **el codi pot escriure's una sola vegada i ser executat en qualsevol mena de dispositius (PC, mòbil, etc.)**.

Algunes de les característiques més importants de Java són:

- **Senzill**: És un llenguatge senzill d'aprendre.
- **Orientat a Objectes**: Possiblement és el llenguatge més orientat a objectes de tots els existents; a Java, a excepció dels tipus fonamentals de variables (int, char, long…), tot és un objecte.
- **Distribuït**: Java està molt orientat al treball en xarxa, suportant protocols com TCP/IP, UDP, HTTP i FTP. D'altra banda l'ús d'aquests protocols és bastant senzill comparant-lo amb altres llenguatges que els suporten.
- **Robust**: El compilador Java detecta molts errors que altres compiladors només detectarien en temps d'execució o fins i tot mai.
- **Assegurança**: Sobretot un tipus de desenvolupament: els Miniaplicació. Aquests són programes dissenyats per a ser executats en una pàgina web.
- **Portable**: A Java no hi ha aspectes dependents de la implementació, totes les implementacions de Java segueixen els mateixos estàndards quant a grandària i emmagatzematge de les dades.
- **Arquitectura Neutral**: El codi generat pel compilador Java és independent del'arquitectura: podria executar-se en un entorn UNIX, Mac, Windows, Mòbil, etc.
- **Rendiment mitjà**: Actualment la velocitat de processament del codi Java és semblant a la d'altres llenguatges orientats a objectes.
- **Multithread**: Suporta de manera nativa els threads (fils d'execució), sense necessitat de l'ús de de llibreries específiques.

## 1.1. Primer exemple

L'aplicació més xicoteta possible és la que simplement imprimeix un missatge en la pantalla. Tradicionalment, el missatge sol ser "Hola Mundo!". Això és justament el que fa el següent fragment de codi:

::: tabs
== Java
```java
public class HolaMon{
    public static void main(String[] args){
        System.out.printin("Hola món!");
    }
}
```

:::

Cal veure detalladament l'aplicació anterior, línia a línia. Aqueixes línies de codi contenen els components mínims per a imprimir *Hola Món!* en la pantalla. És un exemple molt simple, que no instància objectes de cap altra classe; no obstant això, accedeix a una altra classe inclosa en el JDK.

::: tabs
== Java

```java
public class HolaMon
```

:::

Aquesta línia declara la classe HolaMundo. El nom de la classe especificat en el fitxer font s'utilitza per a crear un fitxer nombredeclase.class en el directori en el qual es compila l'aplicació. En aquest cas, el compilador crearà un fitxer anomenat HolaMundo.class.

::: tabs
== Java

```java
public static void main(String[] args)
```

:::

Aquesta línia especifica un mètode que l'intèrpret Java busca per a executar en primer lloc. Igual que en altres llenguatges, Java utilitza una paraula clau main per a especificar la primera funció a executar. En aquest exemple tan simple no es passen arguments.

- **public** significa que el mètode main() pot ser cridat per qualsevol, incloent l'intèrpret Java.
- **static** és una paraula clau que li diu al compilador que main es refereix a la pròpia classe HolaMundo i no a cap instància de la classe. D'aquesta manera, si algú intenta fer una altra instància de la classe, el mètode main() no s'instanciaria.
- **void** indica que main() no retorna res. Això és important ja que Java realitza una estricta comprovació de tipus, incloent els tipus que s'ha declarat que retornen els mètodes.
- **args[]** és la declaració d'un array de Strings. Aquests són els arguments escrits després del nom de la classe en la línia de comandos: java HolaMundo arg1 arg2.

::: tabs
== Java

```java
System.out.println("Hola Món!");
```

:::

Aquesta és la funcionalitat de l'aplicació. Aquesta línia mostra l'ús d'un nom de classe i mètode. S'usa el **mètode println()** de la **classe out** que està en el **paquet System**. El mètode println() agafa una cadena com a argument i l'escriu en el stream d'eixida estàndard; en aquest cas, la finestra on es llança l'aplicació. La classe PrintStream té un mètode instanciable anomenat println(), que el que fa és presentar en l'eixida estàndard del Sistema l'argument que se li passe. En aquest cas, s'utilitza la variable o instància d'out per a accedir al mètode.

::: tip **IMPORTANT!**

Totes les instruccions (creació de variables, anomenades a mètodes,assignacions) s'han de finalitzar amb un **punt i coma**.

:::