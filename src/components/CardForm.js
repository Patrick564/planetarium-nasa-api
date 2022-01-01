import styled from 'styled-components'

const Card = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  visibility: ${props => props?.status ? 'visible' : 'hidden'};
  opacity: ${props => props?.status ? '1' : '0'};
  border-radius: 10px;
  transition: opacity 0.5s ease-in, visibility 0.5s ease-in, backdrop-filter 0.2s ease-out;
  backdrop-filter: ${props => props.status ? 'blur(5px)' : 'blur(0)'}
`

const Background = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  visibility: ${ props => props?.status ? 'visible' : 'hidden' };
  opacity: ${ props => props?.status ? '1' : '0' };
  border-radius: 10px;
  transition: opacity 0.5s ease-in, visibility 0.5s ease-in;
`

const Form = styled.form`
  right: 0;
  left: 0;
  top: 20%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  background: #fff;
  border-radius: 10px;
  padding: 25px 25px;
  display: flex;
  flex-direction: column;
  gap: 40px
`

const CardForm = ({ changeVisibility, formSubmit, visible, children }) => {
	return (
		<Card id={'card-form'} status={visible}>
			<Background status={visible} onClick={changeVisibility} />

			<Form id={'search-form'} onSubmit={formSubmit}>
				{children}
			</Form>
		</Card>
	)
}

export default CardForm
