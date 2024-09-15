import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/eslint',
      outDir: 'dist/eslint',
    },
    {
      builder: 'mkdist',
      input: './src/tsconfig',
      outDir: 'dist/tsconfig',
    },
  ],
  clean: true,
  declaration: true,
})
