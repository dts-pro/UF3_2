# 5. Operadors

Els **operadors** són una part indispensable de la programació ja que ens permeten realitzar càlculs matemàtics i lògics, entre altres coses. Els operadors poden ser:

- **<u>Aritmètics</u>**: sumes, restes, etc.
- **<u>Relacionals</u>**: menor, menor o igual, major, major o igual, etc.
- **<u>Lògics</u>**: and, or, not, etc.
- **<u>Bits</u>**: pràcticament no els utilitzarem en aquest curs.
- **<u>Asignació</u>**: =

## 5.1. Aritmètics

| Operador     | Format               | Descripció                                                |
|--------------|----------------------|-----------------------------------------------------------|
| +        | op1 + op2            | Suma aritmètica de dos operands.                          |
| -        | op1 - op2  <br> -op1 | Resta aritmètica de dos operands. <br> Canvi de signe     |
| *       | op1 * op2            | Multiplicació de dos operands.                            |
| /        | op1 / op2            | Divisió sencera de dos operands.                          |
| %        | op1 % op2            | Resta de la divisió sencera (o mòdul).                    |
| ++       | ++op1   <br>  op1++  | Increment unitari.                                        |
| --       | --op1   <br>  op1--  | Decrement unitari.                                        |

L'operador - pot utilitzar-se en la seua versió unària ( - op1 ) i l'operació que realitza és la d'invertir el signe de l'operand.  
Els operadors **++** i **--** realitzen un increment i un decrement unitari respectivament. És a dir:

- **x++** equival a **x = x + 1**
- **x--** equival a **x = x - 1**

Els operadors ++ i -- admeten notació postfixa i prefixa:

- **op1++**: Primer s'executa la instrucció en la qual està immers i després s'incrementa
op1.
- **op1--**: Primer s'executa la instrucció en la qual està immers i després es decrementa
op1.
- **++op1**: Primer s'increment a op1 i després executa la instrucció en la qual està immers.
- **--op1**: Primer se decrementa op1 i després executa la instrucció en la qual està
immers.

Els operadors incrementals solen utilitzar-se sovint en els bucles (estructures
repetitives). Ho veurem més endavant.

## 5.2. Relacionals

| Operador | Format       | Descripció                                                  |
|----------|--------------|-------------------------------------------------------------|
| >        | op1 > op2    | Retorna true (cert) si op1 és major que op2                  |
| <        | op1 < op2    | Retorna true (cert) si op1 és menor que op2                  |
| >=       | op1 >= op2   | Retorna true (cert) si op1 és major o igual que op2          |
| <=       | op1 <= op2   | Retorna true (cert) si op1 és menor o igual que op2          |
| ==       | op1 == op2   | Retorna true (cert) si op1 és igual a op2                    |
| !=       | op1 != op2   | Retorna true (cert) si op1 és diferent de op2                |

Els operadors relacionals actuen sobre valors sencers, reals i caràcters (char); i retornen un valor del tipus booleà (true o false).

>***Per exemple:***
>:::: tabs
>=== Java
>
>::: tabs
>== Codi
>
>```java
>public static void main(String[] args){
>   double op1, op2;
>   char op3, op4;
> 
>   op1 = 1.34;
>   op2 = 1.35;
>   op3 = 'a';
>   op4 = 'b';
>
>   System.out.println("op1=" + op1 + "op2=" + op2);
>   System.out.println("op1>op2 = " + (op1 > op2));
>   System.out.println("op1<op2 = " + (op1 < op2));
>   System.out.println("op1==op2 = " + (op1 == op2));
>   System.out.println("op1!=op2 = " + (op1 != op2));
>   System.out.println("'a' > 'b' = " + (op3 > op4));
>}
>```
>
>== Eixida
>```
>
>op1=1.34 op2=1.35
>op1>op2 = false
>op1<op2 = true
>op1==op2 = false
>op1!=op2 = true
>'a' > 'b' = false
>```
>
>:::
>::::

## 5.3. Lògics

| Operador | Format       | Descripció                                                   |
|----------|--------------|--------------------------------------------------------------|
| &&       | op1 && op2   | I lògic (and). Retorna true (cert) si són certs op1 i op2    |
| \|\|     | op1 \|\| op2 | O lògic (or). Retorna true (cert) si són certs op1 o op2     |
| !        | !op1         | Negació lògica (not). Retorna true (cert) si op1 és fals     |

Aquests operadors actuen sobre operadors o expressions lògiques, és a dir, aquells que s'avaluen a cert o fals (true / false).

