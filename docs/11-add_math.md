# La classe Math

Centrant-nos en la classe Math veurem alguns mètodes de gran utilitat.

- **Math.round**(decimal): arrodoniment d'un número
- **Math.sqrt**(n): arrel quadrada
- **Math.pow**(base, exponent): calcula la potència d'un nombre base elevat a un exponent
- **Math.sin**(angle): si d'un angle (igual que la resta de funcions trigonomètriques)

També hi ha les constants de classe.

**Math.PI**: número PI

A la part superior esquerra de la imatge veiem que apareix el concepte de Paquets.

Hem de tenir en compte que les classes sempre estan contingudes en un paquet, és a dir, que cada paquet conté un conjunt classes. Això no és ni més ni menys que una manera d'ordenació de les classes.

A més, els paquets també tenen una certa jerarquia (com passa amb les carpetes del nostre ordinador). Uns paquets poden contenir altres. Així, per exemple, podem veure aquesta jerarquia

- **java.lang**
- **java.lang.annotation**
- **java.lang.instrument**
- **java.lang.invoke**
- **java.lang.management**
- **java.lang.ref**
- **java.lang.reflect**

on el paquet **java.lang.annotation** i tots els següents estan continguts al paquet 
principal **java.lang**.

Addicionalment, hem de tenir en compte que el paquet **java.lang** és el paquet per defecte de Java, de manera que totes les funcions que veurem a continuació es poden utilitzar sense haver de fer cap menció explícita a aquest paquet.Tot el que veurem a continuació ho podem fer creant-nos una classe **Prova**.

Un cop al cos del mètode principal començarem a teclejar la següent instrucció:

`***int arrel=Math.***`

En el moment en què teclegem el **punt** `.`. veiem que apareix una finestra d'ajuda com la següent que ens indica els mètodes i constants que podem utilitzar dins de la classe **Math**.

![Math + punt](/uf3/Math_punt.jpg)

Si continuem teclejant la paraula “sq” veurem que a mesura que escrivim cada lletra l'ajuda es va concretant fins arribar finalment al mètode que ens interessa que és “sqrt” o arrel quadrada.

![Math + sq](/uf3/Math_sq.jpg)

Un altre aspecte molt important d'aquesta ajuda és que ja ens indica tant el tipus de dada en què els paràmetres han d'estar definits (en l'exemple indica que un hipotètic nom de paràmetre “a” ha d'estar definit com a **double**), així com el tipus de dada en què ha d'estar definida la variable destinació (en el nostre cas la variable “arrel” hauria d'haver estat definida com a **double** i no com a **int**, però vegem que passa si cometem aquest error).

Tornem a l'editor i continuem completant la nostra instrucció. Veurem com l'editor mostra que hem comès un error.

![Math error](/uf3/Math_error.jpg)

Primer ens marca a l'inici de la línia un avís. Si posem el punter a sobre sense fer clic ens indicarà que els tipus de dades són incompatibles. Si fem clic sobre l'avís veurem les propostes de solució que ens ofereix. La segona solució ens proposa que definim correctament el tipus de dades per a la variable arrel.

![Math canviar a double](/uf3/Math_canvi_double.jpg)

La primera solució ens proposa que, si volem mantenir la variable `arrel` com a sencera apliquem una conversió de tipus (refosa o cast, que explicarem més endavant) sobre la classe, cosa que donarà com a resultat la següent instrucció.

`int arrel=(int) Math.sqrt(25);`

Si fem clic sobre qualsevol de les solucions veurem com l'editor realitza automàticament els canvis.

Ara passem a treballar amb el mètode **round** de la classe **Math**. Per això, primer declararem la variable `numero1`.

`float numero1=7.5793F;`

Ara començarem a escriure la instrucció per a l’arrodoniment fins que ens aparegui 
l'ajuda:

`int resultat1=Math.ro`

![Math + ro](/uf3/Math_ro.jpg)

Com veiem la classe **Math** té dos mètodes round: un que arrodoneix una variable **float** i la deixa en una sencera, i un altre que arrodoneix una variable **double** la deixa en una de tipus **long**.

Completarem les instruccions per al primer cas i després les repetirem per utilitzar el segon cas sobre les variables `numero2` (amb valor 7.493) i `resultat2`.

Addicionalment, es poden incloure més instruccions amb diversos tipus de dades i diversos valors decimals (p.e. intercanviant els valors de numero1 i numero2) per a veure els resultats.

Finalment passarem a treballar amb el mètode d'elevar a un exponent. Per això, ens crearem una variable per a la base i una altra per a l'exponent.

`double base=10;`

`double exponent=5;`

Realitzarem el càlcul d'exponent sobre una variable `resultat3`. Seguirem els mateixos passos que abans perquè ens aparegui l'ajuda d'autocompletar.

`int resultat3=Math.pow`

I acabarem completant la instrucció amb els paràmetres `base` i `exponent`.

El nostre programa complet serà:

::: details Codi

```java
public class UF04ExempleClasseMath {
    public static void main(String[] args) {

        // Càlculs amb el mètode d’ arrel quadrada
        int arrel=(int) Math.sqrt(25);
        double arrelD= Math.sqrt(25);
        System.out.println(arrel);
        System.out.println(arrelD);

        // Càlculs amb el mètode d’arrodoniment
        float numero1=7.579F;
        int resultat1=Math.round(numero1);
        double numero2=7.4793;
        long resultat2=Math.round(numero2);
        System.out.println(resultat1);
        System.out.println(resultat2);

        // Càlculs amb el mètode d’elevar a un exponent
        double base=10;
        double exponent=5;
        double resultat3=Math.pow(base,exponent);
        System.out.println(resultat3);
    }
}

```

:::