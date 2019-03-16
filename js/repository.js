export class Repository {
  constructor(collection)
  {
    this.collection = collection;
  }

  getCollection()
  {
    return DB.collection(this.collection);
  }

  getDocument(document)
  {
    return DB.collection(this.collection).doc(document);
  }
}