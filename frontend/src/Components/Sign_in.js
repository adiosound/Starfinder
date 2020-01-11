import React from 'react'

export default function Sign_in() {
    return (
        <div>
            <form >
                UserName: <br />
                <input type="text" name = "username"/> <br />
                Password: <br/>
                <input type="password" name = "password"/> <br/>
                <input type="submit" value = "submit"/>
            </form>
        </div>
    )
}
