//Sounds jsfxr
function Sf() {
  this.sS = function(r) {
    for (var t = 0; t < 24; t++) this[String.fromCharCode(97 + t)] = r[t] || 0;
    this.c < 0.01 && (this.c = 0.01);
    var a = this.b + this.c + this.e;
    if (a < 0.18) {
      var e = 0.18 / a;
      (this.b *= e), (this.c *= e), (this.e *= e);
    }
  };
}
function Sx() {
  var r, t, a, e, s, i, n, h, f, c, o, v;
  (this._p = new Sf()),
    (this.r = function() {
      var r = this._p;
      (e = 100 / (r.f * r.f + 0.001)),
        (s = 100 / (r.g * r.g + 0.001)),
        (i = 1 - r.h * r.h * r.h * 0.01),
        (n = -r.i * r.i * r.i * 1e-6),
        r.a || ((o = 0.5 - r.n / 2), (v = 5e-5 * -r.o)),
        (h = 1 + r.l * r.l * (r.l > 0 ? -0.9 : 10)),
        (f = 0),
        (c = 1 == r.m ? 0 : (1 - r.m) * (1 - r.m) * 2e4 + 32);
    }),
    (this.t = function() {
      this.r();
      var e = this._p;
      return (
        (r = e.b * e.b * 1e5),
        (t = e.c * e.c * 1e5),
        (a = e.e * e.e * 1e5 + 12),
        3 * (((r + t + a) / 3) | 0)
      );
    }),
    (this.W = function(u, b) {
      var w = this._p,
        k = 1 != w.s || w.v,
        y = w.v * w.v * 0.1,
        p = 1 + 3e-4 * w.w,
        d = w.s * w.s * w.s * 0.1,
        g = 1 + 1e-4 * w.t,
        S = 1 != w.s,
        l = w.x * w.x,
        m = w.g,
        x = w.q || w.r,
        A = w.r * w.r * w.r * 0.2,
        q = w.q * w.q * (w.q < 0 ? -1020 : 1020),
        M = w.p ? 32 + (((1 - w.p) * (1 - w.p) * 2e4) | 0) : 0,
        _ = w.d,
        U = w.j / 2,
        j = w.k * w.k * 0.01,
        C = w.a,
        W = r,
        z = 1 / r,
        B = 1 / t,
        D = 1 / a,
        E = (5 / (1 + w.u * w.u * 20)) * (0.01 + d);
      E > 0.8 && (E = 0.8), (E = 1 - E);
      for (
        var F,
          G,
          H,
          I,
          J,
          K,
          L = !1,
          N = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0,
          T = 0,
          V = 0,
          X = 0,
          Y = 0,
          Z = 0,
          $ = new Array(1024),
          rr = new Array(32),
          tr = $.length;
        tr--;

      )
        $[tr] = 0;
      for (tr = rr.length; tr--; ) rr[tr] = 2 * Math.random() - 1;
      for (tr = 0; tr < b; tr++) {
        if (L) return tr;
        if (
          (M && ++Y >= M && ((Y = 0), this.r()),
          c && ++f >= c && ((c = 0), (e *= h)),
          (e *= i += n) > s && ((e = s), m > 0 && (L = !0)),
          (G = e),
          U > 0 && ((Z += j), (G *= 1 + Math.sin(Z) * U)),
          (G |= 0) < 8 && (G = 8),
          C || ((o += v) < 0 ? (o = 0) : o > 0.5 && (o = 0.5)),
          ++O > W)
        )
          switch (((O = 0), ++N)) {
            case 1:
              W = t;
              break;
            case 2:
              W = a;
          }
        switch (N) {
          case 0:
            P = O * z;
            break;
          case 1:
            P = 1 + 2 * (1 - O * B) * _;
            break;
          case 2:
            P = 1 - O * D;
            break;
          case 3:
            (P = 0), (L = !0);
        }
        x && ((H = 0 | (q += A)) < 0 ? (H = -H) : H > 1023 && (H = 1023)),
          k && p && ((y *= p) < 1e-5 ? (y = 1e-5) : y > 0.1 && (y = 0.1)),
          (K = 0);
        for (var ar = 8; ar--; ) {
          if (++V >= G && ((V %= G), 3 == C))
            for (var er = rr.length; er--; ) rr[er] = 2 * Math.random() - 1;
          switch (C) {
            case 0:
              J = V / G < o ? 0.5 : -0.5;
              break;
            case 1:
              J = 1 - (V / G) * 2;
              break;
            case 2:
              J =
                0.225 *
                  (((J =
                    1.27323954 *
                      (I = 6.28318531 * ((I = V / G) > 0.5 ? I - 1 : I)) +
                    0.405284735 * I * I * (I < 0 ? 1 : -1)) < 0
                    ? -1
                    : 1) *
                    J *
                    J -
                    J) +
                J;
              break;
            case 3:
              J = rr[Math.abs(((32 * V) / G) | 0)];
          }
          k &&
            ((F = T),
            (d *= g) < 0 ? (d = 0) : d > 0.1 && (d = 0.1),
            S ? ((R += (J - T) * d), (R *= E)) : ((T = J), (R = 0)),
            (Q += (T += R) - F),
            (J = Q *= 1 - y)),
            x && (($[X % 1024] = J), (J += $[(X - H + 1024) % 1024]), X++),
            (K += J);
        }
        (K *= 0.125 * P * l),
          (u[tr] = K >= 1 ? 32767 : K <= -1 ? -32768 : (32767 * K) | 0);
      }
      return b;
    });
}
var synth = new Sx();
window.jsfxr = function(r) {
  synth._p.sS(r);
  var t = synth.t(),
    a = new Uint8Array(4 * (((t + 1) / 2) | 0) + 44),
    e = 2 * synth.W(new Uint16Array(a.buffer, 44), t),
    s = new Uint32Array(a.buffer, 0, 44);
  (s[0] = 1179011410),
    (s[1] = e + 36),
    (s[2] = 1163280727),
    (s[3] = 544501094),
    (s[4] = 16),
    (s[5] = 65537),
    (s[6] = 44100),
    (s[7] = 88200),
    (s[8] = 1048578),
    (s[9] = 1635017060),
    (s[10] = e),
    (e += 44);
  for (
    var i = 0,
      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      h = "data:audio/wav;base64,";
    i < e;
    i += 3
  ) {
    var f = (a[i] << 16) | (a[i + 1] << 8) | a[i + 2];
    h += n[f >> 18] + n[(f >> 12) & 63] + n[(f >> 6) & 63] + n[63 & f];
  }
  return h;
};
(function() {
  //Declaración inicial de constantes...
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const dimensionsCanvas = { w: 320, h: 568 };
  const canvas = $("#a");
  const canvasCopy = $("#s");
  const modalNext = $("#m");
  const ctx = canvas.getContext("2d");
  const ctxCopy = canvasCopy.getContext("2d");
  const baseCoordinates = { x: 10, y: 170 };
  const progressBar = { t: 0, p: 0, f: false };
  const angles = [0, 90, 180, 270];
  const colors = ["#e65166", "#8cdb40", "#03a9f4"];
  const isPWA =
    location.search !== ""
      ? location.search
          .split("?")[1]
          .toLowerCase()
          .indexOf("pwa") >= 0
      : false;

  let onLine = "onLine" in navigator && navigator.onLine;
  //Para validar el sonido cuando se une los pies al final...
  let soundPipeJoin = [];
  //data:image/png;base64,
  const figures = [
    {
      b:
        "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEWSuvFHcEy05ID4AAAAAnRSTlPvAK91IhsAAABDSURBVHgBY/gPAR8GCwOEGSGMBwwM9bgZUF0/Ydp/wBgf6qGMBzDGAXsoo0EeymDghzD+MbBDGH8YmEcs4wcDI1YGAMuCiVirwxXPAAAAAElFTkSuQmCC",
      i: ""
    },
    {
      b:
        "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEWTu/LC2PVj8DGhAAAAAnRSTlP9A06IA3IAAABsSURBVHgBtdE3AQMxDIXhP300hEAxtARaoBiCtvSr7mX0afomtcdoS7YFyuLFzkLA4gF6xR2uKwC1YAAuC37AwWO34JWCBdLGbYbpDalQT39lq2ZXDBb20ouHyp9gQOeP+nGwGLh0wiELpcIEClk1RxVgs/gAAAAASUVORK5CYII=",
      i: ""
    },
    {
      b:
        "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAADj7/Ln8fTg7fDl7/Pf6+7k7/Lf7O/n8fTr8vXn8PPp6+rf6u3t8/Pk7vH09fUMUbgxAAAAC3RSTlMAgBvj5vHAjm8OSkX7KI8AAAC5SURBVDjLYxgFo4BeQEkTt9wkJQZjD9zSLcYMZ44J4gQ5ZxjO4AOUSr97sxsnOPeO4e4d3NJn7zL8xyf9n+H/H9zS50HS+HQTsJuANAGPIQfLaYjgHlyhBpFGDdSjxjAQcxqsGUkAKH1cCQZqwNLIAmcYXKzgsS9zBix9EC6w2IVBSQG3NJMSkMCURoBR6WEg/RC77IycM2fe7Xtz5lknVmmVM2fe3v9778wZJ5zS/0HSRrh1/0eVBgBC4ci5mcMCBAAAAABJRU5ErkJggg==",
      i: ""
    },
    {
      b:
        "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAGFBMVEUAAADh7vLl8PPn8vXk8PTi7vPq7Ozf6+29FmGyAAAABnRSTlMA6YcbUbBDXr+1AAAA7UlEQVQ4y+3TPQ6CQBAFYCJ6AAOGVsHEdv05gN5AExNvsNRrgu/6PmAxRmemsLDitV/ezBAgGTPmXynXJuNuc1jvLUaYl85gZlGZzA0K+9r71q86+5peqczQjwbTF85gzr/qTOd4gzk+l57bD2FdYDxe43OBGb3ON0JX67gfVsXgaNwHl1WSnoq4H1h+H08HlOm9X4Z6k0iZFrEejqKf+nqNzKzzw7XqCM6qc7lS7xlnmWdxei5zWnSs/lQbWLcl2365xhMuJ/OtKI9mcho5U267dadrnG4AKjInX959MzVCJjPLLeMn3pUxb3/6E/omkHsWjxRgAAAAAElFTkSuQmCC",
      i: ""
    },
    {
      b:
        "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAALVBMVEUAAADk8PPd6vDm8fXh7vLk7/Lh7vLi7/Lo8fXq8vXq6urg6+3z9fXq8fLZ6ezMwlrKAAAACnRSTlMAgIAb5b7Vbw5IfuxIFwAAAFZJREFUOMtjQACTd7v3njlzdvc+ZwZswGQfXmkzqPTuZKzSzNG7wWDrBAasQHv3KiDYvZFhVHpUelR6VHpUelSaPOl2YFWzdy+wqqnAW4+9I1TNEa0bAMljN0Mee7XmAAAAAElFTkSuQmCC",
      i: ""
    }
  ];
  let worlds = [];
  let actualWorld = [];
  let numLevel = 0;
  let levelComplete = +localStorage.getItem("pipe") || 1;
  let startGame = false;
  let animation;
  let pipesRotate = [];
  let finishLevel = false;

  //Redimensionar el canvas...
  canvas.width = dimensionsCanvas.w;
  canvas.height = dimensionsCanvas.h;
  canvas.style.width = dimensionsCanvas.w + "px";
  canvas.style.height = dimensionsCanvas.h + "px";

  //Evento para siguiente...
  modalNext.addEventListener("click", () => {
    if (progressBar.f) {
      $("#p").classList.remove("i");
    } else {
      nextLevel(numLevel + 1);
    }
    modalText(false);
  });

  //Dibuja la figura y su rotación...
  const drawFigure = (index, width) => {
    const dataPipe = actualWorld[1][index];

    ctx.save();
    ctxCopy.clearRect(0, 0, 100, 100);
    ctxCopy.drawImage(figures[dataPipe[2] - 1].i, 0, 0, width, width);

    if (dataPipe[4] !== "") {
      ctxCopy.globalCompositeOperation = "source-atop";
      ctxCopy.fillStyle = dataPipe[4];
      ctxCopy.fillRect(0, 0, width, width);
    }

    ctx.translate(
      baseCoordinates.x + width * dataPipe[1] + width / 2,
      baseCoordinates.y + width * dataPipe[0] + width / 2
    );

    let angle = angles[dataPipe[3]];
    if (dataPipe[3] !== dataPipe[5]) {
      //Buscar el elemento en el array de giros...
      const indexRotate = pipesRotate.map(v => v[0]).indexOf(index);
      if (indexRotate >= 0) {
        const newAngule = angles[dataPipe[5]] === 0 ? 360 : angles[dataPipe[5]];
        if (pipesRotate[indexRotate][1] + 10 <= newAngule) {
          pipesRotate[indexRotate][1] += 15;
          angle = pipesRotate[indexRotate][1];
        } else {
          angle = newAngule;
          pipesRotate.splice(indexRotate, 1);
          actualWorld[1][index][3] = dataPipe[5];
          //Revisará las conexiones...
          checkConectionPipe();
        }
      }
    }
    ctx.rotate((angle * Math.PI) / 180);
    ctx.translate(-width / 2, -width / 2);
    ctx.drawImage(canvasCopy, 0, 0);
    ctxCopy.globalCompositeOperation = "source-over";
    ctx.restore();
  };

  const checkConectionPipe = () => {
    //Se guardará los valores para detectar las filas y columnas que se deben tomar dependiendo del giro de la figura y su dirección...
    const getDirections = [
      [[1, 0], [0, -1], [-1, 0], [0, 1]],
      [
        [[2, 0, -1, 1, 0, 1, 3], [3, 1, 0, 0, 0, 1, 3], [1, 1, 0, 0, 0, -1, 1]],
        [
          [3, -1, 0, 2, 1, 0, 0],
          [2, 0, -1, 1, -1, 0, 2],
          [0, 0, -1, 1, 1, 0, 0]
        ],
        [
          [0, 0, -1, 1, 0, 1, 3],
          [3, -1, 0, 2, 0, 1, 3],
          [1, -1, 0, 2, 0, -1, 1]
        ],
        [[1, -1, 0, 2, 1, 0, 0], [0, 0, 1, 3, 1, 0, 0], [2, 0, 1, 3, -1, 0, 2]]
      ],
      [
        [[2, 0, -1, 1], [3, 1, 0, 0]],
        [[0, 0, -1, 1], [3, -1, 0, 2]],
        [[0, 0, 1, 3], [1, -1, 0, 2]],
        [[1, 1, 0, 0], [2, 0, 1, 3]]
      ]
    ];

    //Se debe limpiar el color que tiviera los PIPES...
    for (let i = 0; i < actualWorld[1].length; i++) {
      if (actualWorld[1][i][2] !== 1 && actualWorld[1][i][2] !== 2) {
        //Se debe obviar aquellos PIPES que ya se hayan revisado en un ciclo anterior...
        actualWorld[1][i][4] = "";
      }
    }

    const globalPipes = [];
    //Guardará la cantidad de elementos finales que se han encontrado por cada elemento inicial...
    const numFinalElements = actualWorld[2].map(v => [v, 0]);
    for (let c = 0; c < actualWorld[2].length; c++) {
      const start = actualWorld[2][c];
      //Saber si el valor de inicio ya se encuentra dentro de los evaluados...
      if (globalPipes.indexOf(start) < 0) {
        const connectedPipes = []; //GUARDARÁ EL LISTADO DE PIPES QUE SE REVISARÁN...
        const pipesToCheck = []; //GUARDA LOS PIPES QUE SE REVISARÁN...
        connectedPipes.push(start);
        pipesToCheck.push([start, actualWorld[1][start][3]]);
        globalPipes.push(start);
        //Se extrae el color del pipe inicial...
        let initialColor = actualWorld[1][start][4];

        while (pipesToCheck.length > 0) {
          const [index, directionPipe] = pipesToCheck.pop();
          const typePipe = actualWorld[1][index][2];
          //CERCA A ESTE PUNTO SE DEBE VALIDAR QUE EL PIPE QUE VENGA NO SE ENCUENTRE YA EN connectedPipes SI NO SE QUEDARÍA EN UN CICLO INFINITO...
          //ADEMÁS EL START DEBE TENER LA MISMA DIRECCIÓN QUE EL VALOR DEL GIRO...
          let validatePipe = typePipe !== 2;
          if (validatePipe && typePipe === 1) {
            validatePipe = directionPipe === actualWorld[1][index][3];
          }

          //Tiene que ser diferente a pipe de finalización...
          if (validatePipe) {
            //El máximo de veces que hará la iteración para buscar los vecinos del pipe...
            const maxVal =
              typePipe === 1 || typePipe === 4 || typePipe === 5 ? 1 : 2;
            let valRotate = [];

            //Si es una cruceta (3) o una curva(4), se deberá extraer los valores de dirección y nueva ruta...
            if (typePipe === 3 || typePipe === 4) {
              const dataRotate =
                getDirections[typePipe === 3 ? 1 : 2][actualWorld[1][index][3]];
              valRotate = dataRotate.filter(v => v[0] === directionPipe)[0];
            }

            //Se iterá el número de veces que se preguntará por un vecino...
            for (let i = 0; i < maxVal; i++) {
              const row =
                typePipe === 1 || typePipe === 5
                  ? getDirections[0][directionPipe][0]
                  : valRotate[i * 3 + 1];
              const column =
                typePipe === 1 || typePipe === 5
                  ? getDirections[0][directionPipe][1]
                  : valRotate[i * 3 + 2];
              const directionValidate =
                typePipe === 1 || typePipe === 5
                  ? directionPipe
                  : valRotate[i * 3 + 3];

              const neighbour = getNeighbour(
                getPipePosition(
                  actualWorld[1][index][0] + row,
                  actualWorld[1][index][1] + column
                ),
                directionValidate
              );

              if (neighbour >= 0) {
                if (!(connectedPipes.indexOf(neighbour) >= 0)) {
                  //Saber si la figura que se está evaluando ya estaba en el array...
                  pipesToCheck.push([neighbour, directionValidate]);
                  connectedPipes.push(neighbour);
                  if (globalPipes.indexOf(neighbour) < 0) {
                    globalPipes.push(neighbour);
                  }
                }
              }
            }
          } else {
            //Saber si llego a un elemento inicial de nuevo...
            if (typePipe === 1) {
              if (initialColor !== actualWorld[1][index][4]) {
                initialColor = rgbToHex(
                  colorMixer(
                    hexToRgb(initialColor),
                    hexToRgb(actualWorld[1][index][4])
                  )
                );
                //Buscar si ese elemento inicial combinado con el color que se ha geberado, desemboca a un final...
                const numPipesCombinedColor = actualWorld[3].filter(
                  v => actualWorld[1][v][4] === initialColor
                ).length;
                if (numPipesCombinedColor !== 0) {
                  const indexPipeCombine = numFinalElements
                    .map(v => v[0])
                    .indexOf(index);
                  if (indexPipeCombine >= 0) {
                    numFinalElements[
                      indexPipeCombine
                    ][1] = numPipesCombinedColor;
                  }
                }
              }
            }
          }
        }

        //Se debe poner el color correspondiente a los pipes que están conectados...
        let finalElements = 0;
        for (let connected of connectedPipes) {
          if (
            actualWorld[1][connected][2] !== 1 &&
            actualWorld[1][connected][2] !== 2
          ) {
            actualWorld[1][connected][4] = initialColor;
          } else {
            if (actualWorld[1][connected][2] === 2) {
              //Es un elemento final de los pipes que se han conectado...
              if (actualWorld[1][connected][4] === initialColor) {
                finalElements++;
              }
            }
          }
        }
        numFinalElements[c][1] = finalElements;
        //Saber si ese elemento ya se había unido y si es así, si tiene la misma cantidad de elementos finales unidos...
        if (soundPipeJoin[c][1] !== numFinalElements[c][1]) {
          playSound(
            numFinalElements[c][1] === 0
              ? [
                  1,
                  ,
                  0.3638,
                  ,
                  0.3833,
                  0.2098,
                  ,
                  0.3143,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  0.403,
                  ,
                  ,
                  1,
                  ,
                  ,
                  ,
                  ,
                  0.63
                ]
              : [
                  2,
                  ,
                  0.1674,
                  ,
                  0.2436,
                  0.7636,
                  0.0377,
                  -0.3541,
                  ,
                  ,
                  ,
                  ,
                  ,
                  0.4824,
                  0.0035,
                  ,
                  0.169,
                  -0.0485,
                  1,
                  ,
                  ,
                  ,
                  ,
                  0.55
                ]
          );
          soundPipeJoin[c][1] = numFinalElements[c][1];
        }
      }
    }

    //Saber si todos están conectados...
    if (globalPipes.length === actualWorld[1].length) {
      const pipesFinish = numFinalElements.reduce(
        (a, s) => a + (s[1] !== 0),
        0
      );
      if (pipesFinish === actualWorld[2].length) {
        finishLevel = true;
        modalText(true, "Next Level");
      }
    }
  };

  const getNeighbour = (pipesInposition, directionPipe) => {
    let indexNextPipe = -1;
    const posibleDirections = [
      [[2], [2], [1, 2, 3], [1, 2], [0, 2]],
      [[3], [3], [0, 2, 3], [2, 3], [1, 3]],
      [[0], [0], [0, 1, 3], [0, 3], [0, 2]],
      [[1], [1], [0, 1, 2], [0, 1], [1, 3]]
    ][directionPipe];
    if (pipesInposition.length !== 0) {
      for (let indexPipe of pipesInposition) {
        //Buscar si existe un posible conector...
        const conectorExpected = posibleDirections[
          actualWorld[1][indexPipe][2] - 1
        ].indexOf(actualWorld[1][indexPipe][3]);
        if (conectorExpected >= 0) {
          indexNextPipe = indexPipe;
          break;
        }
      }
    }
    return indexNextPipe;
  };

  //Dada la fila y la columna, devuelve el pipe que se encuentra en esa ubicación...
  const getPipePosition = (f, c) => {
    const numberPipe = [];
    if (f >= 0 && f < actualWorld[0] && c >= 0 && c < actualWorld[0]) {
      for (let i = 0; i < actualWorld[1].length; i++) {
        if (actualWorld[1][i][0] === f && actualWorld[1][i][1] === c) {
          numberPipe.push(i);
          if (
            (actualWorld[1][i][2] !== 4 && actualWorld[1][i][2] !== 5) ||
            numberPipe.length === 2
          ) {
            break;
          }
        }
      }
    }
    return numberPipe;
  };

  const createScene = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const dimensions = actualWorld[0];
    const width = Math.round(
      (dimensionsCanvas.w - baseCoordinates.x * 2) / dimensions
    );

    ctx.font = "bold 15px Arial";
    ctx.fillStyle = onLine ? "silver" : "#8cdb40";
    ctx.fillText("OFFLINE" + (!onLine ? " (+40)" : ""), 10, 30);

    ctx.fillStyle = isPWA ? "red" : "silver";
    ctx.fillText((isPWA ? "(+20) " : "") + "PWA", isPWA ? 230 : 260, 30);

    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#394651";
    ctx.fillText(`${numLevel <= 9 ? `0${numLevel}` : numLevel}`, 135, 80);

    //Para dibujar la línea del tiempo...
    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#fbc459";
    ctx.moveTo(0, dimensionsCanvas.h - 15);
    ctx.lineTo(
      dimensionsCanvas.w * (progressBar.p / 100),
      dimensionsCanvas.h - 15
    );
    ctx.stroke();

    progressBar.t++;
    if (
      progressBar.t >= 50 + (!onLine ? 40 : 0) + (isPWA ? 20 : 0) &&
      !progressBar.f &&
      !finishLevel
    ) {
      progressBar.t = 0;
      progressBar.p--;
      if (progressBar.p <= 0) {
        progressBar.f = true;
        startGame = false;
        modalText(true, "Game Over :(");
      }
    }

    //Crea la base de los pipes...
    for (let i = 0; i < dimensions; i++) {
      for (let c = 0; c < dimensions; c++) {
        createBase(
          baseCoordinates.x + width * c,
          baseCoordinates.y + width * i,
          width
        );
      }
    }

    //Dibijará los pipes dada las coordenadas...
    for (let f = 0; f < actualWorld[1].length; f++) {
      drawFigure(f, width);
    }
  };

  const createBase = (x, y, d) => {
    ctx.beginPath();
    ctx.rect(x, y, d, d);
    ctx.fillStyle = "#435563";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#394651";
    ctx.stroke();
  };

  const loadImages = whenLoaded => {
    let count = 0;
    figures.forEach((path, i) => {
      const img = new Image();
      img.onload = () => {
        figures[+img.id].i = img;
        count++;
        if (count === figures.length) whenLoaded();
      };
      img.src = `data:image/png;base64,${path.b}`;
      img.id = i;
    });
  };

  const readDataLevels = data => {
    const dataWord = [];
    const splitdata = data.split(";");
    for (let value of splitdata) {
      const splitWorld = value.split("#");
      const splitDimensionColors = splitWorld[0].split(",");
      const pipesValue = splitWorld[1];
      //Partir los valores que se necesitan...
      //Guardar los valores de inicio...
      const limitPoints = { s: [], e: [] };
      //Guardar los valores de finalización...
      //Tener en cuenta los valores dobles (6 y 7)...
      const coordinatesPipes = [];
      let contColor = 0;
      let contPipe = 0;
      for (let i = 0; i < pipesValue.length / 4; i++) {
        const valueData = pipesValue.substr(4 * i, 4).split("");
        let colorPipe = "";
        if (+valueData[2] === 1 || +valueData[2] === 2) {
          const colorPosition = splitDimensionColors[contColor + 1];
          if (colorPosition.indexOf("-") >= 0) {
            //Es un color combinado...
            const splitColors = colorPosition.split("-");
            colorPipe = colors[+splitColors[0] - 1];
            for (let c = 1; c < splitColors.length; c++) {
              colorPipe = rgbToHex(
                colorMixer(
                  hexToRgb(colorPipe),
                  hexToRgb(colors[+splitColors[c] - 1])
                )
              );
            }
          } else {
            colorPipe = colors[+colorPosition - 1];
          }
          contColor++;
          limitPoints[+valueData[2] === 1 ? "s" : "e"].push(contPipe);
        }
        //Se adiciona el color de la figura y el valor para el movimiento de la misma (ángulo inicial)...
        valueData.push(colorPipe, valueData[3]);

        //Validar los valores especiales (cruceta (6) y doble curva (7))...
        if (+valueData[2] === 6 || +valueData[2] === 7) {
          const originalData = +valueData[2];
          const originalAngle = +valueData[3];
          //Se cambia la figura por su valor correspondiente...
          valueData[2] = originalData === 6 ? 5 : 4;
          //Se hace una copia del array para el opuesto...
          const cloneValue = [...valueData];
          //Establece el valor del opuesto en base al original...
          cloneValue[3] =
            originalData === 6 ? +!originalAngle : [2, 3, 0, 1][originalAngle];
          coordinatesPipes.push(
            serializeData(valueData),
            serializeData(cloneValue)
          );
          contPipe++;
        } else {
          coordinatesPipes.push(serializeData(valueData));
        }
        contPipe++;
      }
      dataWord.push([
        +splitDimensionColors[0],
        coordinatesPipes,
        limitPoints.s,
        limitPoints.e
      ]);
    }
    return dataWord;
  };

  const serializeData = data => data.map((v, i) => (i !== 4 ? +v : v));

  //Carga de las imágenes y de los niveles del juego...
  loadImages(() => {
    fetch("w.txt")
      .then(response => response.text())
      .then(levels => {
        worlds = readDataLevels(levels);
        listOfWorlds();
      });
  });

  const listOfWorlds = () => {
    const el = $("#w");
    for (let i = 1; i <= worlds.length; i++) {
      const elChild = document.createElement("div");
      elChild.innerHTML = i;
      elChild.className = "e" + (i <= levelComplete ? "" : " q");
      elChild.dataset.index = i;
      el.appendChild(elChild);
    }

    [...$$(".e")].forEach(v => {
      v.addEventListener("click", e => {
        const { index } = e.currentTarget.dataset;
        if (+index <= levelComplete) {
          $("#p").classList.add("i");
          nextLevel(+index);
          startGame = true;
          render();
        }
      });
    });
  };

  const nextLevel = (newLevel = 1) => {
    numLevel = newLevel <= worlds.length ? newLevel : 1;
    progressBar.p = 100;
    progressBar.t = 0;
    progressBar.f = false;

    actualWorld = JSON.parse(JSON.stringify(worlds[numLevel - 1]));

    //Guardará el número de veces que un elemento inicial se ha conectado, de forma global, en este caso es para el sonido...
    soundPipeJoin = actualWorld[2].map(v => [v, 0]);

    //Se revisa si ya hay pipes conectados...
    checkConectionPipe();
    finishLevel = false;

    //Guardar en localStorage el nivel en el que va...
    if (numLevel >= levelComplete) {
      levelComplete = numLevel;
      localStorage.setItem("pipe", levelComplete);
      //Habilitar el mundo...
      $$(".e")[numLevel - 1].classList.remove("q");
    }
  };

  //Para capturar el evento sobre un PIPE...
  const pressPipe = (x, y) => {
    let numberPipe = -1;
    const dimensions = actualWorld[0];
    const width = Math.round(
      (dimensionsCanvas.w - baseCoordinates.x * 2) / dimensions
    );
    const pipes = actualWorld[1];
    for (let i = 0; i < pipes.length; i++) {
      const coordinateRange = {
        x: {
          start: baseCoordinates.x + width * pipes[i][1],
          end: baseCoordinates.x + width * pipes[i][1] + width
        },
        y: {
          start: baseCoordinates.y + width * pipes[i][0],
          end: baseCoordinates.y + width * pipes[i][0] + width
        }
      };

      const positionMouse = {
        x: x > coordinateRange.x.start && x < coordinateRange.x.end,
        y: y > coordinateRange.y.start && y < coordinateRange.y.end
      };
      if (positionMouse.x && positionMouse.y) {
        numberPipe = i;
        break;
      }
    }

    if (numberPipe >= 0) {
      if (pipes[numberPipe][2] !== 1 && pipes[numberPipe][2] !== 2) {
        //Saber si está realizando giro en ese momento...
        const isRotate = pipesRotate.map(v => v[0]).indexOf(numberPipe) >= 0;
        if (!isRotate) {
          playSound([
            0,
            ,
            0.1923,
            ,
            0.2442,
            0.3415,
            ,
            0.2591,
            ,
            ,
            ,
            ,
            ,
            0.4507,
            ,
            ,
            ,
            ,
            0.4341,
            ,
            ,
            ,
            ,
            0.5
          ]);

          savePipesRotate(numberPipe);

          //Si es especial se deberá buscar si en la misma posición tiene otro valor...
          //Buscar si hay otro elemento en esa misma posición...
          if (pipes[numberPipe][2] === 5 || pipes[numberPipe][2] === 4) {
            for (let i = 0; i < pipes.length; i++) {
              if (i !== numberPipe) {
                if (
                  pipes[numberPipe][0] === pipes[i][0] &&
                  pipes[numberPipe][1] === pipes[i][1] &&
                  pipes[numberPipe][2] === pipes[i][2]
                ) {
                  savePipesRotate(i);
                  break;
                }
              }
            }
          }
        }
      }
    }
  };

  const savePipesRotate = index => {
    //Guarda el siguien giro...
    actualWorld[1][index][5] =
      actualWorld[1][index][3] + 1 >= 4 ? 0 : actualWorld[1][index][3] + 1;
    //Guarda la animación de la rotación del pipe...
    pipesRotate.push([index, angles[actualWorld[1][index][3]]]);
  };

  //Para la captura de los eventos...
  const eventoCanvas = e => {
    e.stopPropagation();
    e.preventDefault();
    let evento = e;
    if (e.type === "touchstart") {
      evento = e.touches[0] || e.changedTouches[0];
    }

    const x =
      Math.floor(evento.pageX) - (window.innerWidth - dimensionsCanvas.w) / 2;
    const y =
      Math.floor(evento.pageY) - (window.innerHeight - dimensionsCanvas.h) / 2;

    if (!finishLevel && !progressBar.f) {
      pressPipe(x, y);
    }
  };

  //Para los eventos...
  const addListenerMulti = (el, fn, ...evts) => {
    for (let i = 0; i < evts.length; i++) {
      el.addEventListener(evts[i], fn, false);
    }
  };
  addListenerMulti(canvas, eventoCanvas, "mousedown", "touchstart");

  //Utilidades...

  //Mezclar colores...
  //https://stackoverflow.com/a/32171077
  const colorChannelMixer = (colorChannelA, colorChannelB, amountToMix) =>
    parseInt(colorChannelA * amountToMix + colorChannelB * (1 - amountToMix));

  const colorMixer = (rgbA, rgbB, amountToMix = 0.5) => [
    colorChannelMixer(rgbA[0], rgbB[0], amountToMix),
    colorChannelMixer(rgbA[1], rgbB[1], amountToMix),
    colorChannelMixer(rgbA[2], rgbB[2], amountToMix)
  ];

  const hexToRgb = hex =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map(x => parseInt(x, 16));

  const rgbToHex = rgb =>
    "#" +
    rgb
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const modalText = (show, text = "") => {
    modalNext.style.display = show ? "block" : "none";
    if (text !== "") {
      modalNext.innerHTML = text;
    }
  };

  const render = () => {
    animation = requestAnimationFrame(render);
    if (!startGame) {
      cancelAnimationFrame(animation);
    } else {
      createScene();
    }
  };

  //Para evitar el click drecho en la página...
  document.addEventListener("contextmenu", event => event.preventDefault());

  //Para reproducir un sonido...
  const playSound = params => {
    let url = window.URL || window.webkitURL;
    try {
      let soundURL = jsfxr(params);
      let player = new Audio();
      player.addEventListener(
        "error",
        function() {
          console.log("Error: " + player.error.code);
        },
        false
      );
      player.src = soundURL;
      player.play();
      player.addEventListener(
        "ended",
        function(e) {
          url.revokeObjectURL(soundURL);
        },
        false
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  window.addEventListener("offline", () => {
    onLine = false;
  });

  window.addEventListener("online", () => {
    onLine = true;
  });

  console.log("%c%s","color: black; font-size: 24px;","Developed by Jorge Rubiano https://twitter.com/ostjh");
})();
