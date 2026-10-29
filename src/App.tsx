import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen px-6 py-10 sm:px-10 max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Posts Reader</h1>
          <ModeToggle />
        </header>
        <main>
          <Button>It works</Button>
        </main>
      </div>
    </ThemeProvider>
  );
}