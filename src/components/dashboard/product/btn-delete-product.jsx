"use client";
import { deleteProductAction } from "@/actions/product-actions";
import React from "react";
import { Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const BtnDeleteProduct = ({ id }) => {

    const handleClick = async () => {
        const answer = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (answer.isConfirmed) {
            try {
                const res = await deleteProductAction(id);

                if (res && res.errors && res.errors.common) {
                    throw new Error(res.errors.common);
                }

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            } catch (error) {
                console.error(error);
                alert("An error occurred while deleting the product.");
            }
        }
    };

    return (
        <Button variant="link" onClick={handleClick}>
            <FaRegTrashAlt />
        </Button>
    );
};

export default BtnDeleteProduct;
