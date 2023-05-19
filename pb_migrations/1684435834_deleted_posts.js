migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eqfiq9qqyjncqdb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "eqfiq9qqyjncqdb",
    "created": "2023-05-18 18:49:21.793Z",
    "updated": "2023-05-18 18:49:21.793Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9acjhccx",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
