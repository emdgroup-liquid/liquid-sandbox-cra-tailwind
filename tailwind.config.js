const liquidPreset = require('@emdgroup-liquid/liquid/dist/css/tailwind-preset.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [liquidPreset],
}
