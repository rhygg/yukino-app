/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from "@capacitor/cli";
import { productName } from "./package.json";

const config: CapacitorConfig = {
    appId: "io.github.zyrouge.yukino",
    appName: productName,
    webDir: "dist/vite",
    android: {
        path: "environments/capacitor/android",
    },
    plugins: {
        SplashScreen: {
            androidScaleType: "CENTER_CROP",
            launchAutoHide: false,
            splashImmersive: false,
            splashFullScreen: false,
            backgroundColor: "#18181b",
            showSpinner: false,
        },
    },
};

export default config;
