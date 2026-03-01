// ============================================================
// EJERCICIO 3 — Alcaldía de Armenia
// Subsidio al Adulto Mayor
// 60-80 años → 12% | >80 años → 15% | <60 → no aplica
// Salario mínimo: $1.300.000
// ============================================================

// Datos de prueba
const personasPrueba = [
  { nombre: "Carmen Rodríguez",  edad: 72 },
  { nombre: "José Herrera",      edad: 85 },
  { nombre: "Lucía Vargas",      edad: 65 },
  { nombre: "Pedro Castillo",    edad: 45 },
  { nombre: "Rosa Jiménez",      edad: 91 },
  { nombre: "Alberto Mora",      edad: 78 },
  { nombre: "Gloria Sánchez",    edad: 60 },
  { nombre: "Tomás Ríos",        edad: 83 },
  { nombre: "Inés Salcedo",      edad: 55 },
  { nombre: "Manuel Zapata",     edad: 70 },
];

// ── Variables principales ──────────────────────────────────
const salarioMinimo           = 1300000;
const cantidadPersonas        = personasPrueba.length;
let   contBeneficiarios60_80  = 0;
let   contBeneficiariosMayor80 = 0;
let   contNoAplica            = 0;
let   presupuestoTotal        = 0;

// ── Ciclo for ─────────────────────────────────────────────
for (let i = 0; i < cantidadPersonas; i++) {

  const nombre = personasPrueba[i].nombre;
  const edad   = personasPrueba[i].edad;

  let porcentaje = 0;
  let subsidio   = 0;
  let categoria  = "";
  let aplica     = true;

  // Paso 4: clasificación y cálculo
  if (edad >= 60 && edad <= 80) {
    porcentaje = 12;
    subsidio   = salarioMinimo * 0.12;
    contBeneficiarios60_80++;
    presupuestoTotal += subsidio;
  } else if (edad > 80) {
    porcentaje = 15;
    subsidio   = salarioMinimo * 0.15;
    contBeneficiariosMayor80++;
    presupuestoTotal += subsidio;
  } else {
    aplica = false;
    contNoAplica++;
  }

  // Paso 5: operador ternario para la categoría
  categoria = edad > 80
    ? "Adulto Mayor Senior"
    : (edad >= 60 ? "Adulto Mayor" : "No aplica");

  // Paso 6: mostrar detalle
  console.log(`\n--- PERSONA ${i + 1}: ${nombre} ---`);
  console.log(`Edad      : ${edad} años`);
  console.log(`Categoría : ${categoria}`);

  if (aplica) {
    console.log(`Subsidio (${porcentaje}%): $${subsidio.toLocaleString("es-CO")}`);
  } else {
    console.log("Estado    : No aplica al programa (menor de 60 años)");
  }
}

// ── Resumen final ──────────────────────────────────────────
const totalBeneficiarios = contBeneficiarios60_80 + contBeneficiariosMayor80;
const subsidio60_80      = salarioMinimo * 0.12;
const subsidioMayor80    = salarioMinimo * 0.15;

console.log("\n=== INFORME ALCALDÍA DE ARMENIA ===");
console.log(`Total registrados          : ${cantidadPersonas}`);
console.log(`Beneficiarios (60-80 años) : ${contBeneficiarios60_80} — Subsidio: $${subsidio60_80.toLocaleString("es-CO")} c/u`);
console.log(`Beneficiarios (>80 años)   : ${contBeneficiariosMayor80} — Subsidio: $${subsidioMayor80.toLocaleString("es-CO")} c/u`);
console.log(`Total beneficiarios        : ${totalBeneficiarios}`);
console.log(`No aplican                 : ${contNoAplica}`);
console.log(`PRESUPUESTO TOTAL          : $${presupuestoTotal.toLocaleString("es-CO")}`);
