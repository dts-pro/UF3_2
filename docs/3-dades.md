# 3. Tipus de dades

A Java existeixen dos tipus principals de dades:

- ***Tipus de dades simples***: Ens permeten crear variables que emmagatzemen un sol valor. Per exemple per a un comptador, edat, preu, etc. Són els que més utilitzarem ara com ara.
- ***Tipus de dades compostes***: Estructures de dades més complexes que permeten emmagatzemar moltes dades (vectors, objectes, etc.). Les veurem en futures unitats.

Tipus de dades simples suportades per Java:

- Per a nombres enters: **byte**, **short**, **int**, **long**
- Per a nombres reals: **float**, **double**
- Per a caràcters: **char**
- Per a valors lògics: **boolean**

| Tipus   | Descripció                                     | Memòria ocupada | Rang de valors permesos                         |
|---------|------------------------------------------------|-----------------|-------------------------------------------------|
| byte    | Nombre enter d'1 byte                          | 1 byte          | -128 … 127                                      |
| short   | Nombre enter curt                              | 2 bytes         | -32768 … 32767                                  |
| int     | Nombre enter                                   | 4 bytes         | -2147483648 … 2147483647                        |
| long    | Nombre enter llarg                             | 8 bytes         | -9223372036854775808 … 9223372036854775807      |
| float   | Nombre real amb coma flotant de precisió simple| 32 bits         | ±3,4\*10⁻³⁸ … ±3,4\*10³⁸                        |
| double  | Nombre real amb coma flotant de precisió doble | 64 bits         | ±1,7\*10⁻³⁰⁸ … ±1,7\*10³⁰⁸                      |
| char    | Un sol caràcter                                | 2 bytes         |                                                 |
| boolean | Valor lògic                                    | 1 bit           | true o false                                    |

**IMPORTANT!**: **Java no realitza** una **comprovació** dels **rangs**. És a dir, si a una variable de tipus short amb el valor 32.767 se li suma 1, sorprenentment el resultat serà -32.768 (no produeix un error de tipus desbordament com en altres llenguatges de programació, sinó que **es comporta de manera cíclica**).

Existeix un **<u>tipus de dada composta</u>** anomenada **String** que convé conéixer ja que permet representar text. Més endavant veurem com s'utilitza.
