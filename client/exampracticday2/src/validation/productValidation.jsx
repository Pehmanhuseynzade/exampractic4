import * as yup from 'yup'

export const productSchema = yup.object().shape({
     name: yup.string().min(3).max(20).required("name is required"),
     year: yup.number().required("name is required"),
     desc: yup.string().required("description is required"),
     imageURL: yup.string().required("description is required")
   });