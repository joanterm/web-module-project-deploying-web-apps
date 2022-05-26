const DataCard = (props) => {
    const { allData } = props
    return ( 
        <div className="card">
            <p className="name">{allData.name}</p>
            <p>{allData.email}</p>
            <p className="role">{allData.role}</p>
        </div>
     );
}
 
export default DataCard;