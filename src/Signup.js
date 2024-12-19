import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z0-9_]{3,16}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

export default function Signup() {
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validName || !validPwd || !validMatch) {
            setErrMsg("Invalid Entry");
            return;
        }
        alert("Signup Successful!");
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Create a new account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {errMsg && <p className="text-sm text-red-500">{errMsg}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                            Username
                        </label>
                        <input
                            id="username"
                            ref={userRef}
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            required
                        />
                        {!validName && user && (
                            <p className="text-sm text-red-500">Invalid username.</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            required
                        />
                        {!validPwd && pwd && (
                            <p className="text-sm text-red-500">Provide valid password.</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-900">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            value={matchPwd}
                            onChange={(e) => setMatchPwd(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            required
                        />
                        {!validMatch && matchPwd && (
                            <p className="text-sm text-red-500">Passwords do not match.</p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
