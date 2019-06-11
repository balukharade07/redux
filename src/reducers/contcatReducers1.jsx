import images2 from "../../src/images/BlenzCoffee.svg";
import images3 from "../../src/images/BostonPizza.svg";
import images5 from "../../src/images/ashcroft-bw.png";
import { GET_CONTACTS } from "../action/types";

const initialState = {
	contacts: [
		{
			h2: "BlenzCoffee",
			img: images2,
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			name: "BlenzCoffee"
		},
		{
			h2: "BostonPizza",
			img: images3,
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			name: "BostonPizza"
		},
		{
			h2: "ashcroft-bw",
			img: images5,
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			name: "ashcroft-bw"
		},
		{
			h2: "BlenzCoffee",
			img: images2,
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			name: "BlenzCoffee"
		},
		{
			h2: "BostonPizza",
			img: images3,
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			name: "BostonPizza"
		},
		{
			h2: "ashcroft-bw",
			img: images5,
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			name: "ashcroft-bw"
		}
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state
			};

		default:
			return state;
	}
}
