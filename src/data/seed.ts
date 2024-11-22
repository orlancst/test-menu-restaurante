// // prisma/seed.ts
// import { PrismaClient } from "@prisma/client";

// // initialize Prisma Client
// const prisma = new PrismaClient();

// async function main() {
//   // Seed MenuCategory
//   await prisma.menuCategory.createMany({
//     data: [
//       { name: "DESAYUNO" },
//       { name: "AVES" },
//       { name: "CARNES" },
//       { name: "PESCADO" },
//       { name: "PARA COMPARTIR" },
//       { name: "ADICIONALES" },
//       { name: "INCLUIDOS" }
//     ]
//   });

//   // Seed MenuItem
//   await prisma.menuItem.createMany({
//     data: [
//       {
//         id: "100",
//         name: "HUEVOS AL GUSTO",
//         description:
//           "Omelette | Fritos | Revueltos. Huevos acompañados de arepa, pan, frutas frescas de temporada y café con leche o chocolate.",
//         price: 20000,
//         categoryId: 1
//       },
//       {
//         id: "101",
//         name: "SANDWICH JAMON CON QUESO",
//         description:
//           "2 sándwich de jamón con queso mozzarella. Acompañados de frutas de temporada y café con leche o chocolate.",
//         price: 20000,
//         categoryId: 1
//       },
//       {
//         id: "102",
//         name: "PECHUGA A LA PLANCHA",
//         description:
//           "300 gr de pechuga de pollo a la plancha sazonada con sal, pimienta y especias al gusto. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 30000,
//         categoryId: 2
//       },
//       {
//         id: "103",
//         name: "PECHUGA EN SALSA DE CHAMPIÑONES",
//         description:
//           "300 gr de pechuga de pollo sazonada con sal, pimienta y especias al gusto bañada en salsa de champiñones. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 30000,
//         categoryId: 2
//       },
//       {
//         id: "104",
//         name: "STEAK PIMIENTA",
//         description:
//           "250gr de lomo fino picado en una base de caldo de carne, crema de leche, granos de pimienta y especias. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 40000,
//         categoryId: 3
//       },
//       {
//         id: "105",
//         name: "BABY BEEF",
//         description:
//           "250gr de filete de lomo fino a la plancha sazonado con sal, pimienta y especias al gusto. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 40000,
//         categoryId: 3
//       },
//       {
//         id: "106",
//         name: "FILET MIGNON",
//         description:
//           "250gr de lomo fino picado con tocineta sazonado con sal pimienta y especias al gusto, bañada en salsa de champiñones. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 42000,
//         categoryId: 3
//       },
//       {
//         id: "107",
//         name: "FILETE A LA PLANCHA",
//         description:
//           "Filete de pescado fresco a la plancha sazonado con sal, pimienta y especias al gusto. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 30000,
//         categoryId: 4
//       },
//       {
//         id: "108",
//         name: "FILETE AL AJILLO",
//         description:
//           "Filete de pescado fresco a la plancha sazonado con sal y pimienta en salsa de vino blanco y ajo. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 30000,
//         categoryId: 4
//       },
//       {
//         id: "109",
//         name: "FILETE EN SALSA CRIOLLA",
//         description:
//           "Filete de pescado fresco sazonado con sal y pimienta en salsa criolla con tomates jugosos y especias aromáticas. Acompañado de ensalada del chef y papas a la francesa o patacones.",
//         price: 30000,
//         categoryId: 4
//       },
//       {
//         id: "110",
//         name: "CHICKEN TENDERS",
//         description:
//           "TTrozos de pollo sazonados con sal, pimienta y especias al gusto recubiertos de nuestro empanizado crujiente. Acompañado de papas a la francesa, salsa de miel mostaza y BBQ.",
//         price: 30000,
//         categoryId: 5
//       },
//       {
//         id: "111",
//         name: "CLUB SÁNDWICH",
//         description:
//           "2 sándwich de pan tajado de nuestra selección con jamón, queso mozzarella, pechuga de pollo, huevo frito, salami, lechuga y tomate. Acompañado de papas a la francesa.",
//         price: 30000,
//         categoryId: 5
//       },
//       {
//         id: "112",
//         name: "PICADA MIXTA",
//         description:
//           "Lomo fino, pechuga a la plancha, chorizo y butifarra en salsa criolla. Acompañado de papas a la francesa o patacones.",
//         price: 42000,
//         categoryId: 5
//       },
//       {
//         id: "113",
//         name: "PORCION PATACON",
//         description:
//           "250 gr de deliciosas y crujientes porciones de plátano verde frito, un sabor caribeño inigualable.",
//         price: 6000,
//         categoryId: 6
//       },
//       {
//         id: "114",
//         name: "PORCION PAPAS A LA FRANCESA",
//         description: "250 gr de crujientes y doradas papas fritas.",
//         price: 7000,
//         categoryId: 6
//       },
//       {
//         id: "115",
//         name: "PORCION DE ARROZ",
//         description:
//           "Deliciosa porción de arroz blanco cocido al punto perfecto, ideal para complementar tus platos favoritos.",
//         price: 5000,
//         categoryId: 6
//       },
//       {
//         id: "200",
//         name: "DESAYUNO CALDO (OBSEQUIO)",
//         description:
//           "Reconfortante caldo servido como cortesía para iniciar tu día, elaborado con ingredientes frescos que resaltan los sabores tradicionales.",
//         price: 0,
//         categoryId: 7
//       },
//       {
//         id: "201",
//         name: "DESAYUNO HUEVOS AL GUSTO (OBSEQUIO)",
//         description:
//           "Omelette | Fritos | Revueltos. Huevos acompañados de arepa, pan, frutas frescas de temporada y café con leche o chocolate.",
//         price: 0,
//         categoryId: 7
//       },
//       {
//         id: "202",
//         name: "DESAYUNO SANDWICH (OBSEQUIO)",
//         description:
//           "Sándwich de jamón con queso mozzarella. Acompañados de frutas de temporada y café con leche o chocolate.",
//         price: 0,
//         categoryId: 7
//       },
//       {
//         id: "203",
//         name: "PAPAS A LA FRANCESA (OBSEQUIO)",
//         description: "250 gr de crujientes y doradas papas fritas.",
//         price: 0,
//         categoryId: 7
//       },
//       {
//         id: "204",
//         name: "PICADA MIXTA (OBSEQUIO)",
//         description:
//           "Lomo fino, pechuga a la plancha, chorizo y butifarra en salsa criolla. Acompañado de papas a la francesa o patacones.",
//         price: 0,
//         categoryId: 7
//       },
//       {
//         id: "205",
//         name: "CLUB SANDWICH (OBSEQUIO)",
//         description:
//           "Sándwich de pan tajado de nuestra selección con jamón, queso mozzarella, pechuga de pollo, huevo frito, salami, lechuga y tomate. Acompañado de papas a la francesa.",
//         price: 0,
//         categoryId: 7
//       }
//     ]
//   });

