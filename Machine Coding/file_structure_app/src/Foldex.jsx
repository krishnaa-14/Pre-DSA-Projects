import {useState} from 'react';

const Folder = ({data, handleInsertNode}) => {

    const [content, setContent] = useState(false);
    const [showInputBox, setShowInputBox] = useState({
        isFolder : false,
        showInput : false
    }); 

    if(!data.isFolder) {
        return <div style = {{padding : "2px", margin : "1px"}}>
            📁 {data.name}
        </div>
    }

    const handleOnAddClick = (e, isFolder) => {
        e.stopPropagation();
        setContent(true);
        setShowInputBox({
            isFolder : isFolder,
            showInput : true
        });
    }

    const handleOnKeyDown = (e, isFolder) => {
        if(e.key === "Enter") {
            // Need More logic here. 

            handleInsertNode(data.id, e.target.value, isFolder)

            setShowInputBox({...showInputBox, showInput : false})
            setContent(true);
        }
    }
    // const randomNumber = Math.floor(Math.random() * 6);

    return <div style = {{width : "300px"}}>
        <div onClick={() => setContent(!content)} style = {{padding : "2px", margin : "1px", cursor : "pointer", display : "flex", justifyContent : "space-between", backgroundColor : "#ECECEC"}}>
            <div >
                🗂️ {data.name}
            </div>
            <div style = {{display : "flex"}}>
                <button onClick = {(e) => handleOnAddClick(e, true)}style = {{backgroundColor : "white", marginRight : "2px"}}> Add Folder </button>
                <button onClick = {(e) => handleOnAddClick(e, false)}style = {{backgroundColor : "white"}}> Add File </button>
            </div>
        </div>

        {content && data.isFolder === true && <div style = {{marginLeft : "15px"}}>

            {
                showInputBox.showInput && 
                <div>
                    {showInputBox.isFolder === true ? '🗂️' : '📁'}
                    <input 
                    type = "text"
                    onBlur = {() => setShowInputBox({...showInputBox, showInput : false})}
                    onKeyDown={(e) => handleOnKeyDown(e, showInputBox.isFolder === true ? true : false)} 
                    autoFocus
                    ></input>
                </div>
            }

            {
                data.items.map(curr => {
                    return <Folder key = {curr.id} data = {curr} handleInsertNode={handleInsertNode}></Folder>
                })
            }

        </div>}
    </div>
}

export default Folder;