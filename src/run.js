const { fail, pass } = require('create-jest-runner');
const lint = require('sass-lint');
const fs = require('fs');
const path = require('path');

const DEFAULT_CONFIG_FILES = ['.sasslintrc', '.sass-lint.yml'];

module.exports = ({ config, testPath }) => {
  const start = Date.now();
  const { displayName, rootDir } = config;
  const options = {};

  DEFAULT_CONFIG_FILES.forEach(file => {
    if (fs.existsSync(`${rootDir}/${file}`)) {
      options.configFile = `${rootDir}/${file}`;
    }
  });

  try {
    const data = fs.readFileSync(testPath);
    const results = lint.lintFileText({
      text: data,
      format: path.extname(testPath).replace('.', ''),
      filename: path.relative(process.cwd(), testPath)
    }, options, options.configFile);

    if (results.errorCount > 0) {
      return fail({
        start,
        end: Date.now(),
        test: {
          errorMessage: lint.format([results], { options }),
          path: testPath,
          title: displayName
        }
      });
    }

    return pass({
      start,
      end: Date.now(),
      test: { path: testPath, title: displayName }
    });
  } catch (e) {
    return fail({
      start,
      end: Date.now(),
      test: {
        errorMessage: 'Unable to lint file',
        path: testPath,
        title: displayName
      }
    });
  }
};