// Switch statement

const day = "wednesday";

switch (day) {
	// @ts-ignore
	case "monday":
		console.log("Let's get to work!");
		break;
	// @ts-ignore
	case "tuesday":
		console.log("Receive Leen's painting award");
		break;
	// @ts-ignore
	case "wednesday":
		console.log("Free day");
		break;
	// @ts-ignore
	case "thursday":
	// @ts-ignore
	case "friday":
		console.log("Coding");
		break;
	// @ts-ignore
	case "saturday":
	// @ts-ignore
	case "sunday":
		"Enjoy the weekend!";
		break;
	default:
		console.log("Invalid day entry");
}

console.log(day === "wednesday" ? "yes" : "no");
