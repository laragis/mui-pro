import { defineConfig } from 'tsup'
import { legacyConfig, modernConfig } from '@laragis/tsup-config'

const commonConfig = {
  entry: ['src/**/*.{ts,tsx}'], esbuildPlugins: []
}
export default defineConfig([
  modernConfig(commonConfig),
  legacyConfig(commonConfig),
])
