import Input from './Input.js'
import Select from './Select.js'

const Form = ({ form, ...props }) => {
  return (
    <div>
      <form onSubmit={form}>
        <Select name={'type'}>
          <option value={'earth_date'} selected>Earth Date</option>
          <option value={'sol'}>Martian Sol</option>
        </Select>

        <Input />

        <Select name={'camera'}>
          <option value={'fhaz'} selected>Front Hazard Avoidance Camera</option>
          <option value={'rhaz'}>Rear Hazard Avoidance Camera</option>
          <option value={'mast'}>Mast Camera</option>
          <option value={'chemcam'}>Chemistry and Camera Complex</option>
          <option value={'mahli'}>Mars Hand Lens Imager</option>
          <option value={'mardi'}>Mars Descent Imager</option>
          <option value={'navcam'}>Navigation Camera</option>
          <option value={'pancam'}>Panoramic Camera</option>
          <option value={'minites'}>Miniature Thermal Emission Spectrometer (Mini-TES)</option>
        </Select>

        <button type={'submit'}>Search</button>
      </form>
    </div>
  )
}

export default Form