//   // Seed OrderStatus
//   await prisma.orderStatus.createMany({
//     data: [{ name: "CONFIRMADO" }, { name: "HORUS" }]
//   });

//   // Seed Establishment
//   await prisma.establishment.createMany({
//     data: [
//       {
//         name: "Hotel ByHours Chiquinquirá",
//         address: "Cl. 44 #35-44, Sur Orient, Barranquilla, Atlántico, Colombia",
//         phone: "+57 313 8701803",
//         city: "Barranquilla",
//         hash: "55ea2b05c53c3d71fe2677ef9a97e8cd"
//       },
//       {
//         name: "Motel CarpeDiem Barrio Chiquinquirá",
//         address: "Cl. 44 #35-44, Sur Orient, Barranquilla, Atlántico, Colombia",
//         phone: "+57 310 3662228",
//         city: "Barranquilla",
//         hash: "451ad7cc654c77a73d43a4cd5b94d2c6"
//       },
//       {
//         name: "Hotel ByHours Circunvalar",
//         address:
//           "Calle 110 No. 6-335 Parque Internacional del Caribe, Barranquilla 080014",
//         phone: "+57 310 2385134",
//         city: "Barranquilla",
//         hash: "43f02c388d06ee1eebf382f301b1c1d3"
//       },
//       {
//         name: "Motel CarpeDiem Circunvalar",
//         address:
//           "Parque internacional del caribe PIC, Cl. 110 #6-335, Suroccidente, Barranquilla, Atlántico, Colombia",
//         phone: "+57 310 2842072",
//         city: "Barranquilla",
//         hash: "1c4839f03c1d8b68291d368b0d289840"
//       },
//       {
//         name: "Motel CarpeDiem Barrio Abajo",
//         address:
//           "Cl. 43 #5039, Nte. Centro Histórico, Barranquilla, Atlántico, Colombia",
//         phone: "+57 605 3702480",
//         city: "Barranquilla",
//         hash: "6b727e2a496a99883b7458c1b4e0332a"
//       },
//       {
//         name: "Hotel ByHours Astor",
//         address: "55-129 Carrera 53, Barranquilla 080002",
//         phone: "+57 300 3589279",
//         city: "Barranquilla",
//         hash: "86e59b58c97bc1c0d1191086e64b3aa0"
//       },
//       {
//         name: "Hotel ByHours Las Américas",
//         address: "70b30 Calle 6a, Bogotá 110831",
//         phone: "+57 601 6080502",
//         city: "Bogotá",
//         hash: "34122ebadd45ada8f2b40cac70687dc4"
//       }
//     ]
//   });

