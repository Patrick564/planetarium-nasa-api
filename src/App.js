import Content from './components/Content.js'
import StyledNavbar from './components/Navbar.js'

import useForm from './hooks/useForm.js'

const App = () => {
  const [form, handleChange] = useForm({ date: '' })

  console.log(form)

  return (
    <div>
      <StyledNavbar change={handleChange} />
      <Content data={form.apiData} />
    </div>
  )
}

export default App
