import ImageGrid from './Components/ImageGrid';
import Title from './Components/Title';
import UploadForm from './firebase/UploadForm';
import Modal from './Components/Modal';
import { useState } from 'react';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
     <Title/>
     <UploadForm/>
     <ImageGrid setSelectedImage = {setSelectedImage}/>
     {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