//   // Seed Room
//   await prisma.room.createMany({
//     data: [
//       {
//         establishmentId: 3,
//         number: "101",
//         code: "24501",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 101,
//         folioNumber: 111,
//         guestCount: 2,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 3,
//         number: "102",
//         code: "98521",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 102,
//         folioNumber: 112,
//         guestCount: 1,
//         breakfastIncluded: false
//       },
//       {
//         establishmentId: 3,
//         number: "103",
//         code: "32015",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 103,
//         folioNumber: 113,
//         guestCount: 2,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 3,
//         number: "104",
//         code: "45780",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 104,
//         folioNumber: 114,
//         guestCount: 1,
//         breakfastIncluded: false
//       },
//       {
//         establishmentId: 3,
//         number: "105",
//         code: "35124",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 105,
//         folioNumber: 115,
//         guestCount: 2,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 3,
//         number: "106",
//         code: "96412",
//         status: "VACANTE",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 106,
//         folioNumber: 116,
//         guestCount: 1,
//         breakfastIncluded: false
//       },
//       {
//         establishmentId: 3,
//         number: "107",
//         code: "35110",
//         status: "SUCIA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 107,
//         folioNumber: 117,
//         guestCount: 0,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 3,
//         number: "108",
//         code: "67412",
//         status: "BLOQUEADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 108,
//         folioNumber: 118,
//         guestCount: 0,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 3,
//         number: "109",
//         code: "63781",
//         status: "RESERVADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 109,
//         folioNumber: 119,
//         guestCount: 0,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 3,
//         number: "110",
//         code: "40590",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 110,
//         folioNumber: 120,
//         guestCount: 2,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 4,
//         number: "201",
//         code: "10000",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 101,
//         folioNumber: 111,
//         guestCount: 2,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 4,
//         number: "202",
//         code: "20000",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 102,
//         folioNumber: 112,
//         guestCount: 1,
//         breakfastIncluded: false
//       },
//       {
//         establishmentId: 4,
//         number: "203",
//         code: "30000",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 103,
//         folioNumber: 113,
//         guestCount: 2,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 4,
//         number: "204",
//         code: "40000",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 104,
//         folioNumber: 114,
//         guestCount: 1,
//         breakfastIncluded: false
//       },
//       {
//         establishmentId: 4,
//         number: "205",
//         code: "50000",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 105,
//         folioNumber: 115,
//         guestCount: 2,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 4,
//         number: "206",
//         code: "60000",
//         status: "VACANTE",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 106,
//         folioNumber: 116,
//         guestCount: 1,
//         breakfastIncluded: false
//       },
//       {
//         establishmentId: 4,
//         number: "207",
//         code: "70000",
//         status: "SUCIA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 107,
//         folioNumber: 117,
//         guestCount: 0,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 4,
//         number: "208",
//         code: "80000",
//         status: "BLOQUEADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 108,
//         folioNumber: 118,
//         guestCount: 0,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 4,
//         number: "209",
//         code: "90000",
//         status: "RESERVADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 109,
//         folioNumber: 119,
//         guestCount: 0,
//         breakfastIncluded: true
//       },
//       {
//         establishmentId: 4,
//         number: "210",
//         code: "12345",
//         status: "OCUPADA",
//         updatedStatusAt: new Date(),
//         hotelRegistryNumber: 110,
//         folioNumber: 120,
//         guestCount: 2,
//         breakfastIncluded: true
//       }
//     ]
//   });

//   // Seed SurveyQuestions
//   await prisma.surveyQuestion.createMany({
//     data: [
//       {
//         questionText:
//           "¿Qué tan fácil te resultó utilizar esta herramienta para realizar tu pedido?",
//         required: true
//       },
//       {
//         questionText:
//           "¿Consideras que la información en el menú es clara y comprensible?",
//         required: true
//       },
//       {
//         questionText:
//           "¿Te gustaría usar esta herramienta en lugar de llamar a recepción en el futuro?",
//         required: true
//       },
//       {
//         questionText:
//           "¿Tienes alguna sugerencia para mejorar la interfaz o el proceso de pedidos? (Responde brevemente).",
//         required: false
//       }
//     ]
//   });

//   // Seed SurveyAnswers
//   await prisma.surveyAnswer.createMany({
//     data: [
//       {
//         questionId: 1,
//         answers: ["Fácil", "Difícil"]
//       },
//       {
//         questionId: 2,
//         answers: ["De acuerdo", "En desacuerdo"]
//       },
//       {
//         questionId: 3,
//         answers: ["Probablemente sí", "Probablemente no"]
//       },
//       {
//         questionId: 4,
//         answers: []
//       }
//     ]
//   });
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
