import styled from "styled-components";

const Message = ({ message, ...props }) => {
  return (
    <span {...props}>
      {message}
    </span>
  )
}

const SpanMessage = styled(Message)`
  font-size: 0.8rem;
  align-self: center;
  color: tomato;
`

export default SpanMessage
