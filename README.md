# Pipes Rush - JS13K

Juego realizado para la competencia [JS13K], inspirado en el juego Pipes de [Puzzlerama], el usuario deberá unir los pipes, antes de que el tiempo se termine, si se está offline se entregará más tiempo, igualmente si el juego se adicionado al escritorio (PWA)

# [Artículo postmortem del desarrollo]

# [DEMO]

# El juego.

## Objetivo.

El objetivo del juego es la de conectar todos los pipes que se encentran en el escenario con su respectivo color, en algunas ocasiones será necesario commbiar colores para lograr el objetivo.

![image](https://github.com/Jorger/PipesRush_JS13k/blob/master/pipes.gif?raw=true)

## Niveles

Existen 44 niveles los cuales contienen diferente tipos de difiucultad.

## Despliegue

Se ha deplegado la aplicación en el servicio conocido como [now], comando que se ejecuta en la carpeta zip de la aplicación, aunque se espera que el juego sea visto en el sitio de JS13K, una vez haya sido admitido.

```
now
```

# Tecnología.

Se ha hecho uso de canvas, además de la librería [jsfxr] para genreación de sonidos

### TODO

- [ ] Crear editor de escenarios.
- [ ] Adicionar imágenes de diferentes resolciones para el archivo manifest.json
- [x] Escribir artículo postmortem del desarrollo.


### Autor
* Jorge Rubaino [@ostjh]

License
----
MIT

[@ostjh]:https://twitter.com/ostjh
[JS13K]:https://js13kgames.com/
[Puzzlerama]:https://play.google.com/store/apps/details?id=com.leodesol.games.puzzlecollection&hl=es_419
[DEMO]:https://pipes-rush-js13k.now.sh
[jsfxr]:https://github.com/mneubrand/jsfxr
[now]:https://zeit.co/now
[Artículo postmortem del desarrollo]:https://medium.com/@ostjh/pipes-rush-js13k-f4679d175f74
