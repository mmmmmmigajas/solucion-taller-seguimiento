// ============================================================
// EJERCICIO 4 — ParquiFácil
// Sistema de Parqueadero
// Moto: $2.000/h | Carro: $4.000/h | Camioneta: $6.000/h
// Descuento 20% si permanencia > 8 horas
// ============================================================

// Datos de prueba: [opcionMenu, tipoVehiculo, horas]
// opcionMenu: 1=Registrar, 2=Cerrar jornada
const jornada = [
  [1, 2, 10],  // Carro, 10 horas
  [1, 1, 3],   // Moto, 3 horas
  [1, 3, 9],   // Camioneta, 9 horas
  [1, 2, 6],   // Carro, 6 horas
  [1, 1, 2],   // Moto, 2 horas
  [1, 1, 1],   // Moto, 1 hora
  [1, 2, 5],   // Carro, 5 horas
  [1, 3, 4],   // Camioneta, 4 horas
  [2],         // Cerrar jornada
];

// ── Variables principales ──────────────────────────────────
let contMotos       = 0;
let contCarros      = 0;
let contCamionetas  = 0;
let ingresoTotal    = 0;
let sumaHoras       = 0;
let totalVehiculos  = 0;
let indice          = 0;

// ── Ciclo while ────────────────────────────────────────────
let opcionMenu = 1; // arranca en "Registrar"

while (opcionMenu !== 2) {

  const datos = jornada[indice];
  opcionMenu  = datos[0];
  indice++;

  // ── Menú
  console.log("\n====== PARQUIFÁCIL ======");
  console.log("1. Registrar vehículo");
  console.log("2. Cerrar jornada");
  console.log(`> Opción seleccionada: ${opcionMenu}`);

  if (opcionMenu === 2) break;

  if (opcionMenu !== 1) {
    console.log("⚠ Opción no válida.");
    continue;
  }

  // ── Registro de vehículo
  const tipoVehiculo    = datos[1];
  const horasPermanencia = datos[2];

  let tarifaHora   = 0;
  let nombreVehiculo = "";

  // Paso 4: asignar tarifa según tipo
  if (tipoVehiculo === 1) {
    tarifaHora     = 2000;
    nombreVehiculo = "Moto";
    contMotos++;
  } else if (tipoVehiculo === 2) {
    tarifaHora     = 4000;
    nombreVehiculo = "Carro";
    contCarros++;
  } else if (tipoVehiculo === 3) {
    tarifaHora     = 6000;
    nombreVehiculo = "Camioneta/SUV";
    contCamionetas++;
  } else {
    console.log("⚠ Tipo de vehículo no válido. Volviendo al menú.");
    continue;
  }

  // Paso 5: costo base
  const costoTotal = tarifaHora * horasPermanencia;

  // Paso 6: descuento si horas > 8
  let descuento  = 0;
  let totalPagar = costoTotal;

  if (horasPermanencia > 8) {
    descuento  = costoTotal * 0.20;
    totalPagar = costoTotal - descuento;
  }

  // Paso 7: operador ternario → tipo de tarifa
  const tipoTarifa = horasPermanencia > 8
    ? "TARIFA DÍA COMPLETO (20% desc.)"
    : "TARIFA POR HORAS";

  // Paso 8: mostrar detalle
  console.log(`\n--- VEHÍCULO REGISTRADO ---`);
  console.log(`Tipo      : ${nombreVehiculo}`);
  console.log(`Horas     : ${horasPermanencia}`);
  console.log(`Subtotal  : $${costoTotal.toLocaleString("es-CO")}`);

  if (descuento > 0) {
    console.log(`Descuento (20%): $${descuento.toLocaleString("es-CO")} — ${tipoTarifa}`);
  } else {
    console.log(`Tarifa    : ${tipoTarifa}`);
  }

  console.log(`Total     : $${totalPagar.toLocaleString("es-CO")}`);

  // Acumuladores
  ingresoTotal   += totalPagar;
  sumaHoras      += horasPermanencia;
  totalVehiculos++;
}

// ── Cierre de jornada ─────────────────────────────────────
const promedioHoras = totalVehiculos > 0
  ? (sumaHoras / totalVehiculos).toFixed(1)
  : 0;

console.log("\n=== CIERRE DE JORNADA ===");
console.log(`Motos      : ${contMotos} | Carros: ${contCarros} | Camionetas: ${contCamionetas}`);
console.log(`Total vehículos      : ${totalVehiculos}`);
console.log(`Ingreso total        : $${ingresoTotal.toLocaleString("es-CO")}`);
console.log(`Promedio permanencia : ${promedioHoras} horas`);
