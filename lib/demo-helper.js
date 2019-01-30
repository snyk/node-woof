module.exports = findProjectId;

function findProjectId() {
  const args = process.argv;

  while (args && !args.shift().endsWith('index.js')) {
  }

  const proposedProjectId = (args[0] || '').trim();

  if ('--without-agent' === proposedProjectId) {
    return null;
  }

  const validate = require('uuid-validate');

  if (!validate(proposedProjectId)) {
    console.log(`
You must specify a valid project ID.

Please run \`snyk monitor\`, collect the id from the results' settings page,
then re-run \`start\` using that ID.

For example (you *must* change the id!):

 npm run startWithAgent 4567901-2345-6789-0123-45678912345


`);
    process.exit(2);
  }

  return proposedProjectId;
}
