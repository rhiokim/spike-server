# Thorn API Server
Thorn is a API Server to manage naxsi rules. Rules are stored in a leveldb database, and can be added, deleted, modified, searched, importable and exportable in plain-text.

## What's difference with Naxsi's Spike?

|            | language | db           | framework  |
|------------|----------|--------------|------------|
| [Spike][2] | Python   | Sqlite       | flask      |
| Thorn      | Node.js  | [LevelDB][1] | express.js |

[1]: https://github.com/google/leveldb
[2]: https://github.com/nbs-system/spike

## Run

```bash
$ cd /path/to/thorn-api-server
$ yarn or npm install
$ npm start
```

And then you can see routing map of express.js server.

## with Postman (Restful Client)
If you're using [Postman](https://www.getpostman.com), please import `assets/spike.postman_collection.json` file into your postman

## TODO
- MatchZone API
- Scores API

## License
Only you :-)
