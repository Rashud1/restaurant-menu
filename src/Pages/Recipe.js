import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
    let params = useParams()
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
    const fetchDetails = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json()
        setDetails(detailData)
    }
    useEffect(()=>{
     fetchDetails()
    },[params.name])
  return (
    <DetailWrapper>
    <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
    </div>
    <Info>
        <div>
            <Button className={activeTab === 'instructions' ? 'active': ''} onClick={()=> setActiveTab('instructions')}>Instruction</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
        </div>
        {activeTab === 'instructions' ? (
        <div1>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div1>
        ) : (
            <ul>
                {details.extendedIngredients.map((ingredients)=>(
                    <li key={ingredients.id}>
                        {ingredients.original}
                    </li>
                ))}
            </ul>
        )}
    </Info>
    </DetailWrapper>
  )
}
const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
justify-content: center;
.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
h2{
    margin-bottom: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
img{
    border-radius: 2rem;
}
h3{
    text-align: justify;
}
`
const Button = styled.div`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid;
margin-right: 2rem;
font-weight: 600;

`
const Info = styled.div`
div{
    display: flex;
}
div1{
    display: grid;
}
margin-left: 10rem;
`
export default Recipe