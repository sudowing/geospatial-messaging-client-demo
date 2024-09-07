### DEMO: Geospatial Messaging Client

![geospatial-messaging-client promo-art](https://raw.githubusercontent.com/sudowing/geospatial-messaging-client/develop/assets/geohash-layers.png "Geospatial Messaging Client | Promo Poster (Geohash Scales and Custom Polygons)")

This repo serves as a demo implementation of the [geospatial-messaging-client NPM package](https://www.npmjs.com/package/geospatial-messaging-client).

To run demo, simply follow the instructions below.

## Setup Dependencies
```sh
# create docker network (if db on docker network)
docker network create mynetwork

docker run -d \
	--network mynetwork \
	-p 6379:6379 \
	--name some-redis \
	redis

# install npm dependencies
npm i
```

## Basic Usage
```js
npm run demo
```
