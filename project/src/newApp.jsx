import React,{useState} from  'react';
import './App.css';
const App = ()=>{
    const [item,setItem] = useState('');
    const [number,setNumber] = useState('');
    const [items,setItems] = useState([]);
    const [todoEdit, setTodoEdit] = useState(null);
    const [textEditing, setTextEditing] = useState('');
    function handleChange(e){
        setItem(e.target.value);
    }
    function handleChangeNumber(e){
        setNumber(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        const newItem = {
            id: new Date().getTime(),
            content: item.trim(),
            number: number.trim()
        }
        if(newItem.content.length > 0){
            setItems([...items].concat(newItem));
            console.log({newItem})
            setItem('');
            setNumber('');
        }else{
            alert('Enter Valid Syntax')
        }
    }
    function submitEdits(id){
        const updatedItems = [...items].map((item)=>{
            if(item.id === id){
                item.content = textEditing;
                alert('Updated')
            }
            return item;
        });
        setItems(updatedItems);
        setTodoEdit(null);
    }
    return (
        <div className="App">
            <p>
                <h1 id='contact'><i class="fa-solid fa-address-book"></i> Contact</h1> <h1 id='manager'>Manager</h1>
                </p>
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" value={item} placeholder='Contact' onChange={handleChange} />
                <input type="tel" value={number} placeholder='Number' onChange={handleChangeNumber} />
                <button type='submit'>Add</button>
            </form>
            <div className='container'>
                {items.map((item)=>(
                <div className='content'>
                    <div className='item-content'>
                        {item.id === todoEdit ?(
                            <div>
                            <input type='text' placeholder='Enter Your Edit' onChange={(e)=>{setTextEditing(e.target.value)}} />
                            <button id='exitButton' onClick={()=>setTodoEdit(7)}>X</button>
                            </div>
                            ):(
                                <div><h3>{item.content}</h3>
                                <p>{item.number}</p>
                                </div>
                            )}
                    </div>
                    <div className='item-actions'>
                        {item.id === todoEdit ?(
                            <button type='submit' id="submitEditButton" onClick={()=>submitEdits(item.id)}>SubmiT edit</button>):(
                            <button type='reset'  onClick={()=> setTodoEdit(item.id)}>Edit</button>
                        )}
                        
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default App;