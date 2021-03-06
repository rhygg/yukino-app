const { productName } = require("../../package.json");

module.exports = {
    productName,
    appId: "io.github.zyrouge.yukino",
    copyright: "Copyright © 2021 Zyrouge",
    files: [
        "dist/vite/**/*",
        "resources/**/*",
        "environments/electron/**/*",
        "node_modules/**/*",
        "package.json",
    ],
    directories: {
        buildResources: "resources",
        output: "dist/electron",
    },
    extraMetadata: {
        main: "environments/electron/main.js",
    },
    publish: ["github"],
    win: {
        target: "nsis",
    },
    nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: true,
    },
    linux: {
        target: "AppImage",
    },
    mac: {
        target: "dmg",
        category: "public.app-category.entertainment",
    },
    generateUpdatesFilesForAllChannels: true,
};
