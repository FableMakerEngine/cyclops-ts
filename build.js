const esbuild = require('esbuild');

const banner = `
/**
 * ==================================================================
 * Cyclops - A Game Framework From the Creators of Fable Maker
 * 
 * Build Date: ${new Date().toLocaleString()}
 * 
 * Version: ${process.env.npm_package_version}
 * 
 * ==================================================================
*/
`

const isProduction = process.env.NODE_ENV === 'production'

esbuild.build({
  entryPoints: ['./src/index.ts'],
  outfile: 'dist/cyclops.js',
  bundle: true,
  // minify: isProduction,
  format: 'esm',
  platform: 'node',
  sourcemap: true,
  target: 'node14',
  external: ['pixi.js', '@pixi/tilemap'],
  banner: { js: banner },
}).catch(() => process.exit(1))
