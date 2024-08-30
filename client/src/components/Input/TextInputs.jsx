import TextInput from './TextInput'

const TextInputs = ({ handleInputChange, inputs }) => {
  return (
    <>
      <TextInput
        handleInputChange={handleInputChange}
        error={inputs.error1}
        input={inputs.input1}
        inputText={'Input 1'}
        name={'input1'}
      />
      <TextInput
        handleInputChange={handleInputChange}
        error={inputs.error2}
        input={inputs.input2}
        inputText={'Input 2'}
        name={'input2'}
      />
    </>
  )
}

export default TextInputs
