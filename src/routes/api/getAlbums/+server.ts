/// Retrieve all albums and return their name
import * as fs from 'fs';
import * as path from 'path';
import { error } from '@sveltejs/kit';

export const GET: any = () => {
    const albumDirectory = path.resolve("./static/albums"); // Path where albums are located
    let albums = new Map<string, string[]>();
    try {
        const d = fs.readdirSync(albumDirectory, { withFileTypes: true }); // Read albums directory
        for (const album of d) {
            if (album.isDirectory()) { // Discard files
                const a = fs.readdirSync(path.join(albumDirectory, album.name)); // Set up album directory
                let photos: string[] = []; // Initialize album list
                for (const photo of a) {
                    photos.push(photo); // Push photos from album directory
                }
                albums.set(album.name, photos); // Update entry
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