
const Content= function(){
    const subscriber=[{
        name:'ganesh',
        phone:'88888'
    },{
        name:'Gopi',
        phone:'78929'
    }
    ]
    return(
        <>
            <button className="btn-class">ADD</button>
            <div className="grid">
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item phone-heading">Phone Number</span>
            </div>
            {
                subscriber.map((task,index)=>{
                    return(
                        <div className="grid">
                            <span className="grid-item">{task.name}</span>
                            <span className="grid-item">{task.phone}</span>
                            <button className="delete-btn">Delete</button>
                        </div> 
                    )
                })
            }
        </>
    )
}

export default Content;