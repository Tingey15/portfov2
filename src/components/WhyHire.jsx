import SimpleCard from "./SimpleCard";
import { whyHireData } from "../data";
export default function WhyHire() {
  return (
    <div className="whyHire">
      <div className="yHireHeader">
        <h1>Why Hire Me</h1>
      </div>
      <div className="cardCont">
        {whyHireData.map((cur) => (
          <SimpleCard {...cur} />
        ))}
      </div>
    </div>
  );
}
