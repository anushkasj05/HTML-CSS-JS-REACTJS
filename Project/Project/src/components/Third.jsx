import Second from "./Second";
import First from "./First";
function Third() {
  const isEligible = props.isEligible;
  return <>{isEligible ? <First /> : <Second />}</>;
}
