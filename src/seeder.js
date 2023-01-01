const logger = require('./logger');

module.exports = function (app) {

  app.seed = async () => {
    logger.info('Feathers application seeding started');

    // Initialize project user
    const find_admin_users = await app.service('users').find({
      query: {
        $limit: 1,
        email: 'projectuser1@example.com'
      }
    });
    if(find_admin_users.total < 1) {
      await app.service('users').create({
        email: 'projectuser1@example.com',
        password: 'supersecret',
      });
      logger.info('New user created');
    }

    logger.info('Feathers application seeding completed');

  };
};