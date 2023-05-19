migrate((db) => {
  const collection = new Collection({
    "id": "tujsy4xznarfnx9",
    "created": "2023-05-18 18:56:49.335Z",
    "updated": "2023-05-18 18:56:49.335Z",
    "name": "post",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "noqxdvqw",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tujsy4xznarfnx9");

  return dao.deleteCollection(collection);
})
