import React from 'react'

export default function Sign_up() {
    return (
        <div>
            <form >
            email: <br/>
                <input type="email" name = "email"/> <br/>
                Username: <br/>
                <input type="text" name="username"/> <br/>
                Password: <br/>
                <input type="password" name="password"/> <br/>
                Confirm Password: <br/>
                <input type="password" name="password2"/> <br/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
}
