migrate((db) => {
  const collection = new Collection({
    "id": "vvn8r1oao7ixai3",
    "created": "2023-05-18 18:43:55.119Z",
    "updated": "2023-05-18 18:43:55.119Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kgaxxmnu",
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
  const collection = dao.findCollectionByNameOrId("vvn8r1oao7ixai3");

  return dao.deleteCollection(collection);
})
