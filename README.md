# cra-rni-monorepo [![Build Status](https://travis-ci.org/cheshirecode/cra-rni-monorepo.svg?branch=master)](https://travis-ci.org/cheshirecode/cra-rni-monorepo)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Set up CRA and barebone RN in the same monorepo as a code-sharing experiment for future boilerplates. Followed the great guide at
https://medium.com/viewstools/how-to-use-yarn-workspaces-with-create-react-app-and-create-react-native-app-expo-to-share-common-ea27bc4bad62
and:

- Skip Views Tools to keep this as lightweight as possible.
- Use react-native CLI to init a barebone RN setup instead of CRNA.
- Use https://github.com/viewstools/yarn-workspaces-cra-crna/blob/master/crna-make-symlinks-for-yarn-workspaces/index.js in `native` and remove reference to Expo to prevent breakage.

# Howto

- Clone/fork the repo

```
git clone git@github.com:cheshirecode/cra-rni-monorepo.git
cd cra-rni-monorepo
```

- Run `yarn` once to grab all dependencies.
- Start web development build `cd web; yarn start`.
- Run the RN bundler `cd native; yarn start`.
- Run the RN iOS/Android simulator `cd native; yarn io` or `cd native; yarn android`.
- Edit some files in `core` folder and see the magic!

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/1631630?v=4" width="100px;"/><br /><sub><b>cheshireCode</b></sub>](https://github.com/cheshirecode)<br />[💻](https://github.com/cheshirecode/cra-rni-monorepo/commits?author=cheshirecode "Code") [⚠️](https://github.com/cheshirecode/cra-rni-monorepo/commits?author=cheshirecode "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!