>***Per exemple:***
>:::: tabs
>=== Java
>
>::: tabs
>== Codi
>
>```java
>public static void main(String[] args){
>   
>   boolean a, b, c, d;
>
>   a=true;
>   b=true;
>   c=false;
>   d=false;
>
>   System.out.println("true Y true = " + (a && b));
>   System.out.println("true Y false = " + (a && c));
>   System.out.println("false Y false = " + (c && d));
>   System.out.println("true O true = " + (a || b));
>   System.out.println("true O false = " + (a || c));
>   System.out.println("false O false = " + (c || d));
>   System.out.println("NO true = " + !a);
>   System.out.println("NO false = " + !c);
>   System.out.println("(3 > 4) Y true = " + (3 > 4) && a);
>}
>```
>
>== Eixida
>
>```
>
>true Y true = true
>true Y false = false
>false Y false = false
>true O false = true
>false O false = false
>NO true = false
>NO false = true
>(3 > 4) Y true = false
>
>```
>
>:::
>::::

## 5.4. D'assignació

L'operador d'assignació és el símbol igual: =

Segueix l'esquema **variable = expressió**

Assigna a la variable el resultat d'avaluar l'expressió de la dreta. És possible combinar l'operador d'assignació amb altres operadors per a, de forma abreujada, realitzar un càlcul i assignar-lo a una variable:

| Operador | Format       | Equivalència               |
|----------|--------------|----------------------------|
| +=       | op1 += op2   | op1 = op1 + op2             |
| -=       | op1 -= op2   | op1 = op1 - op2             |
| *=       | op1 *= op2   | op1 = op1 * op2             |
| /=       | op1 /= op2   | op1 = op1 / op2             |
| %=       | op1 %= op2   | op1 = op1 % op2             |
| &=       | op1 &= op2   | op1 = op1 & op2             |
| \|=      | op1 \|= op2  | op1 = op1 \| op2            |
| ^=       | op1 ^= op2   | op1 = op1 ^ op2             |
| >>=      | op1 >>= op2  | op1 = op1 >> op2            |
| <<=      | op1 <<= op2  | op1 = op1 << op2            |
| >>>=     | op1 >>>= op2 | op1 = op1 >>> op2           |

## 5.5. Expressions

Una expressió és la combinació de diversos operadors i operands. Per exemple, tenim les següents expressions:  
7 + 5 * 4 - 2  
10 + (1% 5) (7 * x) <= N  
El llenguatge Java avalua les expressions aplicant els operadors un a un seguint
un ordre específic. Aquest ordre es detalla en el següent punt.

## 5.6. Precedència d'operadors

Indica l'ordre **en el qual s'avaluen els operadors** en una expressió. No és necessari saber-se tota la llista de memòria, però **és important conéixer almenys els més utilitzats**: matemàtics, relacionals, lògics i d'assignació.

Alguns d'aquests operadors els veurem en unitats posteriors, ara mateix no és
necessari que sàpies què fan.

1. Operadors postfixos: expr++, expr--, () , . , [] {}
2. Operadors unaris: ++expr, --expr, -expr, ~, !
3. Creació o conversió de tipus: new (tipus)expr
4. Multiplicació i divisió: *, /, %
5. Suma i resta: +, -
6. Desplaçament de bits: <<, >>, >>>
7. Relacionals: <, >, <=, >=
8. Igualtat i desigualtat: ==, !=
9. AND a nivell de bits: &
10. AND lògic: &&
11. XOR a nivell de bits: ^
12. OR a nivell de bits: |
13. OR lògic: ||
14. Operador condicional: ? :
15. Assignació: =, +=, -=, *=, /=, %=, ^=, &=, |=, >>=, <<=

## 5.7. La classe Math

Es troben a faltar operadors matemàtics més potents a Java. Per això s'ha inclòs una classe especial anomenada Math dins del paquet java.lang. Aquesta classe posseeix molts mètodes molt interessants per a realitzar càlculs matemàtics complexos com a càlcul de potències, arrels quadrades, valors absoluts, si, cosinus, etc.

::: tabs
== Java

```java
double x = Math.pow(3,3); // Potència 3 ^ 3
double i = Math.sqrt(9); // Arrel quadrada de 9
```

:::

També posseeix constants com:

::: tabs
== Java

```java
double PI = Math.PI; // El número Π (3,14159265…)
double E =  Math.E; // El número e (2,7182818245...)
```

:::

Alguns exemples d'altres mètodes:

![Exemples mètodes](/uf3/exemples_metodes.jpg)
