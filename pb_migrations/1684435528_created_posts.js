migrate((db) => {
  const collection = new Collection({
    "id": "u9wvfxf5xi6ira9",
    "created": "2023-05-18 18:45:28.631Z",
    "updated": "2023-05-18 18:45:28.631Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bjemoc0w",
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
  const collection = dao.findCollectionByNameOrId("u9wvfxf5xi6ira9");

  return dao.deleteCollection(collection);
})
