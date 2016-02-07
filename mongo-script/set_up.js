var connection = new Mongo();
var star_schema = connection.getDB("AS-Star-Schema");

star_schema.dropDatabase();

star_schema.createCollection("sales_fact", {autoIndexId: false});

star_schema.createCollection("time_dim", {});

star_schema.createCollection("product_dim", {});

star_schema.createCollection("supplier_dim", {});

star_schema.sales_fact.createIndex( { "time_id" : 1, "product_id" : 1, "supplier_id": 1}, { unique: true, name: "primary_key_index" });

