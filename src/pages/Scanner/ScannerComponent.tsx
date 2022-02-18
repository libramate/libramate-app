import { QuaggaJSResultObject } from "@ericblade/quagga2";
import { useNavigate } from "react-router";
import Scanner from "./Scanner";

export default function BarcodeScanner(): JSX.Element {
  const navigate = useNavigate();
  let eanCount: Record<string, number> = {};
  let active = true;
  const unknownLimit = 10;

  const handleData = function (data: QuaggaJSResultObject) {
    console.log(data);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Scanner onUpdate={handleData} />
    </div>
  );
}
