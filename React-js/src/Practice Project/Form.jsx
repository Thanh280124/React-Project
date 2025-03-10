import { useState } from "react"


export const Form = () => {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [comfirmPassword,setComfirmPassword] = useState('');

    const [errorUsername,setErrorUsername] = useState('');
    const [errorEmail,setErrorEmail] = useState('');
    const [errorPassword,setErrorPassword] = useState('');
    const [errorComfirmPassword,setErrorComfirmPassword] = useState('');

    const [userColor,setUserColor] = useState('');
    const [emailColor,setEmailColor] = useState('');
    const [passwordColor,setPasswordColor] = useState('');
    const [comfirmPasswordColor,setComfirmPasswordColor] = useState('');

    const submit = e => {
        e.preventDefault()
        if (username.length > 6) {
            setErrorUsername('');
            setUserColor('green');
        } else {
            setErrorUsername('Username has to be longer than 6 characters');
            setUserColor('red');
        }

        if(email.includes('@gmail')){
            setErrorEmail('')
            setEmailColor('green');
        }else{
            setErrorEmail('Invalid email form')
            setEmailColor('red');
        }
        if (password.length >= 6) {
            setErrorPassword('');
            setPasswordColor('green');
        } else {
            setErrorPassword('Password must be at least 6 characters');
            setPasswordColor('red');
        }
        if (password !== '' && comfirmPassword === password) {
            setErrorComfirmPassword('');
            setComfirmPasswordColor('green');
        } else {
            setErrorComfirmPassword('Passwords do not match');
            setComfirmPasswordColor('red');
        }
    }
    return (
        <>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        style={{ borderColor: userColor }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p style={{ color: 'red' }}>{errorUsername}</p>

                    <input
                        type="email"
                        placeholder="Email"
                        style={{ borderColor: emailColor }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p style={{ color: 'red' }}>{errorEmail}</p>

                    <input
                        type="password"
                        placeholder="Password"
                        style={{ borderColor: passwordColor }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p style={{ color: 'red' }}>{errorPassword}</p>

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        style={{ borderColor: comfirmPasswordColor }}
                        value={comfirmPassword}
                        onChange={(e) => setComfirmPassword(e.target.value)}
                    />
                    <p style={{ color: 'red' }}>{errorComfirmPassword}</p>

                    <button onClick={submit}>Submit</button>
                </form>
            </div>
        </>
    );
}
