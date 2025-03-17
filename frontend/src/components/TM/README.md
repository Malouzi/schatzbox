npm install vite-plugin-svgr --save-dev

vite.config.js anpassen:

Öffne deine vite.config.js (oder erstelle sie, falls noch nicht vorhanden) und füge das Plugin hinzu:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
plugins: [react(), svgr()],
});
