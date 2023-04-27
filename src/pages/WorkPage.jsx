import { useEffect } from "react";

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-100 ">
      <div>
        <h3 style={{ margin: "100px" }}>
          this Work page is under construction
        </h3>
      </div>
    </div>
  );
}
