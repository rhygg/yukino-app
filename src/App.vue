<template>
    <main>
        <NavBar />

        <article class="font-sans text-white">
            <div
                class="bg-indigo-500 text-center px-10 md:px-20 py-20 md:py-40"
            >
                <div class="text-5xl md:text-7xl font-bold">Yukino</div>
                <p class="mt-8">
                    Stream anime or read manga ad-free from multiple sources.
                </p>

                <div
                    class="
                        mt-8
                        flex flex-col
                        md:flex-row
                        justify-center
                        items-center
                        gap-2
                    "
                >
                    <a
                        class="
                            bg-white
                            hover:bg-gray-200
                            text-black
                            px-5
                            py-2
                            rounded-lg
                            shadow-lg
                            transition
                            duration-300
                        "
                        href="#download"
                        ><span class="mr-1"><i class="fas fa-save"></i></span>
                        Download</a
                    >
                    <a
                        class="
                            bg-black
                            hover:bg-gray-800
                            px-5
                            py-2
                            rounded-lg
                            shadow-lg
                            transition
                            duration-300
                            mt-2
                            md:mt-0
                        "
                        href="https://github.com/zyrouge/yukino-app/"
                        target="_blank"
                        ><span class="mr-1"><i class="fab fa-github"></i></span>
                        GitHub</a
                    >
                </div>
            </div>
        </article>

        <div class="text-gray-700 text-center mx-8 md:mx-20 my-16">
            <p class="text-lg">
                The project's name <strong>Yukino</strong> means
                <strong>Snow</strong> named after the character
                <strong>Yukino Yukinoshita</strong>
                from the anime
                <strong
                    >Yahari Ore no Seishun Love Comedy wa Machigatteiru</strong
                >.
            </p>

            <p class="mt-10 text-red-500 font-bold">
                We do not support piracy or run/serve any illegal or copyrighted
                contents, everything is acquired from third-party sources.
            </p>

            <hr class="my-10" />
            <div>
                <h1 class="text-2xl font-bold">Features</h1>
                <ul class="mt-4 list-inside list-disc">
                    <li v-for="feature in features">
                        <span class="-ml-1.5" v-html="feature"></span>
                    </li>
                </ul>
            </div>

            <hr class="my-10" />
            <div>
                <h1 class="text-2xl font-bold">Preview</h1>
                <div class="flex flex-col justify-center items-center">
                    <img
                        class="mt-4 rounded w-full md:w-5/6"
                        v-for="(ss, i) in screenshots"
                        :src="ss"
                        :alt="`Screenshot ${i}`"
                    />
                </div>
            </div>

            <hr class="my-10" />
            <div>
                <h1 class="text-2xl font-bold" id="download">Download</h1>
                <div class="mt-4" v-for="(download, i) in downloads">
                    <p class="font-bold cursor-pointer" @click="setOpened(i)">
                        <span class="mr-1.5 text-xs">
                            <i
                                class="fas fa-angle-double-down"
                                v-if="isOpenedIndex === i"
                            ></i>
                            <i
                                class="fas fa-angle-double-right"
                                v-else
                            ></i> </span
                        >{{ download.version }}
                    </p>
                    <div
                        class="
                            flex flex-col
                            lg:flex-row
                            justify-center
                            items-center
                            gap-3
                            mt-2
                        "
                        v-if="isOpenedIndex === i"
                    >
                        <a
                            class="
                                bg-indigo-500
                                hover:bg-indigo-600
                                text-white
                                px-5
                                py-2
                                rounded-lg
                                shadow-lg
                                transition
                                duration-300
                            "
                            :href="src.url"
                            target="_blank"
                            v-for="[platform, src] in Object.entries(
                                download.platforms
                            )"
                        >
                            <p>
                                <span class="mr-1"
                                    ><i :class="getIcon(platform)"></i
                                ></span>
                                Download for
                                <span class="capitalize">{{ platform }}</span>
                            </p>
                            <p class="text-xs opacity-75">
                                {{ getMb(src.size) }} MB
                            </p>
                        </a>
                    </div>
                </div>

                <p class="mt-4">
                    <a
                        class="
                            text-indigo-500
                            hover:text-indigo-600
                            font-bold
                            transition
                            duration-300
                        "
                        :href="releases.web"
                        target="_blank"
                        >View all releases</a
                    >
                </p>
            </div>

            <hr class="my-10" />
            <div>
                <h1 class="text-2xl font-bold">Contributing</h1>
                <p class="mt-4">
                    Please read the
                    <a
                        class="
                            text-indigo-500
                            hover:text-indigo-600
                            font-bold
                            transition
                            duration-300
                        "
                        href="https://github.com/zyrouge/yukino-app/#readme"
                        target="_blank"
                        >readme</a
                    >
                    for information about contributing!
                </p>
            </div>
        </div>

        <div class="bg-indigo-500 text-center text-white px-10 py-10">
            <p>
                <strong>Yukino</strong> is licensed under <strong>MIT</strong>.
            </p>

            <p class="mt-1">
                Made with <i class="fas fa-heart"></i> by
                <a
                    class="font-bold"
                    href="https://zyrouge.is-a.dev"
                    target="_blank"
                    >Zyrouge</a
                >.
            </p>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

