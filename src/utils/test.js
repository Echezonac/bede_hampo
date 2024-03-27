const ingredients = [
	"self-awareness",
	"being informed",
	"being teachable",
	"being honest",
	"being patient",
	"stay consistent",
	"mistakes are okay",
	"being open-minded",
	"being positive",
	"being curious",
	"defined goals",
	"being respectful",
	"celebrate small wins",
	"being kind",
];

const GreatSoftwareEngineer = ingredients.map(
	(ingredient, index) => ({
		id: index + 1,
		characteristic: ingredient,
	})
);

console.log(GreatSoftwareEngineer);
