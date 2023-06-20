import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text"],
    },
    include: [...configDefaults.include, "./src/**/*.(spec|test).[jt]s?(x)"],
    // include: [...configDefaults.include, "src/**/*.{ts,tsx,js,jsx}"],
    exclude: [...configDefaults.exclude, "src/**/*.d.ts"],
    globals: true,
    environment: "happy-dom",
  },
});
