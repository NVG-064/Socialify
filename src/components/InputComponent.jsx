export default function InputComponent(props) {
    const { text, type, placeholder, className, classNameInput } = props;

    return (
        <>
            <div className={`${className} text-gray-400 py-1 coolinput`}>
                <Label text={text} className={classNameInput}></Label>
                <Input type={type} placeholder={placeholder}></Input>
            </div>
        </>
    );
}

function Label(props) {
    const { text, className } = props;

    return (
        <label htmlFor="" className={`text bg-purple-sosialify ${className}`}>
            {text}
        </label>
    );
}

function Input(props) {
    return <input {...props} className="bg-transparent input" />;
}
