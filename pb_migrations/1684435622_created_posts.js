migrate((db) => {
  const collection = new Collection({
    "id": "zv0iij2qbvnpzsa",
    "created": "2023-05-18 18:47:02.614Z",
    "updated": "2023-05-18 18:47:02.614Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bzxoshes",
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
  const collection = dao.findCollectionByNameOrId("zv0iij2qbvnpzsa");

  return dao.deleteCollection(collection);
})
