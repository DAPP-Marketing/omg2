// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Astro と Tailwind CSS v4 の最小構成。
 * 静的出力を基本とし、不要なクライアント JavaScript を増やさない。
 */
export default defineConfig({
	site: 'https://omg-recruit-ume.pieceinnovat-4505.chatgpt.site',
	output: 'static',
	vite: {
		plugins: [tailwindcss()],
	},
});
