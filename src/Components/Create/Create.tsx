import  { useContext, useState } from 'react';
import './Create.css';
import {FirebaseContext,AuthContext} from '../../Store/FirebaseContext'
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const navigate=useNavigate()

  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')

  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  
  if(!user){
    navigate("/login")
  }

  console.log(user,'user is here in create pagte ===========>>>>>>>>>>');
  
  const [image,setImage]=useState(null)
  const date=new Date()

  return (
    <>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="cate"
              name="category"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price}
              onChange={(e)=>setPrice(e.target.value)} id="price-id" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={(e)=>{
              e.preventDefault()
              firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
                ref.getDownloadURL().then((url:any)=>{
                firebase.firestore().collection('products').add({
                  name,
                  category,
                  price,
                  url,
                  userId:user.uid,
                  createdAt:date.toDateString()
                })
                navigate('/')
              })})
            }}>upload and Submit</button>
          </form>
        </div>
    </>
  );
};

export default Create;