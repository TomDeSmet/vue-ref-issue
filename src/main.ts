import type { Plugin } from "vue";

// Export all components from the components directory to be able to import them separately inside another project.
export * from "./components";

export const TestLib: Plugin = {
  install() {},
};
