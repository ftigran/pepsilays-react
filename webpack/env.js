const {EnvironmentPlugin} = require('webpack')
 
module.exports = function(isDev=true) {
    return {
        plugins: [
            new EnvironmentPlugin({
                basename: isDev?'':'/pages/Pepsilays'
            })
          ],
    };
}