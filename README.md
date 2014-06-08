# grunt-pg-deploy

> plugin for deploy SQL files onto postgres DBs

## IMPORTANT NOTE
This would require 'psql' to be available from system CLI.

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pg-deploy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pg-deploy');
```

## The "pg_deploy" task

### Overview
In your project's Gruntfile, add a section named `pg_deploy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pg_deploy: {
    options: {
      // Task-specific options go here.
    },
    files: {
      // Target SQL files to run
    },
  },
});
```

### Options

#### options.host
Type: `String`
Default value: `'localhost'`

The DB server host to connect to.

#### options.port
Type: `String`
Default value: `'5432'`

the port of the target DB server.

#### options.user (optional)
Type: `String`
Default value: `null`

user name for authentication. for local deployment this can be omitted sometimes.

#### options.password (optional)
Type: `String`
Default value: `null`

password for authentication. for local deployment this can be omitted sometimes.

#### options.database
Type: `String`
Default value: `'postgres'`

the specific database to run files against.

### Usage Examples

#### Using Default Options
In this example, the default options are used to do local deployments:

```js
grunt.initConfig({
  pg_deploy: {
    options: {
      user: 'user1',
      password: 'hello'
    },
    files: {
      tables: ['tables/users/*.sql', 'tables/products/*.sql'],
    },
  },
});
```

#### Fully Customized Options
In this example, we're using all the options avaliable to run tasks

```js
grunt.initConfig({
  pg_deploy: {
    options: {
      host: 'my.db-server.com',
      port: 4321,
      user: 'admin',
      password: 'greetings',
      database: 'shop_db'
    },
    files: {
      tables: ['tables/users/*.sql', 'tables/products/*.sql'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
