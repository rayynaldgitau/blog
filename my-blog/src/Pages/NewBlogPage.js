import { useState } from "react"
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const [data, setData] = useState({
        title: "",
        author: "",
        body: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:4000/blogs', data)
            .then(res => {
                toast.success('new blog created successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            })
            .catch(err => {
                toast.error('An error occurred while creating the blog', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            })
    }
    return (
        <div class="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={handleChange} placeholder="Enter your title" />
                </Form.Group>

                <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" onChange={handleChange} placeholder="Enter Author" />
                </Form.Group>

                <Form.Group controlId="formBody">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" onChange={handleChange} rows={3} placeholder="Enter Something here" />
                </Form.Group>
                <Button className="secondary-button" type="submit">Submit</Button>

                <ToastContainer />
            </Form>

        </div>
    )
}
export default Blog;