Package.describe({
  name: 'sanjo:long-running-child-process',
  summary: 'Spawn child processes that survive restarts and exit when the app exits.',
  version: '1.0.3',
  git: 'https://github.com/Sanjo/meteor-long-running-child-process.git'
});

Npm.depends({
  'fs-extra': '0.12.0'
})

Package.onUse(function(api) {
  api.export('LongRunningChildProcess', 'server')

  api.versionsFrom('1.0.3.2');
  api.use('coffeescript', 'server')
  api.use('underscore', 'server')
  api.use('check', 'server')
  api.use('practicalmeteor:loglevel@1.1.0_2', 'server')

  api.addFiles([
    'lib/log.js',
    'lib/meteor/files.js',
    'lib/LongRunningChildProcess.coffee',
    'main.js'
  ], 'server')

  api.addFiles(['lib/spawnScript.js'], 'server', {isAsset: true})
});
