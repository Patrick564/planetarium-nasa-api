import styled from 'styled-components'

import CardForm from '../components/CardForm.js'
import Content from '../components/Content.js'
import Input from '../components/Input.js'
import Image from '../components/Image.js'
import Navbar from '../components/Navbar.js'
import SendBtn from '../components/SendBtn.js'
import SpanMessage from '../components/SpanMessage.js'

import useApodForm from '../hooks/useApodForm.js'
import useValidateDate from '../hooks/useValidateDate.js'
import useCardVisibility from '../hooks/useCardVisibility.js'

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 5px 5px;
  padding: 15px 15px;
  border-radius: 15px;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 0 5px #133F47;
  color: #34B0C6;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`

const Explanation = styled.p`
  margin: 5px 5px;
  padding: 35px 35px;
  border-radius: 15px;
  color: #34B0C6;
  box-shadow: 0 0 5px #133F47;
`

const Apod = () => {
  const [formVisibility, setFormVisibility] = useCardVisibility(false)
  const [data, setData] = useApodForm({ date: '' })
  const [validate, setValidate] = useValidateDate({ message: '', disabledButton: false })

  return (
    <div>
      <CardForm
        isVisible={formVisibility}
        changeVisibility={setFormVisibility}
        formSubmit={setData}
      >
        <label style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Input id={'date'} type={'date'} name={'date'} onChange={setValidate} />
          <SpanMessage message={validate.message} />
        </label>

        <SendBtn disabled={validate.disabledButton} onClick={setFormVisibility}>Search date</SendBtn>
      </CardForm>

      <Navbar changeVisibility={setFormVisibility} />

      <Content>
        <Image src={data.apiData?.url} alt={'Loading'} />

        <Info>
          <Title>
            <h2>{data.apiData?.title}</h2>
            <span style={{ fontStyle: 'italic' }}>{data.apiData?.date}</span>
          </Title>

          <Explanation>{data.apiData?.explanation}</Explanation>
        </Info>
      </Content>
    </div>
  )
}

export default Apod
