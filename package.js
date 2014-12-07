Package.describe({
  name: 'sanjo:long-running-child-process',
  summary: 'Spawn child processes that survive restarts and exit when the app exits.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {
  api.export('LongRunningChildProcess', 'server')

  api.versionsFrom('1.0');
  api.use('coffeescript', 'server')
  api.use('underscore', 'server')
  api.use('check', 'server')
  api.use('practicalmeteor:loglevel@1.1.0_2', 'server')

  api.addFiles([
    'lib/meteor/files.js',
    'lib/LongRunningChildProcess.coffee',
    'main.js'
  ], 'server')

  api.addFiles(['lib/spawnScript.js'], 'server', {isAsset: true})
});