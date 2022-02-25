import Quagga, {
  QuaggaJSResultCallbackFunction,
  QuaggaJSResultObject,
} from "@ericblade/quagga2";
import { ReactElement, useEffect, useRef, useState } from "react";
import { NoPermissionsModal } from "./NoPermissionsModal";
import "./Scanner.scss";

const frequency = 30;
const lineWidth = 2;

const Scanner = ({
  onUpdate,
}: {
  onUpdate: QuaggaJSResultCallbackFunction;
}): ReactElement => {
  const ref = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [frontCamera, setFrontCamera] = useState(false);
  const [torchEnabled, setTorchEnabled] = useState(false);

  const quaggaConfig = {
    inputStream: {
      constraints: {
        height: window.innerHeight * 0.8 * window.devicePixelRatio,
        width: window.innerWidth * window.devicePixelRatio,
        facingMode: frontCamera ? "user" : "environment",
        focusMode: "continuous",
        aspectRatio: { ideal: (window.innerHeight * 0.8) / window.innerWidth },
      },
      target: "#scanner",
    },
    locator: {
      patchSize: "medium",
      halfSample: true,
    },
    frequency,
    decoder: {
      readers: ["ean_reader"],
    },
    locate: true,
  };
  useEffect(() => {
    void Quagga.init(quaggaConfig, (err: object) => {
      if (err) {
        setShowModal(true);
      }
      try {
        Quagga.start();
      } catch (e) {
        console.error("err", e);
      }
    });

    Quagga.onProcessed((result: QuaggaJSResultObject) => {
      const drawingCtx = Quagga.canvas.ctx.overlay;
      const drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function (box) {
              return box !== result.box;
            })
            .forEach(function (box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "gray",
                lineWidth: 1,
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "blue",
            lineWidth,
          });
        }
      }
    });

    Quagga.onDetected(onUpdate);
    return () => {
      void Quagga.stop();
    };
  }, [quaggaConfig]);

  return (
    <>
      {showModal ? (
        <>
          <NoPermissionsModal />
        </>
      ) : (
        <>
          <div id="passepartout"></div>
          <div id={"scanner"} ref={ref} />
        </>
      )}
    </>
  );
};

export default Scanner;
