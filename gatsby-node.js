exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
    if (stage === 'build-javascript') {
      const baseConfig = getConfig();
      const config = {
        ...baseConfig,
        ...{
          output: {
            ...baseConfig.output,
            publicPath: '/mirecol/',
          },
        },
      };
      actions.replaceWebpackConfig(config);
    }
    };
