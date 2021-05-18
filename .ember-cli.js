const defaultConfig = {
  "disableAnalytics": false
};

if (process.env.GITPOD_WORKSPACE_URL) {
  let workspaceURL = new URL(process.env.GITPOD_WORKSPACE_URL);
  let port = 4200;
  let host = `${port}-${workspaceURL.host}`;
  console.log(process.env);
  defaultConfig.liveReloadJsUrl = `https://${host}/_lr/livereload.js`
  defaultConfig.liveReloadOptions = {
    "port": 443,
    "https": true,
    "host": host
  }
}

module.exports =  defaultConfig;
