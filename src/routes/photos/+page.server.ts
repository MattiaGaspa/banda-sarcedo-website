import type { PageServerLoad } from './$types';
import * as fs from 'fs';
import * as path from 'path';

export const load: PageServerLoad = async () => {
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
        console.log(String(e));
    }
    return { albums };
};