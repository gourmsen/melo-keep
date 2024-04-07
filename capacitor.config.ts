import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "io.melo-keep",
    appName: "melo-keep",
    webDir: "www/browser",
    server: {
        androidScheme: "https",
    },
};

export default config;
