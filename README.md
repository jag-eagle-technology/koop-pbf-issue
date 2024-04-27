To reproduce this issue run `pnpm start` and then access a url requesting the pbf file type.

For example:

http://localhost:7000/datasource/rest/services/:id/FeatureServer/0/query?f=pbf&geometry=%7B%22xmin%22%3A1759886.139237439%2C%22ymin%22%3A5432532.47428263%2C%22xmax%22%3A1761109.1316900016%2C%22ymax%22%3A5433755.466735193%7D&geometryType=esriGeometryEnvelope&inSR=2193&maxAllowableOffset=2.388657133911135&orderByFields=OBJECTID&outFields=OBJECTID&outSR=2193&quantizationParameters=%7B%22extent%22%3A%7B%22spatialReference%22%3A%7B%22latestWkid%22%3A2193%2C%22wkid%22%3A2193%7D%2C%22xmin%22%3A1759886.139237439%2C%22ymin%22%3A5432532.47428263%2C%22xmax%22%3A1761109.1316900016%2C%22ymax%22%3A5433755.466735193%7D%2C%22mode%22%3A%22view%22%2C%22originPosition%22%3A%22upperLeft%22%2C%22tolerance%22%3A2.388657133911135%7D&resultType=tile&returnCentroid=true&returnExceededLimitFeatures=false&spatialRel=esriSpatialRelIntersects&where=1%3D1

You should receive the error response:

```
{
    "error": {
        "code": 500,
        "message": "Unknown geometry type: {\"type\":\"Polygon\",\"coordinates\":[[[1760745,5433137],[1760756,5433113],[1760701,5433088],[1760684,5433124],[1760699,5433113],[1760745,5433137]]]}",
        "details": [
            "Unknown geometry type: {\"type\":\"Polygon\",\"coordinates\":[[[1760745,5433137],[1760756,5433113],[1760701,5433088],[1760684,5433124],[1760699,5433113],[1760745,5433137]]]}"
        ]
    }
}
```

if you update geojson filters to

```
      geojson.filtersApplied = {
        // all: true,
        geometry: true,
        where: true,
        offset: true,
        limit: true,
        projection: true,
      }
```

Things should start working again.
