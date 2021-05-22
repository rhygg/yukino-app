<template>
    <div class="fixed top-0 left-0 right-0 bg-white shadow-md" id="nav">
        <div class="flex flex-row justify-around items-center gap-4 py-3">
            <div>
                <img class="w-10" src="/icon.png" alt="Logo" />
            </div>
            <div class="flex flex-row justify-center items-center gap-2">
                <a
                    class="
                        bg-indigo-500
                        hover:bg-indigo-600
                        text-white
                        px-4
                        py-1.5
                        rounded
                        transition
                        duration-200
                    "
                    href="#download"
                    ><i class="fas fa-save mr-1"></i> Download</a
                >

                <a
                    class="
                        bg-black
                        hover:bg-gray-800
                        text-white
                        px-4
                        py-1.5
                        rounded
                        transition
                        duration-200
                    "
                    href="https://github.com/zyrouge/yukino-app/"
                    target="_blank"
                    ><span class="mr-1"><i class="fab fa-github"></i></span>
                    GitHub</a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    mounted() {
        document.addEventListener("scroll", () => {
            const ele = document.getElementById("nav");

            if (
                document.body.scrollTop > 600 ||
                document.documentElement.scrollTop > 600
            ) {
                ele?.classList.add("active");
            } else {
                ele?.classList.remove("active");
            }
        });
    },
});
</script>

<style scoped>
#nav {
    transform: translateY(-100px);

    @apply transition duration-200;
}

#nav.active {
    transform: translateY(0);
}
</style>
