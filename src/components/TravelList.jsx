import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelData, setTravelData] = useState(travelPlansData);

  const cardStyle = {
    width: 800,
    border: "2px solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "black",
    textAlign: "left",
    padding: 20,
    margin: 20,
  };

  return (
    <div>
      {travelData.map((data) => {
        return (
          <div key={data.id} style={cardStyle}>
            <div>
              <img src={data.image} alt="image" style={{ width: 400 }} />
            </div>
            <div>
              <h3>
                {data.destination} ({data.days} Days)
              </h3>
              <p>
                <i>{data.description}</i>
              </p>
              <p>
                <strong>Price:</strong> {data.totalCost} €
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;

{
  /*
{
        "id": 1,
        "destination": "Paris, France",
        "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/paris.jpg",
        "days": 7,
        "allInclusive": true,
        "totalCost": 2200,
        "description": "Explore the romantic streets of Paris.",
        "parts": [
          {
            "name": "All-Inclusive Package",
            "description": "Includes flights, hotel, meals, entertainment, tours and tickets to tourist attractions.",
            "cost": 2200
          }
        ]
}
*/
}
