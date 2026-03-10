import { useParams } from "react-router-dom";
import IndustryTemplate from "../../components/LocationTemplate";
import locations from "../../data/locations";


export default function LocationPage() {

  const { slug } = useParams();

  const data = locations[slug];

  if (!data) {
    return <h2 style={{padding:"100px"}}>Location Page Not Found</h2>;
  }

  return <IndustryTemplate data={data} />;
}