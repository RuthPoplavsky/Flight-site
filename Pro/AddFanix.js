import secure from "./Animations/securebasis.jpg";
import high from "./Animations/securehigh.jpg";
import green from "./Animations/green.png";
import visa from "./Animations/Visa.jpg";
import black from "./Animations/7nxmr.jpg";
StyleSheet = "Fanix.css";

function AddFanix() {

    return (
        <div>
            <div >
                <label >Choose An Insurance of the flight</label>
                <br></br>
                <button style={{ width: "300px" }}><img src={secure}  ></img></button>
                <button style={{ width: "300px" }}><img src={high}  ></img></button>
            </div>
            <div>
                <label>Choose A baggage</label>
            </div>
            <div>
                <label>Please select hand luggage</label>
            </div>
            <div >
                <label >Do you have a green pass?</label>
                <br></br>
                <img src={green} style={{ height: "50px" }} ></img>
            </div>
            <div>
                <label>Do you have a black signature on your passport?</label>
                <br></br>
                <img src={black} />
            </div>
            <div>
                <label>Which class do you want to be in? </label>
            </div>
            <div>
                <label> Please Choose A Seat</label>
            </div>
            <div>
                <label>Please check before entering the country that you have a visa, if required.</label>
                <br></br>
                <img src={visa} />
            </div>
        </div >
    );
}
export default AddFanix;