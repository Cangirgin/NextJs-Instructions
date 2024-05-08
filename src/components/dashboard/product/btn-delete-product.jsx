"use client"
import { deleteswalAlert } from '@/helpers/functions/swall'
import React from 'react'
import { Button } from 'react-bootstrap'
import { FaRegTrashAlt } from 'react-icons/fa'



const BtnDeleteProduct = ({ id }) => {
    const handleClickDelete = () => {
        const resp = deleteswalAlert();


        if (!resp) return

    }

    return (
        <Button onClick={handleClickDelete} variant='link'>
            <FaRegTrashAlt />
        </Button>
    )
}

export default BtnDeleteProduct