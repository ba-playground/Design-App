import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex flex-col min-h-screen bg-background">
				<header className="flex items-center justify-end p-4 gap-2 border-b">
					<ModeToggle />
					<div className="flex gap-2">
						<Link to="/login">
							<Button variant="outline">Sign In</Button>
						</Link>
						<Link to="/signup">
							<Button>Sign Up</Button>
						</Link>
					</div>
				</header>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}
