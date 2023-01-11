import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'components/index.js'),
            name: '@untitled-llc/unstyled',
            fileName: () => `unstyled.esm.js`,
        },
    },
})
