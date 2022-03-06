import { QuaggaJSResultObject } from "@ericblade/quagga2";
import { useNavigate } from "react-router";
import Scanner from "./Scanner";
import ScannerControls from "./ScannerControls";

export default function BarcodeScanner(): JSX.Element {
  const navigate = useNavigate();
  const eanCount: Record<string, number> = {};
  const active = true;

  const handleData = function (data: QuaggaJSResultObject): void {
    if (data.codeResult.code) {
      // TODO query backend to find out whether to create or whatever the book
      navigate(`/books/create?isbn=${data.codeResult.code}`);
    }
  };

  return (
    <div id="scanner-component">
      <Scanner onUpdate={handleData} />
    </div>
  );
}
