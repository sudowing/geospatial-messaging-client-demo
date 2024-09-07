import GeoSpatialClient from 'geospatial-messaging-client';
import * as samples from './data_samples.js';

const eventHandler = ({eventType, ...event}) => console.log(eventType || 'default', `${JSON.stringify(event)}`);


// instantiate client
const client = new GeoSpatialClient({polygon_coordinates: samples.coords_002, geohash_length: 5});

// subscribe to the event stream (pass handler to rxjs)
client.observable.subscribe(eventHandler);

try{

    // CONNECT TO SERVER: passing the `clientConfiguration` needed for [node-redis client]
    await client.connect({});

    await client.send({hello: 'world'});
    await client.send({goodbye: 'night'});
    await client.send(samples.film, 'movieShowing');


    // CHANGE 01: location
    await client.update({polygon_coordinates: samples.circle_coordinates, geohash_length: 5});

    // send events
    await client.send({strawberry: 'fields'});
    await client.send({sargent: 'peppers'});
    await client.send(samples.bar, 'happyHour');


    // CHANGE 02: location, geohash_length & party_key
    await client.update({polygon_coordinates: samples.star_coordinates, geohash_length: 5, party_key: 'grp42'});

    // send events
    await client.send({atlanta: 'braves'});
    await client.send({philadlephia: 'eagles'});
    await client.send(samples.concert, 'liveMusic');


    // DISCONNECT && EXIT after timer
    setTimeout(async () => {
            await client.disconnect();
            process.exit(0);
    }, 15_000);

}
catch(err){
    console.log(err)
    process.exit(1);
}