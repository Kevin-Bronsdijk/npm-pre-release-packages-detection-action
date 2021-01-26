'use strict';

const core = require('@actions/core');
const {
  readPackageFile,
  parsePackageFile,
  getPackages} = require('./functions');

const main = async () => {
  // `package-file-full-path`` input defined in action metadata file
  const packageFileFullPath = core.getInput('package-file-full-path`');
  console.log(`package-file-full-path\` ${packageFileFullPath}`);

  const packageFileContent =
      parsePackageFile(readPackageFile(packageFileFullPath));

  const packages = getPackages(packageFileContent.dependencies);

  const preReleasePackages = packages.filter((obj) => {
    return obj.isPreReplease;
  });

  if (preReleasePackages.length > 0) {
    console.log(`list of pre-release packages found`,
        preReleasePackages);
    core.setOutput('found-pre-release', true);
  } else {
    core.setOutput('found-pre-release', false);
  }
};

main().catch((err) => core.setFailed(err.message));
