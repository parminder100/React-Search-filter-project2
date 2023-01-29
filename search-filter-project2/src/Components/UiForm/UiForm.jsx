import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {UserData} from "../UserData/UserData";
import "../UiForm/UiForm.css";
const UiForm = () =>{
    const [input, setInput] = useState("");
    const [searchdata, setSearchData] = useState(UserData);

    const handleClick = (e) =>{
        if(e.target.value !== ""){
            const result = searchdata.filter((el)=>{
                return el.name.toLowerCase().includes(e.target.value.toLowerCase());
            })
            console.log(result);
            setSearchData(result);
        }
        else{
            setSearchData(UserData)
        }
        setInput(e.target.value)
    }
    return(
        <>
            <div className='main-content'>
                <Form className='form-content'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">Search Data</Form.Label>
                    <br />
                    <Form.Control className='form-input' type="text" placeholder="Enter Name" value={input} onChange={handleClick} />
                    </Form.Group>
                </Form>
                <div>
                    <ul>
                        {
                            searchdata.map((e)=>{
                                return(
                                    <li key={e.id}>{e.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default UiForm;