interface DownloadEntity {
    version: string;
    platforms: Record<
        string,
        {
            size: number;
            url: string;
        }
    >;
}

export default defineComponent({
    name: "App",
    components: {
        NavBar,
    },
    data() {
        const data: {
            screenshots: string[];
            features: string[];
            releases: {
                web: string;
                all: string;
            };
            downloads: DownloadEntity[];
            isOpenedIndex: number | null;
        } = {
            screenshots: [
                "https://github.com/zyrouge/yukino-app/raw/next/screenshots/home.png",
                "https://github.com/zyrouge/yukino-app/raw/next/screenshots/search.png",
                "https://github.com/zyrouge/yukino-app/raw/next/screenshots/anime.png",
                "https://github.com/zyrouge/yukino-app/raw/next/screenshots/episodes.png",
                "https://github.com/zyrouge/yukino-app/raw/next/screenshots/sources.png",
                "https://github.com/zyrouge/yukino-app/raw/next/screenshots/player.png",
                "https://github.com/zyrouge/yukino-app/raw/next/screenshots/manga.png",
            ],
            features: [
                "Supports ad-free anime streaming",
                "In-built manga reader",
                "Handful of sources (4Anime, GogoAnime, Mangafox, ...)",
                "Open-sourced under MIT license",
                "Catchy but clean UI",
                "Optimized for performance",
                "Light and dark mode",
                "Discord RPC",
            ],
            releases: {
                web: "https://github.com/zyrouge/yukino-app/releases",
                all: "https://api.github.com/repos/zyrouge/yukino-app/releases",
            },
            downloads: [],
            isOpenedIndex: 0,
        };

        return data;
    },
    mounted() {
        this.getReleases();
    },
    methods: {
        async getReleases() {
            try {
                const res = (await fetch(this.releases.all).then((res) =>
                    res.json()
                )) as any[];
                const releases = res
                    .filter((x) => !x.draft)
                    .sort(
                        (a, b) =>
                            new Date(a.updated_at).getTime() -
                            new Date(b.updated_at).getTime()
                    );

                releases.forEach((release) => {
                    const version = release.tag_name;
                    const windows = release.assets.find((x: any) =>
                        x.browser_download_url.endsWith(".exe")
                    );

                    const linux = release.assets.find((x: any) =>
                        x.browser_download_url.endsWith(".AppImage")
                    );

                    if (version) {
                        const r: DownloadEntity = {
                            version,
                            platforms: {},
                        };

                        if (windows)
                            r.platforms.windows = {
                                url: windows.browser_download_url,
                                size: windows.size,
                            };

                        if (linux)
                            r.platforms.linux = {
                                url: linux.browser_download_url,
                                size: linux.size,
                            };
                        this.downloads.push(r);
                    }
                });
            } catch (err) {
                console.error(err);
            }
        },
        setOpened(index: number) {
            if (this.isOpenedIndex === index)
                return (this.isOpenedIndex = null);
            this.isOpenedIndex = index;
        },
        getMb(size: number) {
            return (size / 1000000).toFixed(2);
        },
        getIcon(platform: string) {
            switch (platform) {
                case "windows":
                    return "fab fa-windows";

                case "linux":
                    return "fab fa-linux";

                default:
                    return "";
            }
        },
    },
});
</script>
