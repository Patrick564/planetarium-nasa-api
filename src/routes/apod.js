import Content from '../components/Content.js'
import Navbar from '../components/Navbar.js'
import SearchForm from '../components/SearchForm.js'

import useForm from '../hooks/useForm.js'

const Apod = () => {
  const [form, handleChange] = useForm({ date: '' })

  return (
    <div>
      <Navbar>
        <SearchForm handleChange={handleChange} />
      </Navbar>

      <Content data={form.apiData} />
    </div>
  )
}

export default Apod
