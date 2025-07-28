import { useState } from 'react';
import { useAddBook } from '../hooks/crudHooks';
import { BookItem } from '../model/Book';
export default function BookInput(){
    const addBook = useAddBook();
    const [inputF, setInputF] = useState ({
        title: '',
        author: '',
        description: ''
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputF({
            ...inputF,
            [name]: value
        });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { title, author, description } = inputF;
        if (title && author && description) {
            const addInstance = new BookItem(title, author, description);
            addBook( JSON.parse(addInstance.toJSON()) );

            console.log(inputF);
            setInputF({ title: '', author: '', description: '' });
    }}
    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" name="title" onChange={handleInputChange}/>
                <input type="text" placeholder="Author" name="author" onChange={handleInputChange}/>
                <textarea placeholder="Description" name="description" onChange={handleInputChange}></textarea>
                <button type="submit" >Add Book</button>
            </form>
        </div>
    );
}