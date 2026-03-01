// ============================================================
// EJERCICIO 1 — Lavandería Express
// Alquiler de lavadoras industriales por horas
// Costo: $5.000/hora | Descuento 30% si horas > 12
// ============================================================

// Datos de prueba (simulan el prompt() del usuario)
const clientesPrueba = [
  { nombre: "María López",    horas: 15 },
  { nombre: "Carlos Pérez",   horas: 8  },
  { nombre: "Ana Martínez",   horas: 14 },
  { nombre: "Luis Gómez",     horas: 5  },
  { nombre: "Sandra Torres",  horas: 13 },
];

// ── Variables principales ──────────────────────────────────
const costoPorHora        = 5000;
const cantidadClientes    = clientesPrueba.length;
let   acumuladorIngresos  = 0;
let   contadorDescuentos  = 0;

// ── Ciclo for: un cliente por iteración ───────────────────
for (let i = 0; i < cantidadClientes; i++) {

  const nombreCliente  = clientesPrueba[i].nombre;
  const horasAlquiler  = clientesPrueba[i].horas;

  // Paso 4: costo sin descuento
  const costoTotal = horasAlquiler * costoPorHora;

  // Paso 5: descuento si horas > 12
  let descuento  = 0;
  let totalPagar = costoTotal;

  if (horasAlquiler > 12) {
    descuento  = costoTotal * 0.30;
    totalPagar = costoTotal - descuento;
    contadorDescuentos++;
  }

  // Paso 6: operador ternario → etiqueta de descuento
  const etiqueta = horasAlquiler > 12 ? "CON DESCUENTO" : "SIN DESCUENTO";

  // Paso 7: mostrar detalle del cliente
  console.log(`\n--- CLIENTE ${i + 1}: ${nombreCliente} ---`);
  console.log(`Horas alquiladas : ${horasAlquiler}`);
  console.log(`Subtotal         : $${costoTotal.toLocaleString("es-CO")}`);

  if (horasAlquiler > 12) {
    console.log(`Descuento (30%)  : $${descuento.toLocaleString("es-CO")} — ${etiqueta}`);
  } else {
    console.log(`Descuento        : $0 — ${etiqueta}`);
  }

  console.log(`Total a pagar    : $${totalPagar.toLocaleString("es-CO")}`);

  // Paso 8: acumulador
  acumuladorIngresos += totalPagar;
}

// ── Resumen final ──────────────────────────────────────────
console.log("\n=== RESUMEN DEL DÍA ===");
console.log(`Clientes atendidos   : ${cantidadClientes}`);
console.log(`Ingreso total        : $${acumuladorIngresos.toLocaleString("es-CO")}`);
console.log(`Clientes con descuento: ${contadorDescuentos}`);
