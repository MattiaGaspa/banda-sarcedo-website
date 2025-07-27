/// Retrieve all albums and return their name
import * as fs from 'fs';
import * as path from 'path';
import { error } from '@sveltejs/kit';

export const GET: any = () => {
    const albumDirectory = path.resolve("./static/albums");
    let albums = new Map<string, string[]>();
    try {
        const d = fs.readdirSync(albumDirectory, { withFileTypes: true });
        for (const album of d) {
            if (album.isDirectory()) {
                const a = fs.readdirSync(path.join(albumDirectory, album.name));
                let photos: string[] = [];
                for (const photo of a) {
                    photos.push(photo);
                }
                albums.set(album.name, photos);
            }
        }
    }
    catch (e) {
        error(500, String(e));
    }

    // Convert an object instead of the map, otherwise it returns {}
    const albumsObject = Object.fromEntries(albums);
    
    return new Response(JSON.stringify(albumsObject), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};