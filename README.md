<p align="center">
    <img src="./resources/large.png" width="50%">
</p>

# Yukino (fork)

This repository is a fork of the [Yukino app](https://github.com/yukino-org/yukino-app).

## Download

You can download the latest version of app from the [releases](https://github.com/zyrouge/yukino-app/releases) tab.

## Preview

![Home](./screenshots/home.png)
![Search](./screenshots/search.png)
![Anime](./screenshots/anime.png)
![Episodes](./screenshots/episodes.png)
![Sources](./screenshots/sources.png)
![Player](./screenshots/player.png)
![Manga](./screenshots/manga.png)

## Branding

### Colors

[![Primary](https://img.shields.io/badge/Primary-%236366F1-white.svg?style=flat&color=6366F1)](https://img.shields.io/badge/Indigo-%236366F1-white.svg?color=6366F1) [![Secondary](https://img.shields.io/badge/Secondary-%2318181b-white.svg?style=flat&color=18181b)](https://img.shields.io/badge/Indigo-%236366F1-white.svg?color=6366F1)

## Technology

-   [Node.js](https://nodejs.org) (JavaScript Runtime)
-   [Typescript](https://www.typescriptlang.org/) (Runtime)
-   [Yarn](https://yarnpkg.com/) (Package manager)
-   [Vite](https://vitejs.dev) (Base site)
-   [Electron](https://electronjs.org) (Desktop app)
-   [Capacitor](https://capacitorjs.com) (Mobile app)
-   [Tailwind CSS](https://tailwindcss.com/) (Styling)

## Code structure

-   [./src](./src) - Core vue app (SPA)
-   [./environments](./environments)
    -   [./electron](./environments/electron) - Electron-related files (Windows, Linux, MacOS)
    -   [./capacitor](./environments/capacitor)
        -   [./android](./environments/capacitor/android) - Capacitor-related files (Android)
-   [./scripts](./scripts) - Required scripts
-   [./resources](./resources) - Required assets
-   [./screenshots](./resources) - App previews

## Under the hood

-   [anime-ext](https://zyrouge.github.io/anime-ext) - Fetches all the required data

## Contributing

Ways to contribute to this project:

-   Submitting bugs and feature requests in [issues](https://github.com/zyrouge/yukino-app/issues)
-   Opening [pull requests](https://github.com/zyrouge/yukino-app/pulls) containing bug fixes, new features, etc.

## Developer guide

### Cloning & Installing

```bash
git clone https://github.com/zyrouge/yukino-app.git
cd yukino-app
yarn
```

### Running the app in development

```bash
yarn vite:dev # Vite
yarn electron:dev # Electron
# No hot reload for Capacitor
```

### Building the app in development

```bash
yarn vite:build # Vite
yarn electron:build # Electron
yarn capacitor:android:build # Capacitor (android)
```

## License

[MIT](./LICENSE)
