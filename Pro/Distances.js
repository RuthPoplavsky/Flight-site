
import { useState } from 'react';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ShowModal from './ShowModal';



function Distances() {
    const pol = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();


    const [From, setFrom] = useState("");
    const [Distance, setDistance] = useState("");

    // const pol = useSelector((state) => state.pruductReducer);
    // const dispatch = useDispatch();

    // console.log(useSelector((state) => state.pruductReducer))




    return (
        <div>
  <div class="input-group mb-3">
                 <label class="input-group-text" for="inputGroupSelect01">From</label>
                 <select class="form-select" onChange={(e) => setFrom(e.target.value)}>
                     <option value="TLV">Israel </option>
                     <option value="ATL/KATL"> Hartsfield Jackson Atlanta International Airport	 </option>
                     <option value="ORD/KORD">O'Hare International Airport </option>
                     <option value="DXB">Dubai International Airport </option>
                     <option value="TLV">England- london </option>
                     <option value="LAX">Los Angeles International Airport </option>
                     <option value="PEK">China- Beijing Capital International Airport</option>
                     <option value="Egy"> Egypt- Sphinx International Airport</option>
                    <option value="Frn"> France- Charles de Gaulle International Airport</option>
                     <option value="Arg"> Argentina- Buenos Aires Jorge Newbery Airport – IATA Code – AFP </option>
                     <option value="Hld"> Holland- Rotterdam The Hague Airport</option>
                     <option value="Spn"> Spain- Lic. Adolfo López Mateos International Airport</option>
                 </select>

                 <label class="input-group-text" for="inputGroupSelect01">To</label>
                 <select class="form-select" onChange={(e) => setDistance(e.target.value)} >
                     <option value="TLV">Israel </option>
                     <option value="ATL/KATL"> Hartsfield Jackson Atlanta International Airport	 </option>
                     <option value="ORD/KORD">O'Hare International Airport </option>
                     <option value="DXB">Dubai International Airport </option>
                    <option value="TLV">England- london </option>
                     <option value="LAX">Los Angeles International Airport </option>
                     <option value="PEK">China- Beijing Capital International Airport</option>
                     <option value="Egy"> Egypt- Sphinx International Airport</option>
                     <option value="Frn"> France- Charles de Gaulle International Airport</option>
                    <option value="Arg"> Argentina- Buenos Aires Jorge Newbery Airport – IATA Code – AFP </option>
                    <option value="Hld"> Holland- Rotterdam The Hague Airport</option>
                     <option value="Spn"> Spain- Lic. Adolfo López Mateos International Airport</option>
                 </select>
                 <button class="input-group-text"> OK</button>
           </div>



        
        <div className="grid-container">
            {pol.map((item, i) => (
                    <div key = {item.id} className="card" style={{ width: "300px" }}>
                        <img className="card-img-top" src={item.image} alt="Card image cap" ></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            {/* <a href="#" className="btn btn-primary"  ></a> */}
                            <a href="#" className="btn btn-outline-primary"  ><ShowModal product={item} ></ShowModal></a>
                        </div>
                    </div>
            ))};
            
        </div>


          
    </div>
      


     
        //     <div class="input-group mb-3">
        //         <input type={"date"} placeholder="Choose Date" />
        //         <input type={"date"} placeholder="Choose Date" />
        //         <input type={"number"} placeholder="Max" />
        //         <input type={"number"} placeholder="Min" />
        //         <button>Ok!</button>
        //     </div>
        //     {/* {   <div className="grid-container">
        //         initialState.forEach(item =>
        //     <div className="card" style={{ width: "300px" }}>
        //         <img className="card-img-top" src={item.image} alt="Card image cap" ></img>
        //         <div className="card-body">
        //             <h5 className="card-title">{item.name}</h5>
        //             <p className="card-text">{item.escription}</p>
        //             <a href="#" className="btn btn-primary" >Product Details</a>
        //             <a href="#" className="btn btn-outline-primary" >Go somewhere</a>
        //         </div>);
        //     </div>} */}

        // </div>

    );
}

export default Distances;