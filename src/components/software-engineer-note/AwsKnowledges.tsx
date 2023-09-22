// styled-component
import { BlackCenterTitle } from "../styled-component/Title";
// images
import img1 from "../../assets/howToEnableCors/1.jpeg";
import img2 from "../../assets/howToEnableCors/2.jpeg";
import img3 from "../../assets/addingCorsHeaderToYourApiResponseHeader/1.jpeg";
import img4 from "../../assets/addingCorsHeaderToYourApiResponseHeader/2.jpeg";
import img5 from "../../assets/addingCorsHeaderToYourApiResponseHeader/3.jpeg";

export const HowToEnableCORS = () => {
  return (
    <>
      <BlackCenterTitle style={{ fontSize: "2rem" }}>
        How To Enable CORS
      </BlackCenterTitle>
      <div className="text-left" style={{ paddingInline: 100 }}>
        <ol>
          <li>Log in to your AWS console.</li>
          <li>
            Access the API Gateway and go straight into the resource for your
            function.
          </li>
          <li>Click on the API which you wished to enable the CORS.</li>
          <img src={img1} style={{ maxHeight: 300 }} />
          <li>Click on the "Enable CORS" button.</li>
          <img src={img2} style={{ maxHeight: 300 }} />
          <li>Click "Save" and now you are enabled the CORS for your API!</li>
        </ol>
      </div>
    </>
  );
};
export const AddingCorsHeaderToYourApiResponseHeader = () => {
  return (
    <>
      <BlackCenterTitle style={{ fontSize: "2rem" }}>
        Adding CORS Header To Your API Response Header
      </BlackCenterTitle>
      <div className="text-left" style={{ paddingInline: 100 }}>
        <ol>
          <li>
            Please adding this code to your API script when you were sending the
            reques.
          </li>

          <li>Click on the API which you wished to enable the CORS.</li>
          <img src={img3} style={{ maxHeight: 300 }} />
          <img src={img4} style={{ maxHeight: 300 }} />
          <li>
            You can check your console(inspect) on browser to verify the header
            was applied on your request.
          </li>
          <img src={img5} style={{ maxHeight: 300 }} />
        </ol>
      </div>
    </>
  );
};
