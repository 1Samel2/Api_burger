import * as Yup from 'yup'

class SessionController {
    store(request, response){
        const schema = Yup.object().shape({
            email: Yup.string.email().required(),
            password: Yup.string().required(),
        })

        
    }
}