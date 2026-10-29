import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
plugins: [react(), tailwindcss()],
resolve: {
alias: {
"@": path.resolve(import.meta.dirname, "./src"),
},
},
});

{
  "compilerOptions"; {
    "tsBuildInfoFile"; "./node_modules/.tmp/tsconfig.app.tsbuildinfo"
    "target"; "es2023"
    "lib"; ["ES2023", "DOM"]
    "module"; "esnext"
    "types"; ["vite/client"]
    "allowArbitraryExtensions"; true
    "skipLibCheck"; true
    "moduleResolution"; "bundler"
    "allowImportingTsExtensions"; true
    "verbatimModuleSyntax"; true
    "moduleDetection"; "force"
    "noEmit"; true
    "jsx"; "react-jsx"
    "noUnusedLocals"; true
    "noUnusedParameters"; true
    "erasableSyntaxOnly"; true
    "noFallthroughCasesInSwitch"; true
    "ignoreDeprecations"; "6.0"
    "baseUrl"; ""
    "paths"; {
      "@/*"; ["./src/*"]
    }
  }
  "include"; ["src"]
}
