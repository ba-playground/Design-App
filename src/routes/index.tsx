import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex items-center justify-center h-full">
			<h1 className="text-6xl font-bold text-blue-600 text-center">
				Hello Shadcn
			</h1>
		</div>
	);
}
