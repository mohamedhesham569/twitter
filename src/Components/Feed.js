import React, { useEffect, useState } from 'react'
import "./css/Feed.css"
import "../input.css"
import Post from './Post'
import '../Firebase'; // Add this line prevent firebase not loading error
import { getFirestore, addDoc, collection } from "firebase/firestore"; 
import app from '../Firebase';
import { getDocs } from "firebase/firestore";
function Feed() {
    let [storedValues, setStoredValues] = useState([]);
    const [tweetmassege, settweetmassage] = useState('');
  const [tweetimage, settweetimage] = useState('');

  const db = getFirestore();

  const saveDataToFirestore = async () => {
      const docRef = await addDoc(collection(db, "posts"), {
        name:"Elbenzo9",
        username:"mohamedhesham",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtug5CYlRxgK8GHLqWR2z9k1EcTpqX_FfPUmDmZv3R1VtsOIO0wkN9X0w&s=10",
        post: tweetmassege,
        Verified:true,
        postimage:tweetimage
      });
      alert("Document written to Database");
      setTimeout("location.reload(true);", 1000)
  };

    useEffect(()=>{
        const fetchDataFromFirestore = async () => {
    		const querySnapshot = await getDocs(collection(db, "posts"));
    		const temporaryArr = [];
    		querySnapshot.forEach((doc) => {
      			temporaryArr.push(doc.data());
    		});
    		setStoredValues(temporaryArr);
  	};
    fetchDataFromFirestore()
    },[])
    console.log(storedValues)
    
  return (
    <>
    <div className="feed mx-2">
    
    <div className="feed-header font-bold">
        home
    </div>

    <div className="feed-box">
        <div className="feed-content p-4 flex items-center">
        <div className="feed-avatar">
        </div>
        <div className="feed-input text-3xl p-3">
            <input type="text" className='capitalize' value={tweetmassege} onChange={(e)=>settweetmassage(e.target.value)} placeholder='what is up ?!' />
        </div>
    </div>
    <input type="text" className='my-2 mx-6 capitalize' value={tweetimage} onChange={(e)=>settweetimage(e.target.value)} placeholder='image url' />
    <button type="submit" onClick={saveDataToFirestore} >tweet</button>
    </div>

    <div className="posts">
        {storedValues.map(post=>(
            <Post name={post.name} avatar={post.avatar} username={post.username} post={post.post} Verified={true} postimage={post.postimage} />
        ))}
    </div>
    </div>
    </>
  )
}

export default Feed