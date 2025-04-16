const path = require('path');

const resolve = (pathName) => path.resolve(__dirname, pathName);
const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        { plugin: CracoLessPlugin ,options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },}
    ],
    webpack: {
        alias:{
            '@': resolve( 'src'),
            '@assets': resolve( 'src/assets'),
            '@components': resolve( 'src/components'),
            '@views': resolve( 'src/views'),
            '@utils': resolve( 'src/utils'),
            '@services': resolve( 'src/services'),
            '@store': resolve( 'src/store'),
            '@router': resolve( 'src/router'),
            '@hooks': resolve( 'src/hooks'),
            '@components': resolve( 'src/components'),
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }
}