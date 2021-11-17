import path from "path"
import project from './project.config'

const SRC_DIR = path.resolve(__dirname, 'src')
const envDevelopment = project.env === 'development'

const config = {
    entry: {
        normalize: [path.resolve(SRC_DIR, 'normalize')],//解决了IE上不支持Object.assign新兴H5的API
        main: [SRC_DIR]
    },
    output: {
        path: path.resolve(project.basePath, project.outDir),
        filename: envDevelopment ? 'js/[name].js' : "js/[name].[chunkhash:5].js",
        publicPath: project.publicPath
    },
}

export default config