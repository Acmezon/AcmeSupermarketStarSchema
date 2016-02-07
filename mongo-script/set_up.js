//Connect to DB
var connection = new Mongo();
var star_schema = connection.getDB("AS-Star-Schema");

//Drop all database
star_schema.dropDatabase();

//Create collections with the index in _id field disabled
star_schema.createCollection("sales_fact", {autoIndexId: false});

star_schema.createCollection("time_dim", {autoIndexId: false});

star_schema.createCollection("product_dim", {autoIndexId: false});

star_schema.createCollection("supplier_dim", {autoIndexId: false});

//Create indexes in all collections
star_schema.sales_fact.createIndex( { "time_id" : 1, "product_id" : 1, "supplier_id": 1}, { unique: true, name: "primary_key_index" });

star_schema.time_dim.createIndex( {"time_id": 1}, {unique: true, name: "primary_key_index"});

star_schema.product_dim.createIndex( {"product_id": 1}, {unique: true, name: "primary_key_index"});

star_schema.supplier_dim.createIndex( {"supplier_id": 1}, {unique: true, name: "primary_key_index"});