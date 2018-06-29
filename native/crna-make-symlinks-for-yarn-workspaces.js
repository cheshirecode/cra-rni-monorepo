//https://medium.com/viewstools/how-to-use-yarn-workspaces-with-create-react-app-and-create-react-native-app-expo-to-share-common-ea27bc4bad62
const findRoot = require("find-root");
const fs = require("fs-extra");
const path = require("path");

const link = (name, fromBase, toBase) => {
  const from = path.join(fromBase, "node_modules", name);
  const to = path.join(toBase, "node_modules", name);

  if (fs.existsSync(to)) {
    fs.removeSync(to);
  }

  fs.symlinkSync(from, to, "dir");
};

module.exports = function makeSymlinks(from) {
  const root = findRoot(from, dir => {
    const pkg = path.join(dir, "package.json");
    return fs.existsSync(pkg) && "workspaces" in require(pkg);
  });

  //   link('expo', root, from);
  link("react-native", root, from);
};
