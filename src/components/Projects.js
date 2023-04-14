import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Pizza from "../content/websitePhotos/pizzaprojesi2.PNG";
import { pizzaStoreText } from "../content/content";
import ReduxFilm from "../content/websitePhotos/reduxfilmprojesi.PNG";
import { reduxFilmProjesiText } from "../content/content";
import ShoppingCard from "../content/websitePhotos/shoppingcart.PNG";
import { shoppingCardText } from "../content/content";
import { FaAngleDoubleRight } from "react-icons/fa";
import { DataContext } from "../context/DataContext";
const Projects = () => {

  const { content } = useContext(DataContext);


  return (
    <div id="projects">
      <section>
        <div className="titleh2">
          <h2 className="title">{content.projects}</h2>
        </div>
        <div className="projectsContainer">
          <div>
            <Card style={{ width: "28rem", minHeight: "650px" }}>
              <Card.Img
                variant="top"
                src={Pizza}
                style={{
                  width: "398px",
                  height: "240px",
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#3730A3",
                    fontWeight: "500",
                    fontSize: "30px",
                    marginBottom: "15px",
                    marginTop: "20px",
                  }}
                >
                  Pizza Form Project
                </Card.Title>
                <Card.Text style={{ color: "#6b7280" }}>
                  {pizzaStoreText}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  React
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Router
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Axios
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 15px 6px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Cypress
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="links" style={{ marginTop: "15px" }}>
                <Card.Link
                  href="https://github.com/msamet07/s7pizza"
                  target="_blank"
                  style={{ display: "flex" }}
                >
                  View on Github <FaAngleDoubleRight />
                </Card.Link>
                <Card.Link
                  href="https://effervescent-beijinho-073b66.netlify.app"
                  target="_blank"
                >
                  Go to app <FaAngleDoubleRight />
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "28rem", minHeight: "650px" }}>
              <Card.Img
                variant="top"
                src={ReduxFilm}
                style={{
                  width: "398px",
                  height: "240px",
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#3730A3",
                    fontWeight: "500",
                    fontSize: "30px",
                    marginBottom: "15px",
                    marginTop: "20px",
                  }}
                >
                  Favorite Movies!
                </Card.Title>
                <Card.Text style={{ color: "#6b7280" }}>
                  {reduxFilmProjesiText}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush box-2">
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  React
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Redux
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Router
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 15px 6px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Axios
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="links" style={{ marginTop: "15px" }}>
                <Card.Link
                  href="https://github.com/msamet07/filmler"
                  target="_blank"
                >
                  View on Github <FaAngleDoubleRight />
                </Card.Link>
                <Card.Link
                  href="https://meek-cactus-586a90.netlify.app"
                  target="_blank"
                >
                  Go to app <FaAngleDoubleRight />
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "28rem", minHeight: "650px" }}>
              <Card.Img
                variant="top"
                src={ShoppingCard}
                style={{
                  width: "398px",
                  height: "240px",
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#3730A3",
                    fontWeight: "500",
                    fontSize: "30px",
                    marginBottom: "15px",
                    marginTop: "20px",
                  }}
                >
                  Shopping Card!
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#6b7280",
                    height: "96px",
                  }}
                >
                  {shoppingCardText}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush box-3">
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Redux
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  React
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  Router
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="links" style={{ marginTop: "30px" }}>
                <Card.Link
                  href="https://github.com/msamet07/shopping-card"
                  target="_blank"
                >
                  View on Github <FaAngleDoubleRight />
                </Card.Link>
                <Card.Link
                  href="https://shopping-card-ym6x.vercel.app/"
                  target="_blank"
                >
                  Go to app <FaAngleDoubleRight />
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
