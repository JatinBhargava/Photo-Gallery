//import React from 'react'
import { useState, useEffect } from 'react'
import { projectStorage, projectFireStorage, timestamp } from '../firebase/config'


const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect(()=>{
       const storageRef = projectStorage.ref(file.name);
       const collectionRef = projectFireStorage.collection('image')

       storageRef.put(file).on('state_change',(snap)=>{
           let percentage = (snap.bytesTransfered/snap.totalBytes)*100;
           setProgress(percentage);
       },(err)=>{
           setError(err)
       },async ()=>{
           const url = await storageRef.getDownloadURL();
           const createAt = timestamp();
           collectionRef.add({url, createAt})
           setUrl(url);
       })
    },[file]);
     
    return { progress, error, url }
}

export default useStorage
