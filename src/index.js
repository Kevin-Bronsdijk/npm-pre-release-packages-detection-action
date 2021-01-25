'use strict';

const core = require('@actions/core');

const main = async () => {
  // `package-file-full-path`` input defined in action metadata file
  const packageFileName = core.getInput('package-file-full-path`');

  console.log(`package-file-full-path\` ${packageFileName}`);

  core.setOutput('found-pre-release', true);
};

main().catch((err) => core.setFailed(err.message));
