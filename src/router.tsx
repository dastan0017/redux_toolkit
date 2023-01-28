import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Counter } from "./features/counter/Counter";

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<App />
		),
		children: [
			{
				path: "counter",
				element: <Counter />
			},
			{
				path: "about",
				element: <h1>About</h1>
			}
		]
	},
]);
