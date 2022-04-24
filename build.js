const esbuild = require('estrella');

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
  entry: './src/index.ts',
  outfile: 'dist/cyclops.js',
  bundle: true,
  watch: !isProduction,
  // minify: isProduction,
  format: 'esm',
  sourcemap: true,
  external: ['pixi.js', '@pixi/tilemap'],
  banner: { js: banner },
}).catch(() => process.exit(1))
