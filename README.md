# cra-rni-monorepo

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
