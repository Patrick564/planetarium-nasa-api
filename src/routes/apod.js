import Content from '../components/Content.js'
import StyledNavbar from '../components/Navbar.js'

import useForm from '../hooks/useForm.js'

const Apod = () => {
  const [form, handleChange] = useForm({ date: '' })

  return (
    <div>
      <StyledNavbar change={handleChange} />
      <Content data={form.apiData} />
    </div>
  )
}

export default Apod
