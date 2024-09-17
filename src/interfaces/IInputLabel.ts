interface IInputLabel {
  textLabel: string
  handleChange: (e: any) => void
  inputName: string
  inputValue: string
  isExtra?: boolean
}