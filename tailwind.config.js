const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./index.html", "./src/**/*{vue,css,js}"],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: "Poppins, sans-serif",
        },
        extend: {
            extend: {
                indigo: colors.indigo,
                gray: colors.coolGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
