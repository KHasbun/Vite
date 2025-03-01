import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  base: process.env.deploy_base_url,
});
