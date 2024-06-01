import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Service() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      console.log("response", response);

      if (response.ok) {
        const data = await response.json();
        setServices(data);
        console.log("service", data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className="text-white d-flex justify-content-center p-4 mt-3 mb-5 ">
        <h1 className="border-b text-5xl">Services</h1>
      </div>
      <div className=" container grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-4">
        {services &&
          services.map((curElem, index) => (
            <Card
              key={index}
              className="bg-transparent text-white border-1"
              sx={{ maxWidth: 300 }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxWidth: 250,
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                }}
                image="/images/design.png"
                alt="Web Development"
              />
              <CardContent>
                <div className="service-info">
                  <p>{curElem.provider}</p>
                  <p className="">{curElem.price}</p>
                </div>
                <Typography gutterBottom variant="h5" component="div">
                  {curElem.service}
                </Typography>
                <Typography
                  className="service-info"
                  variant="body2"
                  color="white"
                >
                  {curElem.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
