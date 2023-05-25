import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Card } from "antd";
import { getAlldatasbyID } from "../../api/httpsrequests";
import Button from '@mui/material/Button';

function Detail() {
  const [prod, setProd] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAlldatasbyID(id).then((res) => {
      console.log(res);
      setProd(res);
    });
  }, [id]);

  return (
    <>
      <div className="detaill">
      <Link to = '/home'><Button variant="contained">Go Back</Button></Link>
      <h1 >Detail Page</h1>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="detaillcard">
        <Card
          key={prod._id}
          hoverable="true"
          style={{
            width: 400,
          }}
        >
          <div className="icon">
            <i className={`fa-solid ${prod.imageURL} icons`}></i>
          </div>
          <div className="func-class">
            <h1 className="name">{prod.name}</h1>
            <p className="price">{prod.price}</p>
            <p className="desc">{prod.desc}</p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Detail;
