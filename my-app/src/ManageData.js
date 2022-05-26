import { useState } from "react"
import DataCard from "./DataCard"
import data from "./data"

const ManageData = () => {
    const [allData, setAllData] = useState(data)
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      role: ""
    })

    const mapOverData = allData.map((item, index) => {
        return <DataCard key={index} allData={item}/>
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //CONCAT- JOIN AS AN ARRAY, BC WE ARE USING AN ARRAY OF DATA
        setAllData(allData.concat(
            {
                name: formData.name,
                email: formData.email,
                role: formData.role
            }
        ))
        setFormData({
            name: "",
            email: "",
            role: ""
        })
    }


    return ( 
        <div className="wrapper">
            {mapOverData}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}                
                />
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email"
                    placeholder="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="role">Current Role</label>
                <input 
                    type="text"
                    placeholder="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                />
                <input type="submit" value="Add Team Member" disabled={!formData.name || !formData.email || !formData.role}/>
            </form>
        </div>
     );
}
 
export default ManageData;