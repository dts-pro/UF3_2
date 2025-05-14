# 4. Declaració de variables

La forma bàsica de declarar (crear) una variable és la següent:

```java
tipus identificador;
```

Per exemple, creem una variable de tipus int anomenada edat:

```java
int edat;
```

Les variables poden ser inicialitzades en el moment de la seua declaració, és a dir, se'ls pot donar un valor inicial en crear-les. Per exemple, creem una variable de tipus int anomenada edat i li assignem 25 com a valor inicial:

```java
int edat = 25;
```

Això és equivalent a primer declarar-la i després assignar-li el valor:

```java
int edat; 
edat = 25;
```

També és possible declarar diverses variables en una sola línia. Per exemple, creem tres variables de tipus float anomenades precio1, precio2 i precio3:

```java
float preu1, preu2, preu3;
```

Això és equivalent a:

```java
float preu1; 
float preu2; 
float preu3;
```

Al seu torn, també poden inicialitzar-se. Per exemple:

```java
float preu1 = 7.0, preu2 = 7.25, preu3 = 0.5;
```

Això és equivalent a:

```java
float preu1 = 7.0; 
float preu2 = 7.25; 
float preu3 = 0.5;
```

En resum la declaració de variables segueix el següent patró:

| **tipus identificador** [ = valor][,identificador [= valor] ...]; |
|---------------------------------------------------------------|

És a dir, és **obligatori indicar el tipus i l'identificador** (a més d'acabar en punt i coma com totes les instruccions). Opcionalment (indicat entre claudàtors) es pot inicialitzar i/o es poden declarar més variables.

**IMPORTANT**: Si una variable no ha sigut inicialitzada, Java li assigna un valor per defecte.

Aquest valor és:

- Per a les variables de tipus numèric, el valor per defecte és zero ( 0 ),.
- Les variables de tipus char, el valor ‘\u0000’.
- Les variables de tipus booleà, el valor false.
- Per a les variables de tipus referencial (objectes), el valor null.

Es una bona pràctica inicialitzar sempre totes les variables.

## 4.1. Paraules clau

Les següents són paraules clau que no es poden utilitzar com a identificadors ja que Java les utilitza per a altres coses:

![Paraules clau](../UD3/img/paraules_clau_java.jpg)

## 4.2. Paraules reservades

A més, el llenguatge es reserva unes quantes paraules més, però que fins ara no tenen una finalitat especificada. Són:

![Paraules reservades](../UD3/img/paraules_reserv_java.jpg)

## 4.3. Àmbit d'una variable

L'àmbit d'una variable és la porció del programa on aquesta variable pot utilitzar-se, i pot pertànyer a quatre categories:

1. Variable local.
2. Atribut.
3. Paràmetre d'un mètode.
4. Paràmetre d'un tractador d'excepcions.

**Ara com ara utilitzarem només variables locals**, les altres categories les veurem
en posteriors unitats.

### 4.3.1. Variables locals

Una **variable local** es declara dins del cos d'un mètode d'una classe i és **visible únicament dins d’aquest mètode**.

Es pot declarar en qualsevol lloc del cos, fins i tot després d'instruccions executables, encara que és un **bon costum declarar-les just al principi**.

També poden declarar-se variables dins d'un bloc amb claus {...}. En aqueix cas, només seran “visibles” dins d'aquest bloc.

**Per exemple** (no és necessari entendre el que fa el programa):

```java
public static void main(String[] args){
  int i;
  for (i=0;i<10;i++)
    System.out.println(i);
}
```

En aquest exemple existeix una variable local: int i; únicament pot utilitzar-se dins del bloc main on es va crear.

## 4.4. Constants (final)

En declarar una variable pot utilitzar-se la paraula reservada **final** per a indicar que el valor de la variable no podrá modificar-se (és una constant).

Per exemple, creem variable constant tipus int anomenada x amb valor 18:

```java
final int x = 18;
```

Per exemple, creem variable constant tipus float anomenada pi amb valor 3.14:

```java
final float pi = 3.14;
```

Si posteriorment intentem modificar els seus valors es produirà un error i Java ens avisarà que no és possible.

```java
x = 20; // no permés, produeix error
pi = 7; // no permés, produeix error
```

Per tant una variable precedida de la paraula **final** es converteix en una **constant**. O cosa que és el mateix, per a definir una constant a Java haurem de precedir la seua declaració de la paraula reservada **final**.
