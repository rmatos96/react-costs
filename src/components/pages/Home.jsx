import React from 'react'
import pigMoney from '../../assets/savings.svg'
import LinkButton from '../layout/LinkButton'


const Home = () => {
  return (
    <div className='min-h-[40rem]'>
      <section className='w-full flex flex-col items-center justify-center p-16'>
        <h1 className='text-[2.5rem] mb-[0.5rem]'>Bem-vindo ao <span className='text-[#ffbb33] py-[0.3rem] px-[0.5rem] bg-[#222]'>Costs</span> </h1>
        <p className='mb-6 text-slate-500'>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to={'/newproject'} text={'Criar Projeto'}/>
        <img className='w-[350px] my-8 ' src={pigMoney} alt="Costs" />
      </section>
    </div>
  )
}

export default Home