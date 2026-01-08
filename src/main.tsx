import { createRoot } from "react-dom/client";
import "./index.css";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ConvexReactClient } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { routeTree } from "@/routeTree.gen";

const convex = new ConvexReactClient(
	import.meta.env.VITE_CONVEX_URL as string,
	{
		// Optionally pause queries until the user is authenticated
		expectAuth: true,
	},
);

const router = createRouter({
	routeTree,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById("root")!).render(
	<ConvexBetterAuthProvider client={convex} authClient={authClient}>
		<RouterProvider router={router} />
	</ConvexBetterAuthProvider>,
);
