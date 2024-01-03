import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from '../lib/validate'
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';

export default function Register() {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    const { data: session } = useSession();
    const router = useRouter();

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const userSession = await getSession();
            if (userSession) {
                setTimeout(() => {
                    setShowMessage(true);
                }, 1000);
                setTimeout(() => {
                    router.push('/');
                }, 1000);
            }
        };

        checkSession();
    }, [router]);

    const [show, setShow] = useState({ password: false, cpassword: false });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: '',
        },
        validate: registerValidate,
        onSubmit: async (values) => {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            };

            await fetch(`${apiUrl}/api/auth/signup`, options)
                .then((res) => res.json())
                .then((data) => {
                    if (data) router.push(`${apiUrl}`);
                });
        },
    });

    return (
        <Layout>

            <Head>
                <title>Register</title>
            </Head>

            {session ? (
                <div>
                    {showMessage && <p>You are already registered and logged in.</p>}
                </div>
            ) : (
                <section className='w-3/4 mx-auto flex flex-col gap-10'>
                    <div className='title'>
                        <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                        <p className='w-3/4 mx-auto text-gray-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?
                        </p>
                    </div>

                    <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                        <div className={`${styles.input_group} ${formik.errors.name && formik.touched.name ? 'border-rose-600' : ''}`}>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                className={styles.input_text}
                                {...formik.getFieldProps('name')}
                            />
                            <span className='icon flex items-center px-4'>
                                <HiOutlineUser size={25} />
                            </span>
                        </div>
                        {formik.errors.name && formik.touched.name ? (
                            <span className='text-rose-500'>{formik.errors.name}</span>
                        ) : (
                            <></>
                        )}
                        <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className={styles.input_text}
                                {...formik.getFieldProps('email')}
                            />
                            <span className='icon flex items-center px-4'>
                                <HiAtSymbol size={25} />
                            </span>
                        </div>
                        {formik.errors.email && formik.touched.email ? (
                            <span className='text-rose-500'>{formik.errors.email}</span>
                        ) : (
                            <></>
                        )}
                        <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                            <input
                                type={`${show.password ? 'text' : 'password'}`}
                                name='password'
                                placeholder='Password'
                                className={styles.input_text}
                                {...formik.getFieldProps('password')}
                            />
                            <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password })}>
                                <HiFingerPrint size={25} />
                            </span>
                        </div>
                        {formik.errors.password && formik.touched.password ? (
                            <span className='text-rose-500'>{formik.errors.password}</span>
                        ) : (
                            <></>
                        )}
                        <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
                            <input
                                type={`${show.cpassword ? 'text' : 'password'}`}
                                name='cpassword'
                                placeholder='Confirm Password'
                                className={styles.input_text}
                                {...formik.getFieldProps('cpassword')}
                            />
                            <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                                <HiFingerPrint size={25} />
                            </span>
                        </div>
                        {formik.errors.cpassword && formik.touched.cpassword ? (
                            <span className='text-rose-500'>{formik.errors.cpassword}</span>
                        ) : (
                            <></>
                        )}

                        <div className='input-button'>
                            <button type='submit' className={styles.button}>
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className='text-center text-gray-400 '>
                        Have an account? <Link href='/login' className='text-blue-700'>
                            Sign In
                        </Link>
                    </p>
                </section>
            )}
        </Layout>
    )
}