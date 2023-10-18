import { ClipLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div
      className="spinner-container"
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        background: "black",
      }}
    >
      <ClipLoader
        color="#FBAF85"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
