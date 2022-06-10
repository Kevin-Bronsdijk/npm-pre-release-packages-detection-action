# NPM pre-release packages check

## What is it?

This action detects pre-release NPM packages for a given package file. Pre-release packages are often Alpha packages only to be used when developing however avoided when running production code. 

[![Code Quality](https://api.codiga.io/project/18194/score/svg)]([https://frontend.code-inspector.com/public/project/18182/github-action/dashboard](https://app.codiga.io/project/18194/dashboard))
[![Code Grade](https://api.codiga.io/project/18194/status/svg)]([https://frontend.code-inspector.com/public/project/18182/github-action/dashboard](https://app.codiga.io/project/18194/dashboard))
<a href="https://github.com/Kevin-Bronsdijk/npm-pre-release-packages-detection-action/actions"><img alt="javscript-action status" src="https://github.com/Kevin-Bronsdijk/npm-pre-release-packages-detection-action/workflows/Main%20package%20ncc%20build/badge.svg"></a>

## How to use it?

### Configure the GitHub action

## Inputs

### `package-file-full-path`

**Required** The full path pointing to the package file. Example `"./package.json"`.

## Outputs

### `found-pre-release`

Boolean indicator used to tell that a pre-release packages was found.

## Example usage

```yml

jobs:
    precheck:
        runs-on: ubuntu-latest
        steps:
            - uses: kevin-bronsdijk/npm-pre-release-packages-detection-action@v1.0.0
              id: npmprerelease
              with:
                  package-file-full-path: './package.json'
            - run: echo "result ${{ steps.npmprerelease.outputs.found-pre-release }}"
```

# Contact and bug reports

Feel free to open an issue on this GitHub project.

