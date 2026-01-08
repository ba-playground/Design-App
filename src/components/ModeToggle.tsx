import { useTheme } from "@/components/ThemeProvider";
import BrightnessDownIcon from "@/components/ui/brightness-down-icon";
import { Button } from "@/components/ui/button";
import MoonIcon from "@/components/ui/moon-icon";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<BrightnessDownIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
