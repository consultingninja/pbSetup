migrate((db) => {
  const collection = new Collection({
    "id": "1e9cf5yi1w7lfrx",
    "created": "2023-05-18 18:53:40.541Z",
    "updated": "2023-05-18 18:53:40.541Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2abylirn",
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
  const collection = dao.findCollectionByNameOrId("1e9cf5yi1w7lfrx");

  return dao.deleteCollection(collection);
})
