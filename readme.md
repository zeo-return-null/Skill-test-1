# Skill Test N 1
## Javascript avanzado y Node básico
---

1. Definir: Javascript, Node, backend y frontend.

2. Nombrar todos los tipos de datos vistos y un uso para cada uno.

3. ¿Qué es el package.json? ¿Qué es una dependencia? ¿Y una dependencia de desarrollo?

4. Nombrar 3 métodos de array y su función.

5. ¿Qué es el asincronismo? Cómo se implementa en Javascript?

6. Con todos los conocimientos adquiridos, se te plantea la siguiente situación a resolver: Pepa necesita un backend que disponga de:
- 5 rutas distintas.
- Morgan como middleware.
- Una página en caso de error 404 (Not found).
- Que cada bloque de código grande este bien comentado.

¿Para qué quiere esto Pepa?

Necesidades de ruta 1:
Enviar como respuesta al frontend un json local con cualquier tipo de
datos.

Necesidades de ruta 2:
Pepa tiene una lista de compras para cada día de la semana (En este
caso, la tienen que redactar ustedes). Y quiere mediante esta ruta recibir la
lista de cada día que sea par (Teniendo en cuenta que el domingo es el día
0).

Necesidades de ruta 3:
Pepa quiere que esta ruta haga un fetch hacia una api externa, y que
nuestra ruta devuelva el primer valor de lo que hayamos obtenido
(Mediante fetch).

Necesidades de la ruta 4:
Pepa quiere recibir un elemento ```<h1></h1>``` que contenga el mensaje “Hola
pepa!”, seguido de un ```<p></p>``` que contenga “Bienvenida a tu servidor bien
piola! :)”

Necesidades de la ruta 5:
Pepa quiere que mediante este RegEx:
``` /[contraseñadepepabiensegura]+[1-9]\w+/g ```

Se comprueben 3 strings distintos, y envíe solamente el que coincide, es
decir: Que se vea por pantalla la contraseña que concuerda con esa
expresión regular.