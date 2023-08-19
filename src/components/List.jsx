
const List =(props)=> {
    const { list, setList}=props;

const deleteTask =(index) =>{

    const newList = list.filter((_task, indexFilter) =>{
        return indexFilter !== index;
    });

    setList(newList);

}

const taskStatus = (index) =>{
    const updateList= list.map((task, mapIndex) =>{
        if(index === mapIndex){
            task.status = !task.status
        }
        return task;
    });
    setList(updateList);
}


    return (
        <div className="cuerpo">
            {list.map((task, index) =>
                <div key={index}>
                    <input className="estilo1"  type="checkbox" onChange={()=>taskStatus (index)}checked={task.status}></input>
                    <span style={{textDecorationLine: task.status ? "line-through": "" }} >{task.title}</span>
                    <button className="estilo" onClick={() => deleteTask(index)}>Delete task</button>

                </div>
            )}

        </div>
    )
}

export default List;