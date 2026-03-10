import { useParams } from "react-router-dom";
import IndustryTemplate from "../../components/IndustryTemplate";
import industries from "../../data/industries";


export default function IndustryPage() {

  const { slug } = useParams();

  const data = industries[slug];

  if (!data) {
    return <h2 style={{padding:"100px"}}>Industry Page Not Found</h2>;
  }

  return <IndustryTemplate data={data} />;
}