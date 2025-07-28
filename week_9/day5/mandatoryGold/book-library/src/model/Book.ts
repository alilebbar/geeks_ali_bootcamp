import {v4 as uuidv4} from 'uuid';

export interface Book {
 id: string;
 title: string;
 author: string;
 description: string;
 isread: boolean;
}
export class BookItem implements Book {
    id: string;
    title: string;
    author: string;
    description: string;
    isread: boolean;
    constructor(title: string, author: string, description: string) {
        this.id = uuidv4();
        this.title = title;
        this.author = author;
        this.description = description;
        this.isread = false;
 
    }
    toggleReadStatus() {
        this.isread = !this.isread;
    }
    toJSON() {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
            isread: this.isread,
        });
    }

}