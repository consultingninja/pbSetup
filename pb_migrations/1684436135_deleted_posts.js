migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uuk34gpuoq8ji4p");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "uuk34gpuoq8ji4p",
    "created": "2023-05-18 18:55:02.814Z",
    "updated": "2023-05-18 18:55:02.814Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "84ri5zyf",
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
