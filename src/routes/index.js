/* --- Imports Modules ---  */
const express = require("express");
const router = express.Router();
const respuestas = require("../respuestas.json");
/* --- Setting up routes --- */
router.get("/", (req, res) => {
	res.status(200).send(
		"<h1>Hola Pepa!</h1><p>Bienvenida a tu servidor bien piola! :)</p>"
	);
});

router.get("/respuestas", (req, res) => {
	res.status(200).send(respuestas);
});

router.get("/Apiexterna", (req, res) => {
	fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
		.then((res) => res.json())
		.then((data) => res.send(data));
});

router.get("/listadecompras", (req, res) => {
	let listaDeCompras = [
		{ dia: "Domingo", compras: ["chocolate", "cafe", "leche", "milanesas"] },
		{ dia: "Lunes", compras: ["jugo de naranja", "té"] },
		{ dia: "Martes", compras: ["2kg de asado", "leña", "carbon"] },
		{ dia: "Miercoles", compras: ["pollo", "salsa de tomate"] },
		{ dia: "Jueves", compras: ["jamon", "queso", "pan de miga"] },
		{ dia: "Viernes", compras: ["vino", "compilado los mejores temas de la Mona"] },
		{ dia: "Sabado", compras: ["lemon pie", "gaseosas"] },
	];
	let show = [];
	listaDeCompras.forEach((element, index) => {
		if (index % 2 == 0) {
			show.push(element);
		}
	});
	res.send(show);
});

router.get("/password", (req, res) => {
	const regex = /[contraseñadepepabiensegura]+[1-9]\w+/g;
	let arrayDePruebas = [
		"123ContraseñaMagica",
		"BoquitaElMasGrande1107",
		"@()%#=!PEPALA+GRANDE/PAPA",
	];
	let prueba = [];
	arrayDePruebas.forEach((element) => {
		regex.test(element) ? prueba.push(element) : null;
	});
	res.send(prueba);
});

router.get("*", (req, res) => {
	res.status(404).send("Error 404, No existe esta pagina aún");
});

module.exports = router;
