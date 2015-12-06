var context = require.context('./app/tests', true, /-spec\.js$/);
context.keys().forEach(context);