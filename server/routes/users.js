import express from 'express'
import isEmpty from 'lodash/isEmpty'
import validator from 'validator'

let router = express.Router()

const validateInput = data => {
    let errors = {}
    if(validator.isEmpty(data.username)){
        errors.username = 'The field is required'
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'The field is required'
    }

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is valid'
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'The field is required'
    }

    if (validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'The field is required'
    }


    if(!validator.equals(data.password, data.passwordConfirmation)){
        errors.passwordConfirmation = 'Password must match.'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body)
    setTimeout(() => {
        if (!isValid) {
            res.status(400).json(errors)
        }else{
            res.status(200).json({msg:'success'})
        }
    },2000)
    
})

export default router