// ============================================================
// EJERCICIO 2 — Burger Palace
// Sistema de pedidos con ciclo do...while
// Combos: 1=$15.000 | 2=$22.000 | 3=$35.000 | 4=Finalizar
// ============================================================

// Datos de prueba (simulan las selecciones del usuario)
// Cada elemento: [opcion, cantidad]  |  [4] = finalizar
const pedidosPrueba = [
  [2, 3],  // Doble Poder × 3
  [1, 2],  // Clásica × 2
  [3, 1],  // Mega Fest × 1
  [4],     // Finalizar
];

// ── Variables principales ──────────────────────────────────
let totalCuenta     = 0;
let totalCombos     = 0;
let contadorCombo1  = 0;
let contadorCombo2  = 0;
let contadorCombo3  = 0;
let indicePedido    = 0;  // puntero a los datos de prueba

// Función auxiliar que simula prompt()
function simularPrompt(mensaje, valor) {
  console.log(`> ${mensaje}: ${valor}`);
  return valor;
}

// ── Mostrar menú ───────────────────────────────────────────
function mostrarMenu() {
  console.log("\n====== BURGER PALACE ======");
  console.log("1. Clásica      — $15.000");
  console.log("2. Doble Poder  — $22.000");
  console.log("3. Mega Fest    — $35.000");
  console.log("4. Finalizar pedido");
}

// ── Ciclo do...while ───────────────────────────────────────
let opcion;

do {
  mostrarMenu();

  const datoActual = pedidosPrueba[indicePedido];
  opcion = simularPrompt("Seleccione combo", datoActual[0]);
  indicePedido++;

  // Paso 4 y 5: validar opción
  let precioCombo  = 0;
  let nombreCombo  = "";

  if (opcion === 1) {
    precioCombo = 15000;
    nombreCombo = "Clásica";
  } else if (opcion === 2) {
    precioCombo = 22000;
    nombreCombo = "Doble Poder";
  } else if (opcion === 3) {
    precioCombo = 35000;
    nombreCombo = "Mega Fest";
  } else if (opcion === 4) {
    console.log("\nFinalizando pedido...");
  } else {
    console.log("⚠ Opción no válida. Intente de nuevo.");
    continue;
  }

  // Paso 6 y 7: calcular subtotal si es combo válido
  if (opcion >= 1 && opcion <= 3) {
    const cantidadCombo = simularPrompt("Cantidad", datoActual[1]);
    const subtotal      = precioCombo * cantidadCombo;

    totalCuenta  += subtotal;
    totalCombos  += cantidadCombo;

    // Contadores por tipo
    if (opcion === 1) contadorCombo1 += cantidadCombo;
    if (opcion === 2) contadorCombo2 += cantidadCombo;
    if (opcion === 3) contadorCombo3 += cantidadCombo;

    // Paso 8: mostrar detalle
    console.log(`Combo     : ${nombreCombo}`);
    console.log(`Cantidad  : ${cantidadCombo}`);
    console.log(`Subtotal  : $${subtotal.toLocaleString("es-CO")}`);
    console.log(`Total acumulado: $${totalCuenta.toLocaleString("es-CO")}`);
  }

} while (opcion !== 4);

// ── Cuenta final ───────────────────────────────────────────
console.log("\n=== CUENTA FINAL ===");
console.log(`Combos Clásica     : ${contadorCombo1}`);
console.log(`Combos Doble Poder : ${contadorCombo2}`);
console.log(`Combos Mega Fest   : ${contadorCombo3}`);
console.log(`Total combos       : ${totalCombos}`);
console.log(`TOTAL A PAGAR      : $${totalCuenta.toLocaleString("es-CO")}`);
