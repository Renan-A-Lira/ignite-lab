import clsx from 'clsx'
import './styles/global.css'
import { Logo } from './Logo'
import { Heading } from './components/HeadingComponent/Heading'
import { Text } from './components/TextComponent/Text'
import { TextInput } from './components/TextInputComponent/TextInput'
import { EnvelopeSimple, Key } from 'phosphor-react'
import { Checkbox } from './components/CheckBoxComponent/Checkbox'
import { Button } from './components/ButtonComponent/Button'


export const App = () => {

  return (
    <div 
    className={clsx(
      'App',
      'w-screen h-screen flex flex-col bg-gray-900 items-center justify-center text-gray-100'
    )}>
      <header className='flex flex-col items-center'>
        <Logo/>
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-2'>
          Faça Login e começe a usar!
        </Text>
      </header>

      <form action="" className='flex flex-col items-stretch mt-10 w-full max-w-sm gap-3'>

        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text>Endereço de E-mail:</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input placeholder='Insira seu e-mail...' name='email' id='email' type='email'/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text>Senha:</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Key />
            </TextInput.Icon>
            <TextInput.Input placeholder='Sua Senha Aqui' name='password' id='password' type='password'/>
          </TextInput.Root>
        </label>

        <label htmlFor="remenber" className='flex gap-2'>
          <Checkbox id='remenber'/>
          <Text className='text-gray-400'>
            Lembrar-me de mim por 30 dias
          </Text>
        </label>

        <Button asChild>
          <button type='submit' className='mt-5'>Enviar</button>
        </Button>


      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>

        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline'>Esqueçeu Sua Senha?</a>
        </Text>

        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline'>Não Possui Conta? Crie Uma Agora!</a>
        </Text>


      </footer> 

      
    </div>
  )
}