'use strict';

/** Class representing an package. */
class Package {
  /**
   * Create a ErrorEntry.
   * @param {string} name - The package name.
   * @param {string} version - The package version.
   */
  constructor(name, version) {
    this.name = name;
    this.version = version;
    this.isPreReplease = this.isPreRelease(version);
  }

  /**
   * Checks if the version is a pre-release.
   * @param {string} version - Package version.
   * @return {boolean} true or false.
   */
  isPreRelease(version) {
    return version.indexOf('-') != -1;
  }
}

module.exports = {
  Package: Package,
};
