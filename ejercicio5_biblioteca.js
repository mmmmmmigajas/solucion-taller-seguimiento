// ============================================================
// EJERCICIO 5 — BiblioTech
// Control de Préstamos de Libros
// Préstamo gratis: 7 días | Multa: $1.500/día
// Retraso > 15 días: +$10.000 adicional por libro
// Máximo 3 libros por usuario
// ============================================================

// Datos de prueba: cada usuario tiene nombre, y un array de días por libro
const usuariosPrueba = [
  { nombre: "Andrés Gómez",    libros: [7, 12]       },  // 1 puntual, 1 con retraso
  { nombre: "Paola Restrepo",  libros: [5, 7, 3]     },  // todos puntuales
  { nombre: "Miguel Torres",   libros: [20, 9]        },  // retraso severo + normal
  { nombre: "Daniela Cano",    libros: [7]            },  // puntual
  { nombre: "Fernando Ruiz",   libros: [8, 22, 6]    },  // mixto con retraso extremo
  { nombre: "Camila Herrera",  libros: [7, 7]         },  // todos puntuales
  { nombre: "Diego Salazar",   libros: [16, 3]        },  // retraso > 15
  { nombre: "Sofía Ríos",      libros: [10, 7, 12]   },  // mixto
];

// ── Constantes ─────────────────────────────────────────────
const DIAS_GRATIS      = 7;
const MULTA_DIARIA     = 1500;
const MULTA_ADICIONAL  = 10000;

// ── Variables globales ─────────────────────────────────────
const cantidadUsuarios = usuariosPrueba.length;
let   totalMultas      = 0;
let   totalLibros      = 0;
let   librosConRetraso = 0;
let   librosPuntuales  = 0;

// ── Ciclo for externo: por usuario ────────────────────────
for (let i = 0; i < cantidadUsuarios; i++) {

  const nombreUsuario = usuariosPrueba[i].nombre;
  let   cantidadLibros = usuariosPrueba[i].libros.length;

  // Paso 3: validar máximo 3 libros con ciclo while
  while (cantidadLibros > 3) {
    console.log(`⚠ ${nombreUsuario} intenta devolver ${cantidadLibros} libros. Máximo permitido: 3.`);
    cantidadLibros = 3; // corrección automática en la simulación
  }

  let multaUsuario = 0;

  console.log(`\n--- USUARIO ${i + 1}: ${nombreUsuario} ---`);
  console.log(`Libros devueltos: ${cantidadLibros}`);

  // Paso 4: ciclo for anidado por cada libro
  for (let j = 0; j < cantidadLibros; j++) {

    const diasPrestamo = usuariosPrueba[i].libros[j];
    const diasRetraso  = diasPrestamo > DIAS_GRATIS ? diasPrestamo - DIAS_GRATIS : 0;

    // Paso 5: calcular multa
    let multaLibro = 0;

    if (diasRetraso === 0) {
      multaLibro = 0;
      librosPuntuales++;
    } else if (diasRetraso <= 15) {
      multaLibro = diasRetraso * MULTA_DIARIA;
      librosConRetraso++;
    } else {
      multaLibro = (diasRetraso * MULTA_DIARIA) + MULTA_ADICIONAL;
      librosConRetraso++;
    }

    multaUsuario += multaLibro;
    totalLibros++;

    // Paso 7: detalle del libro
    const estadoLibro = diasRetraso === 0
      ? "Sin retraso"
      : `${diasRetraso} días de retraso`;

    console.log(`  Libro ${j + 1}: ${diasPrestamo} días — ${estadoLibro} — Multa: $${multaLibro.toLocaleString("es-CO")}`);
  }

  // Paso 6 y 8: clasificación del usuario con operador ternario
  const estadoUsuario = multaUsuario === 0 ? "PUNTUAL" : "CON RETRASO";

  console.log(`Multa total usuario: $${multaUsuario.toLocaleString("es-CO")} — ${estadoUsuario}`);

  totalMultas += multaUsuario;
}

// ── Resumen final ──────────────────────────────────────────
console.log("\n=== RESUMEN BIBLIOTECH ===");
console.log(`Usuarios atendidos : ${cantidadUsuarios}`);
console.log(`Total libros       : ${totalLibros}`);
console.log(`Libros puntuales   : ${librosPuntuales}`);
console.log(`Libros con retraso : ${librosConRetraso}`);
console.log(`MULTAS RECAUDADAS  : $${totalMultas.toLocaleString("es-CO")}`);
