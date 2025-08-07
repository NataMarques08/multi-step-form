import './Inputs.css';

function Input({type, placeholder, value, onChange}) {
    return(
        <div className="input-container">
            <div className="form-input">
                <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>        
            </div>
        </div>
    );
}
export default Input