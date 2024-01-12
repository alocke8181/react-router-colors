import React, {useState} from "react";
import { useNavigate } from "react-router";

const ColorForm = ({addColor}) =>{
    
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name : '',
        color : '#000000'
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((data) =>({
            ...data,
            [name] : value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let url = formData.name.toLowerCase().replace(' ','_');
        addColor(formData.name, url, formData.color);
        setFormData({
            name : '',
            color : '#000000'
        })
        navigate('/colors');
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                type="text"
                name="name"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <input 
                id="color"
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )

}

export default ColorForm;