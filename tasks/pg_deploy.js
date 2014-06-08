/*
 * grunt-pg-deploy
 * https://github.com/saladinxu/grunt-pg-deploy
 *
 * Copyright (c) 2014 saladinxu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  function generatePsqlCommandPrefix(options) {
    var cmd = options.password ? 'PGPASSWORD=' + options.password : '';
    cmd += ' psql';
    cmd += (' -h ' + options.host);
    cmd += (' -p ' + options.port);
    cmd += (' -d ' + options.database);
    if (options.user) {
      cmd += (' -U ' + options.user);
    }
    cmd += (' -a -f ');
    return cmd;
  }

  grunt.registerMultiTask('pg_deploy', 'plugin for running SQL files against postgres DBs', function() {
    var done = this.async();

    var exec = require('child_process').exec;
        
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      host: 'localhost',
      port: '5432',
      user: null,
      password: null,
      database: 'postgres'
    });

    var cmdPrefix = generatePsqlCommandPrefix(options);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var paths = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      var counter = paths.length;
      paths.forEach(function(filepath) {
        var pCmd = cmdPrefix + filepath;
        grunt.log.writeln('Running psql command for ' + filepath);
        exec(pCmd, function (error, stdout, stderr) {
          if (error) {
            grunt.fail.fatal('Error happened for ' + filepath + ':\n' + error);
            return;
          }
          if (stderr && stderr.indexOf('ERROR') >= 0 ) {
            grunt.fail.fatal('Error happened for ' + filepath + ':\n' + stderr);
            return; 
          }
          grunt.log.ok('psql command completed successfully for ' + filepath);
          if (--counter === 0) {
            done();
          }
        });
      });
    });
  });

};
