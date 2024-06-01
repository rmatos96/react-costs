import React from 'react'
import ProjectForm from '../project/ProjectForm'

const NewProject = () => {
  return (
    <div className='min-h-[40rem]'>
      <div className='w-[450px] m-auto p-12'>
        <h1 className='mb-2 text-4xl font-bold'>Criar Projeto</h1>
        <p className='text-[#7b7b7b]'>Crie seu projeto para depois adicionar os serviços!</p>
        <ProjectForm btnText="Criar Projeto"/>
      </div>
    </div>
  )
}

export default NewProject