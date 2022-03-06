import Quagga, {
  QuaggaJSResultCallbackFunction,
  QuaggaJSResultObject,
} from "@ericblade/quagga2";
import { ReactElement, useEffect, useRef, useState } from "react";
import { NoPermissionsModal } from "./NoPermissionsModal";
import "./Scanner.scss";
import ScannerControls from "./ScannerControls";

const frequency = 30;
const lineWidth = 2;
const constraintMultiplier = 0.8;

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
        height:
          window.innerHeight * constraintMultiplier * window.devicePixelRatio,
        width: window.innerWidth * window.devicePixelRatio,
        facingMode: frontCamera ? "user" : "environment",
        focusMode: "continuous",
        aspectRatio: {
          ideal:
            (window.innerHeight * constraintMultiplier) / window.innerWidth,
        },
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
          <div id={"scanner"} ref={ref} />
          <ScannerControls
            switchCamera={(): void => {
              setFrontCamera(!frontCamera);
            }}
            switchTorch={(): void => {
              const track = Quagga.CameraAccess.getActiveTrack();
              if (track && typeof track.getCapabilities === "function") {
                void track.applyConstraints({
                  advanced: [
                    { torch: !torchEnabled } as MediaTrackConstraintSet,
                  ],
                });
                setTorchEnabled(!torchEnabled);
              }
            }}
          />
        </>
      )}
    </>
  );
};

export default Scanner;
