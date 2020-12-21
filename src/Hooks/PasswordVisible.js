import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const PasswordVisible = () => {

const [visible, setVisible] = useState(false)
const Icon =(visible ? faEyeSlash : faEye)

const InputType = visible ? "text" : "password";

    return [InputType, Icon];
}

export default PasswordVisible
