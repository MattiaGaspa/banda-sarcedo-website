import type { PageServerLoad } from './$types';
import * as fs from 'fs';
import * as path from 'path';

export const load: PageServerLoad = async () => {
    const eventsDirectory = path.resolve("./static/events"); // Path where events are located
    let events = new Map<string, string[]>(); // Map events name to three strings: date, poster and text
    try {
        const d = fs.readdirSync(eventsDirectory, { withFileTypes: true }); // Read events directory
        for (const event of d) {
            if (event.isDirectory()) { // Discard files
                const a = fs.readdirSync(path.join(eventsDirectory, event.name)); // Set up event directory
                let content: string[] = []; // Initialize contents
                content[0] = event.name.split("-")[2];
                for (const file of a) { // Search for the files
                    if (isImageFile(file)) { // If image then it's the poster
                        content[1] = "/events/" + event.name + "/" + file;
                    }
                    else if (file.endsWith(".txt")) { // If text then it's the text
                        const f = path.resolve(eventsDirectory, event.name, file)
                        content[2] = fs.readFileSync(f, 'utf-8');
                    }
                }
                events.set(event.name.split("-")[1], content); // Bind event name with context
            }
        }
    }
    catch (e) {
        console.log(String(e));
    }
    return { events };
};

function isImageFile(file: string): boolean {
  return file.endsWith('.jpg') || 
         file.endsWith('.jpeg') || 
         file.endsWith('.png') || 
         file.endsWith('.gif') || 
         file.endsWith('.bmp') || 
         file.endsWith('.webp') || 
         file.endsWith('.tiff') || 
         file.endsWith('.svg') || 
         file.endsWith('.heic');
}