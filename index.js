class JestReportFileReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    getPathOption() {
      if (this._options.path) {
        return this._options.path.replace('<rootDir>', this._globalConfig.rootDir);
      }

      return '';
    }

    getPath() {
      let path = this._globalConfig.coverageDirectory;
      const coverageReporters = this._globalConfig.coverageReporters;

      if (
        coverageReporters.includes('html') ||
        coverageReporters.includes('html-spa')
      ) {
        path += '/index.html';
      } else if (coverageReporters.includes('lcov')) {
        path += '/lcov-report/index.html';
      } else {
        throw new Error(
          'jest-report-file-reporter: html istanbul coverage reporter not detected.'
            + 'See README for using a custom path option or disable this reporter.'
        );
      }

      return path;
    }

    onRunComplete(contexts, results) {
      if (!this._globalConfig.collectCoverage) {
        return;
      }

      const path = this.getPathOption() || this.getPath();
      console.log(`Report details (open in browser): file://${path}`);
    }
}

module.exports = JestReportFileReporter;
