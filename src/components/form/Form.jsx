import './Form.css'
import Inputs from '../input/Inputs';
import { useState } from 'react';
import {motion, AnimatePresence, animate} from 'framer-motion';

function Form(){

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPass: '',
        city: ''
    });
    const inputs = [
        { label: 'Name', name: 'name', placeholder: 'Enter your name' },
        { label: 'Email', name: 'email', placeholder: 'Enter your email' },
        { label: 'Age', name: 'age', placeholder: 'Enter your age' },
        { label: 'Password', name: 'password', placeholder: 'Password' },
        { label: 'ConfirmPass', name: 'confirmPass', placeholder: 'Confirm Password' },
        { label: 'City', name: 'city', placeholder: 'Enter your City' },
];

    const inputsPerSteps = 4; // numero de steps por pagina


    // Pega os inputs por etapa atual
    const currentInputs = inputs.slice(
        step * inputsPerSteps,
        (step + 1) * inputsPerSteps
    );


    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value });
    };


    const handleNext = () => {
        if((step + 1) * inputsPerSteps < inputs.length){
            setStep(step + 1);
        }else{
            alert('Form submitted successfully!');
        }
    };


    const handleBack = () => {
        if(step > 0) setStep(step - 1);
    }

    // variações para animação de entrada e saída
    const variants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };




    return(
      <div className="form-container">
        <h1>Multistep Form {step + 1}</h1>

        <AnimatePresence mode='wait'>
            <motion.div
                key={step} //chave para o AnimatePresence identificar mudança
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5}}
                style={{width: '100%'}}
            >

                {currentInputs.map((input, index) => (
                    <Inputs key={index} type="text" name={input.name} placeholder={input.placeholder} value={formData[input.name]} onChange={handleChange}/>
                ))}


        
                {step > 0 &&  <button onClick={handleBack}>Voltar</button>}
        
                <button onClick={handleNext}>{(step + 1 ) * inputsPerSteps >= inputs.length  ? 'Submit' : 'Próximo'}</button>
            </motion.div>
        </AnimatePresence>
      </div>
    ); 
}
export default Form