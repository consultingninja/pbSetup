migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9pfklbkv9vftedy");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9pfklbkv9vftedy",
    "created": "2023-05-18 18:51:59.764Z",
    "updated": "2023-05-18 18:51:59.764Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jkitrz3x",
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
