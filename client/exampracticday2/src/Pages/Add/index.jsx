import React from "react";
import {Helmet} from "react-helmet"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postDatas } from "../../api/httpsrequests";
import {productSchema} from "../../validation/productValidation"
import {formik, useFormik} from "formik"
function Add() {

  function handleSubmit(values,action){
    postDatas(values)
    console.log(values)
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      desc: '',
      imageURL: '',
    },
    onSubmit:handleSubmit,
    validationSchema:productSchema,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 style={{textAlign:"center",marginTop:"300px"}}>Add Pages</h1>
      
      <form className="form" onSubmit={formik.handleSubmit}>
      <TextField error = {formik.errors.name && formik.touched.name ? true :false}
      onChange={formik.handleSubmit} onBlur = {formik.handleBlur} name = "name" type = "text" id="outlined-basic" label="Name" variant="outlined" />
    {formik.errors.name && formik.touched.name && }
      <TextField error = {formik.errors.price && formik.touched.price ? true :false} onChange={formik.handleSubmit} onBlur = {formik.handleBlur} name = "price" type = "number" id="outlined-basic" label="Price" variant="outlined" />
      
      <TextField error = {formik.errors.desc && formik.touched.desc ? true :false} onChange={formik.handleSubmit} onBlur = {formik.handleBlur} name = "desc" type = "text" id="outlined-basic" label="Description" variant="outlined" />
      
      <TextField error = {formik.errors.imageURL && formik.touched.imageURL ? true :false} onChange={formik.handleSubmit} onBlur = {formik.handleBlur} name = "imageURL" type = "text" id="outlined-basic" label="imageURL" variant="outlined" />
      
      <Button type="submit" variant="contained">Add</Button>
      </form>

    </>
  );
}

export default Add;
