const syncDirecotry = require("sync-directory");

interface SyncElement {
  module: string;
  targetDir: string;
}
const elementsToBeSynced: SyncElement[] = [
  {
    module: "ng-mat-components",
    targetDir: "02-ng-mat-components",
  },
  {
    module: "awesome-ci",
    targetDir: "03-awesome-ci",
  },
];

elementsToBeSynced.forEach((element) => {
  let modulePath = `modules/${element.module}/docs/docs`
  let targetPath = `docs/${element.targetDir}`

  console.log(`syncing ${modulePath} to ${targetPath}`)
  
  syncDirecotry(modulePath, targetPath, {
    deleteOrphaned: true,
  });
});
