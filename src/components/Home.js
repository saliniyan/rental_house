import {React, useState} from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from "axios";
import './Home.css'

const Home = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Clear authentication state
        navigate('/'); // Redirect to login page
    };

    const [books, setBooks] = useState([
        {
            id: '1',
            volumeInfo: {
                title: 'The Reign of Marvel Studios',
                authors: ['Joanna Robinson', 'Dave Gonzales', 'Gavin Edwards'],
                publisher: 'Liveright Publishing',
                publishedDate: '2023-10-10',
                categories: ['Performing Arts'],
                description: 'INSTANT NEW YORK TIMES BESTSELLER "A superb chronicle of how Marvel Studios conquered Hollywood"',
                imageLinks: {
                    thumbnail: 'http://books.google.com/books/content?id=CYqpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                },
                previewLink: 'https://books.google.co.in/books?id=CYqpEAAAQBAJ&printsec=frontcover&dq=Marvel&hl=&cd=1&source=gbs_api'
            }
        },
        {
            id: '2',
            volumeInfo: {
                title: 'Marvel Encyclopedia New Edition',
                authors: ['Stephen Wiacek', 'DK', 'Stan Lee', 'Adam Bray'],
                publisher: 'Dorling Kindersley Ltd',
                publishedDate: '2018-09-13',
                categories: ['Comics & Graphic Novels'],
                description: 'Join Captain America, Thor, Iron Man, Black Widow, and the Guardians of the Galaxy on a stunning journey.',
                imageLinks: {
                    thumbnail: 'C'
                },
                previewLink: 'https://books.google.co.in/books?id=NgXeDwAAQBAJ&printsec=frontcover&dq=Marvel&hl=&cd=2&source=gbs_api#v=onepage&q=Marvel&f=false'
            }
        },
        {
            id: '3',
        volumeInfo: {
            title: 'Marvel Studios Visual Dictionary',
            authors: ['Adam Bray'],
            publisher: 'Dorling Kindersley Ltd',
            publishedDate: '2018-09-13',
            categories: ['Comics & Graphic Novels'],
            description: 'Join Captain America, Thor, Iron Man, Black Widow, and the Guardians of the Galaxy on a stunning journey.',
            imageLinks: {
                thumbnail: 'http://books.google.com/books/content?id=XbF2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' 
            },
            previewLink: 'http://books.google.co.in/books?id=XbF2EAAAQBAJ&printsec=frontcover&dq=Marvel&hl=&cd=3&source=gbs_api'
        }
    },
    {
        id: '4',
        volumeInfo: {
            title: 'Make Ours Marvel',
            authors: ['Matt Yockey'],
            publisher: 'University of Texas Press',
            publishedDate: '2017-06-20',
            categories: ['Business & Economics'],
            description: 'Tracing the rise of the Marvel Comics brand from the creation of the Fantastic Four to the development of a global entertainment phenomenon.',
            imageLinks: {
                thumbnail: 'http://books.google.com/books/content?id=FMigDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            },
            previewLink: 'hhttp://books.google.co.in/books?id=FMigDgAAQBAJ&printsec=frontcover&dq=Marvel&hl=&cd=4&source=gbs_api'
        }
    }
    ]);
    
    const [offset,setOffset]=useState(4)
    const [search,setSearch]=useState('Marvel')
    const [item,setItem]=useState([])
    const [message, setMessage] = useState('');

    const fetchbook=async(e)=>
    {
        try{
            if(e){
                e.preventDefault();
            }
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=4&startIndex=${offset}`);            
            setBooks(prevbook=>[...prevbook,...response.data.items])
            setOffset(offset+4)
        }
        catch{
            console.error("Error in fetching details")
        }
    }

    const fetchbookonsearch=async(e)=>
        {
            try{
                if(e){
                    e.preventDefault();
                }
                setBooks([]);
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=4&startIndex=${offset}`);            
                setBooks(prevbook=>[...prevbook,...response.data.items])
                setOffset(offset+4)
            }
            catch{
                console.error("Error in fetching details")
            }
        }

    const handlesearch=(e)=>
    {
        setSearch(e.target.value);
        setOffset(0);
    }

    const Additem = (book) => {
        const bookDetails = {
            image: book.volumeInfo.imageLinks?.thumbnail,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            categories: book.volumeInfo.categories,
            description: book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) : "Description unavailable",
            previewLink: book.volumeInfo.previewLink
        };
    
        setItem((prevItems) => [...prevItems, bookDetails]);
        setMessage("Added Successfully");
        setTimeout(() => setMessage(''), 2500);
    };
    
    const seecart=()=>{
        navigate('/Cart',{ state: { items: item } })
    }

    return(
        <div className="home-container">
        <Navbar />
        <header className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="text-primary">Welcome to Our Application!</h1>
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </header>

        <form onSubmit={fetchbookonsearch}>
        <div className="first">
            <div>
            <input className="searchbox"
                type="text"
                onChange={handlesearch}
                placeholder="Search here..."
            />
            <button type="submit" className="searchbutton">Search</button>
            </div>
            <img src={"/cart.png"} alt="cart" className="cartimg" onClick={seecart}/>
        </div>
        </form>
        {message && <div className="popmessage">{message}</div>}
        <div className='book'>
            {books.map((book,index)=>(
                <div key={index} className="booklist">
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={`${book.volumeInfo.title} cover`} className="img1"/>
                    <h3>{book.volumeInfo.title?book.volumeInfo.title:'Title Unknown'}</h3>
                    <p>{book.volumeInfo.authors?book.volumeInfo.authors:'Author Unknown'}</p>
                    <p>Publisher: {book.volumeInfo.publisher?book.volumeInfo.publisher:'Publisher Unknown'}</p>
                    <p>Published Date: {book.volumeInfo.publishedDate?book.volumeInfo.publishedDate:'Date Unknown'}</p>
                    <p>categories: {book.volumeInfo.categories?book.volumeInfo.categories:'categories Unknown'}</p>
                    <p>Book description: {book.volumeInfo.description?book.volumeInfo.description.slice(0,100):"description unavailable"}...</p>
                    <a href={book.volumeInfo.previewLink}>click here</a>
                    <br />
                    <button  onClick={()=>Additem(book)} className="button2">Add to cart</button>
                </div>
            ))
            }
        </div>
        <button onClick={fetchbook} className="button1">Load Books</button>
        <div style={{ height: '50px' }}></div>
        </div>
    )
}
export default Home;