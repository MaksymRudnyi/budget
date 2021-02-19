const html5rocks = {};
const DB_VERSION = 1;
const DB_NAME = 'budget';

html5rocks.indexedDB = {};
html5rocks.indexedDB.db = null;

html5rocks.indexedDB.onerror = function(e) {
  console.log(e);
};

function open() {
    return new Promise(function(resolve, reject) {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        // We can only create Object stores in a versionchange transaction.
        request.onupgradeneeded = function(e) {
            const db = e.target.result;

            // A versionchange transaction is started automatically.
            e.target.transaction.onerror = html5rocks.indexedDB.onerror;

            if(db.objectStoreNames.contains(DB_NAME)) {
            db.deleteObjectStore(DB_NAME);
            }

            db.createObjectStore(DB_NAME, {keyPath: "id"});
        };

        request.onsuccess = function(e) {
            html5rocks.indexedDB.db = e.target.result;
            resolve()
        };

        request.onerror = (e) => {
            reject(Error(e))
        };
    })
};

function addItem(item) {
  const db = html5rocks.indexedDB.db;
  const trans = db.transaction([DB_NAME], "readwrite");
  const store = trans.objectStore(DB_NAME);

  const request = store.put(item);

  request.onsuccess = function(e) {
    console.log('success')
  };

  request.onerror = function(e) {
    console.log("Error Adding: ", e);
  };
};

function deleteItem(id) {
  const db = html5rocks.indexedDB.db;
  const trans = db.transaction([DB_NAME], "readwrite");
  const store = trans.objectStore(DB_NAME);

  const request = store.delete(id);

  request.onsuccess = function(e) {
    console.log('success')
  };

  request.onerror = function(e) {
    console.log("Error Adding: ", e);
  };
};

function getItems() {
    return new Promise((resolve, reject) => {
        var db = html5rocks.indexedDB.db;
        if (!db) {
            reject(Error('No db'))
        }
        var trans = db.transaction([DB_NAME], "readwrite");
        var store = trans.objectStore(DB_NAME);

        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = function() {
            resolve(getAllRequest.result);
        }
    })
};

export {
    open,
    addItem,
    getItems,
    deleteItem
}