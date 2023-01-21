import "../styles/Stars.css";

export const Stars = () => {
  return (
    <div
      className="stars-container"
      style={{
        pointerEvents: "none",
        position: "absolute",
        width: "100%",
        height: "100vh",
        //height: "50vh",
        zIndex: 10,
        // overflowX: "clip",
        overflow: "hidden",
      }}
    >
      <span
        className="star star1"
        style={{ right: "50%", animationDuration: "10s" }}
      ></span>
      <span
        className="star star2"
        style={{ right: "30%", animationDuration: "14s" }}
      ></span>
      <span
        className="star star3"
        style={{ right: "-10%", animationDuration: "19s" }}
      ></span>
      <span
        className="star star4"
        style={{ right: "-40%", animationDuration: "18s" }}
      ></span>
      <span
        className="star star5"
        style={{ right: "-1%", top: "100%", animationDuration: "17s" }}
      ></span>
      <span
        className="star star6"
        style={{ right: "-50%", top: "100%", animationDuration: "16s" }}
      ></span>
    </div>
  );
};
