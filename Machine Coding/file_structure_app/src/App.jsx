import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './assets/data/file_structure_data.json'
import Folder from './Foldex'
import useTraverseTree from './hooks/useTraverseTree'

function App() {

  const [folderData, setFolderData] = useState(data);

  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId, nodeTobeAdded, isFolder) => {
    let newData = insertNode(data, folderId, nodeTobeAdded, isFolder);

    setFolderData(newData);
  }


  return (
    <div> 
      Fileeee Structure App
      <br></br> 
      <br></br>
      {console.log(folderData)} 
      <Folder data = {folderData} handleInsertNode = {handleInsertNode}> </Folder>
    </div>
  )
}

export default App
