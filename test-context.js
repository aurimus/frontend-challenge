var context = require.context('./app/test', true, /-spec\.js$/);
context.keys().forEach(context);