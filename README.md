# Software engineering og testing

## Oblig 3

Through github I added the following github action: .github/workflows/node.js.yml

This file triggers on push to master branch or pull request to master branch.

It will run:

- npm i -g npm
- npm ci
- npm test

`npm i -g npm` will make sure npm is updated, so that installing packages does not fail.

`npm ci` will install packages from package-lock.json (dependencies)

`npm test` will run all the tests using chai and mocha. The tests are specified in /test folder.


When pushing a new commit to master branch now, all the tests will run automatically. If any of the tests fail, we will get a notification and see it under "Actions" tab in GitHub.
