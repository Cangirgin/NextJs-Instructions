"use client";
import CancelButton from '@/components/common/form-controls/cancel-button';
import SubmitButton from '@/components/common/form-controls/submit-button'
import React from 'react'
import { Form } from 'react-bootstrap'

const EditProductForm = ({ products }) => {
    console.log(products)
    const { title, description, price, category, image } = products
    return (
        <div>
            <Form >
                <input type="hidden" name="id" />
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        defaultValue={title}
                    />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        as="textarea"
                        rows={3}
                        defaultValue={description}

                    />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        name="price"
                        type="number"
                        defaultValue={price}

                    />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>category</Form.Label>
                    <Form.Select
                        name="category"
                        defaultValue={category}


                    >
                        <option value="">Select</option>
                        <option value="Books">Books</option>
                        <option value="Computeds">Computers</option>
                        <option value="Sports">Sports</option>
                        <option value="Kids">Kids</option>
                        <option value="Games">Games</option>
                        <option value="Games">Games</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        name="image"
                        type="text"
                        defaultValue={image}


                    />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>

                {/* bu butonu ayrı bir component yapmayınca pending durumunu gösteremiyorum */}

                <SubmitButton title="Update" />
                <CancelButton />
            </Form>
        </div>
    )
}

export default EditProductForm