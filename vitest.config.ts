import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [...configDefaults.include, "src/**/*.{ts,tsx,js,jsx}"],
    exclude: [...configDefaults.exclude, "src/**/*.d.ts"],
  },
});
