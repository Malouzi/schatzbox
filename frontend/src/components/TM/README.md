npm install vite-plugin-svgr --save-dev

vite.config.js anpassen:

Öffne deine vite.config.js (oder erstelle sie, falls noch nicht vorhanden) und füge das Plugin hinzu:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
plugins: [react(), svgr()],
});

npm install -g svgo 
dann zu dem ordner wo das svg liegt wechseln
cd src/assets
danach ggf mit ls die Inhalte auflisten lassen 

und dann mit svgo namedesbildes.svg die Datei optimieren und überschreiben
oder mit svgo namedesbildes.svg -o namedesbildes.svg-optimized.svg eine neue Datei erstellen und die alte Datei bleibt aber erhalten

aus xlink:ref= WIRD xlinkHref
aus 
		<image style="overflow:visible;" WIRD <image style={{ overflow:'visible' }}

		npm install framer-motion


npx @svgr/cli src/assets/TreasureChest.svg --out-dir src/components/TM

npx @svgr/cli src/assets/Eichhörnchen.svg --out-dir src/components/TM

npx @svgr/cli src/assets/Truhenboden.svg --out-dir src/components/TM

npx @svgr/cli src/assets/Deckel.svg --out-dir src/components/TM

npx @svgr/cli src/assets/Münze.svg --out-dir src/components/TM

npx @svgr/cli src/assets/Nurdeckel.svg --out-dir src/components/TM


npx @svgr/cli src/assets/Pfad3.svg --out-dir src/components/TM

npx @svgr/cli src/assets/Kompass1.svg --out-dir src/components/TM

+ svgo.config.cjs