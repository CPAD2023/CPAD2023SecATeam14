import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.lifehousechurch.app",
  appName: "Lifehouse Church",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
