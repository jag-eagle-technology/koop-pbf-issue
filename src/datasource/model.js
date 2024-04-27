import request from "request-promise";

export class Model {
  async getData(req, callback) {
    try {
      const serviceUrl =
        "https://services.arcgis.com/xdsHIIxuCWByZiCB/ArcGIS/rest/services/LINZ_NZ_Primary_Parcels/FeatureServer/0";
      if (!req.query.where) req.query.where = "1=1";
      if (!req.query.outFields) req.query.outFields = "*";
      // req.query.f = 'geojson';
      const { default: querystring } = await import("query-string");
      const queryParamStr = querystring.stringify({
        ...req.query,
        f: "geojson",
        // f: 'json',
      });
      const queryUrl = `${serviceUrl}/query?${queryParamStr}`;
      // console.log(queryUrl);
      const geojson = await request(queryUrl, { json: true });
      geojson.filtersApplied = {
        all: true,
        // geometry: true,
        // where: true,
        // offset: true,
        // limit: true,
        // projection: true,
      };
      // geojson.metadata = { ...geojson.metadata, crs: geojson.crs };
      callback(null, geojson);
    } catch (error) {
      console.error("Failed to fetch data providers:", error);
    }
  }
}
