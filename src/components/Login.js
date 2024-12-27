import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { HeroImage, UserImage } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = async () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        try {
            if (!isSignForm) {
                // Sign-up logic
                const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;

                await updateProfile(auth.currentUser, {
                    displayName: name.current.value,
                    photoURL: UserImage, // Update with UserImage URL
                });

                const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
                console.log("Profile updated:", { displayName, photoURL }); // Debug log
                dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
            } else {
                // Sign-in logic
                const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                console.log("Signed in:", user);
            }
        } catch (error) {
            setErrorMessage(`${error.code} - ${error.message}`);
        }
    };

    const toggleSignInForm = () => {
        setIsSignForm(!isSignForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className='h-screen object-cover' src={HeroImage} alt="background-image" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-4">{isSignForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-2 my-2 w-full bg-gray-700"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email-Address"
                    className="p-2 my-2 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-2 w-full bg-gray-700"
                />

                <p className="text-red-500">{errorMessage}</p>

                <button className="p-2 my-2 w-full bg-red-700" onClick={handleButtonClick}>
                    {isSignForm ? "Sign In" : "Sign Up"}
                </button>

                <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
                    {isSignForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;
