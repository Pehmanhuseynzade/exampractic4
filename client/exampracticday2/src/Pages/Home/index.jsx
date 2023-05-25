import React from "react";
import { Helmet } from "react-helmet";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { deleteDatas, getAlldatas } from "../../api/httpsrequests";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getAlldatas().then((data) => {
      console.log(data);
      setDatas(data);
    });
  }, []);

  function handleSearch(e) {
    setInput(e.target.value);
  }

  function handleDelete(id) {
    deleteDatas(id);
    setDatas(datas.filter((x) => x._id !== id));
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* MAINSECTION */}

      <main className="image-hero">
        <div className="title">
          <h1>HELLO WE'RE BIZPRO</h1>
          <p>SUB HEAD,MOTTO OR MISSION SUBTITLE</p>
          <button className="title-btn">SEE OUR PROJECTS</button>
        </div>
      </main>

      <div className="sentences">
        <h1>HELLO OUR BIZPRO</h1>
        <div className="line"></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <p>
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type.
        </p>
      </div>

      {/* SECTION FUNKSIONALLIQ */}
      <div onChange={(e) => handleSearch(e)} className="search-filter">
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button
          onClick={() => {
            setDatas([...datas.sort((x, y) => y.price - x.price)]);
          }}
          variant="contained"
        >
          Filter By Price
        </Button>
      </div>

      <section className="cards">
        {datas &&
          datas
            .filter((item) => {
              if (input === "") {
                return datas;
              } else if (
                item.name
                  .toLowerCase()
                  .trim()
                  .includes(input.toLowerCase().trim())
              ) {
                return item;
              }
            })
            .map((d) => (
              <Card
                key={d._id}
                hoverable="true"
                style={{
                  width: 400,
                }}
              >
                <div className="icon">
                <i className={`fa-solid ${d.imageURL} icons`}></i>
                </div>
                <div className="func-class">
                  <h1 className="name">{d.name}</h1>
                  <p className="price">{d.price}</p>
                  <p className="desc">{d.desc}</p>
                </div>
                <div style={{display:"flex",gap:"20px"}}> 
                  <button
                    onClick={() => handleDelete(d._id)}
                    style={{ color: "black" }}
                    className="title-btn"
                  >
                    DELETE
                  </button>
                  <button
                    style={{ color: "black" }}
                    className="title-btnn"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </Card>
            ))}
      </section>

      <div className="sentences">
        <h1>MEET OUR TEAM</h1>
        <div className="line"></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <p>
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type.
        </p>
      </div>

      <div className="card-work">
        <Card
          hoverable="true"
          style={{
            width: 350,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp"
            />
          }
        >
          <div className="card-workers">
            <h2>Gonzola Gina</h2>
            <h5>Web Developer</h5>
          </div>
        </Card>
        <Card
          hoverable="true"
          style={{
            width: 350,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg.webp"
            />
          }
        >
          <div className="card-workers">
            <h2>Holly Vincenzini</h2>
            <h5>Media Partner</h5>
          </div>
        </Card>
        <Card
          hoverable="true"
          style={{
            width: 350,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg"
            />
          }
        >
          <div className="card-workers">
            <h2>Ramirez Minita</h2>
            <h5>Graphicd Designer</h5>
          </div>
        </Card>
      </div>

      <div className="sentences">
        <h1>OUR LATEST BLOG</h1>
        <div className="line"></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <p>
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type.
        </p>
      </div>

      {/* END CARD SECTION */}
      <section className="end-cards">
        <Card
          className="hidden"
          hoverable="true"
          style={{
            width: 380,
          }}
          cover={
            <img
              className="img"
              alt="example"
              src="	https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg"
            />
          }
        >
          <div className="workers-info">
            <h3>Playback: Akufo-Addo speaks to business community</h3>
            <p>
              Posted by <Link style={{ color: "red" }}>admin</Link> at 04 Feb,
              2017
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
            <p>Etiam sagittis iaculis velit in tristique. Curabitur ac </p>
            <p>
              urna sed accumsan.. <Link className="read">Read More</Link>
            </p>
          </div>
        </Card>
        <Card
          className="hidden"
          hoverable="true"
          style={{
            width: 380,
          }}
          cover={
            <img
              className="img"
              alt="example"
              src="	https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg"
            />
          }
        >
          <div className="workers-info">
            <h3>Playback: Akufo-Addo speaks to business community</h3>
            <p>
              Posted by <Link style={{ color: "red" }}>admin</Link> at 04 Feb,
              2017
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <p>Etiam sagittis iaculis velit in tristique. Curabitur ac </p>
            <p>
              urna sed accumsan.. <Link className="read">Read More</Link>
            </p>
          </div>
        </Card>
        <Card
          className="hidden"
          hoverable="true"
          style={{
            width: 380,
          }}
          cover={
            <img
              className="img"
              alt="example"
              src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg"
            />
          }
        >
          <div className="workers-info">
            <h3>Playback: Akufo-Addo speaks to business community</h3>
            <p>
              Posted by <Link style={{ color: "red" }}>admin</Link> at 04 Feb,
              2017
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <p>Etiam sagittis iaculis velit in tristique. Curabitur ac </p>
            <p>
              urna sed accumsan.. <Link className="read">Read More</Link>
            </p>
          </div>
        </Card>
      </section>
    </>
  );
}

export default Home;
