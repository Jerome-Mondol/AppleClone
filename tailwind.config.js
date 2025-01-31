export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          blue: {
            DEFAULT: "#2997FF", // Generates `bg-blue`
            500: "#2997FF",     // Generates `bg-blue-500`
          },
          gray: {
            DEFAULT: "#86868b", // Generates `text-gray`
            100: "#94928d",     // Generates `text-gray-100`
            200: "#afafaf",     // Generates `text-gray-200`
            300: "#42424570",   // Generates `text-gray-300`
          },
          zinc: "#101010", // Generates `bg-zinc`
        },
      },
    },
    plugins: [],
  };
