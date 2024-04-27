import initializeDatasource from "./datasource/initialize.js";
const datasource = initializeDatasource();
const outputs = [];
const auths = [];
const caches = [];
const plugins = [datasource];
export default [...outputs, ...auths, ...caches, ...plugins];
