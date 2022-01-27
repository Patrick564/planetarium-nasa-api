import styled from 'styled-components'

const ImgStyled = styled.img`
  width: 250px;
  height: 250px;
`

const Photos = ({ photos, ...props }) => {
  return (
    <div {...props}>
      {photos?.map((photo, id) => {
        return (
          <ImgStyled key={id} src={photo} />
        )
      })}
    </div>
  )
}

const PhotosGrid = styled(Photos)`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1.5fr);
  grid-gap: 1rem;

  @media (min-width: 320px) and (max-width: 425px) {
    grid-template-columns: repeat(1, 1.5fr);
    grid-gap: 1.5rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1.5fr);
    grid-gap: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1.5fr);
    grid-gap: 1.5rem;
  }
`

export default PhotosGrid
