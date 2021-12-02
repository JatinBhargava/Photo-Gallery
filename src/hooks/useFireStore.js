//import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { projectFireStorage } from "../firebase/config";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);


  useEffect(()=>{
      const unSub = projectFireStorage.collection(collection)
      .orderBy('createAt', 'desc')
      .onSnapshot((snap)=>{
         let documents = [];
         snap.forEach(doc =>{
           documents.push({...doc.data(), id: doc.id});
         });
         setDocs(documents);
      });

    return ()=> unSub();

  },[collection])

  return {docs};
}

export default useFireStore;