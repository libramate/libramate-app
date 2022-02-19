import { QuaggaJSResultObject } from "@ericblade/quagga2";
import { useNavigate } from "react-router";
import Scanner from "./Scanner";
import ScannerControls from "./ScannerControls";

export default function BarcodeScanner(): JSX.Element {
  const navigate = useNavigate();
  let eanCount: Record<string, number> = {};
  let active = true;
  const unknownLimit = 10;

  const handleData = function (data: QuaggaJSResultObject) {
    // TODO query backend to find out whether to create or whatever the book
    navigate(`/books/create?isbn=${data.codeResult.code}`);
  };

  return (
    <div id="scanner-component">
      <Scanner onUpdate={handleData} />
      <ScannerControls />
    </div>
  );
}
