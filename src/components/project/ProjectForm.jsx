import React, { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({btnText}) => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    // const fetchData = async () => {
    //   const data = await fetch('http://localhost:5000/categories')
    //   const json = await data.json()
    //   setCategories(json)
    //   console.log(categories);
    // }

    // fetchData()
    fetch("http://localhost:5000/categories", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      setCategories(data)
      console.log(data);
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div >
        <form action="" className='w-full my-8'>
            <Input type={'text'} text={'Nome do Projeto'} name={'name'} placeholder={'Insira o nome do projeto'}/>

            <Input type={'number'} text={'Orçamento do Projeto'} name={'budget'} placeholder={'Insira o orçamento total'}/>

            <Select name={'category_id'} text={'Selecione a categoria'} options={categories}/>

            <SubmitButton text={btnText}/>
            
        </form>
    </div>
  )
}

export default ProjectForm