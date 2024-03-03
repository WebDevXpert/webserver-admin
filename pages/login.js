import Head from 'next/head';
import Link from 'next/link';
import Layout from '../layout/layout';
import styles from '../styles/Form.module.css';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { signIn, useSession } from "next-auth/react";
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { toast } from 'react-toastify';

export default function Login() {
    const { data: session } = useSession();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (session) {
            router.push('/');
        }
    }, [session, router]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Login successful");
                router.push("/");
            }
        },
    });

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <div className='title my-3'>
                <h1 className='dark:bg-dark dark:text-white text-gray-800 text-4xl font-bold py-4'>Login</h1>
                <p className='mx-auto text-gray-400'>
                    Welcome to Carbonops! <br /> Please log in here!
                </p>
            </div>
            <section className='w-3/3 mx-auto flex flex-col gap-10'>
                <form className='dark:bg-dark dark:text-white flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600 ' : ''}`}>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white'
                            {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    {formik.errors.email && formik.touched.email && <span className='text-rose-500 text-left'>{formik.errors.email}</span>}

                    <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Password'
                            className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white'
                            {...formik.getFieldProps('password')}
                        />
                        <span className='icon flex items-center px-4' onClick={() => setShowPassword(!showPassword)}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {formik.errors.password && formik.touched.password && <span className='text-rose-500 text-left'>{formik.errors.password}</span>}

                    <div className='input-button'>
                        <button type='submit' className={styles.button}>
                            Login
                        </button>
                    </div>
                </form>

                <p className='text-left text-gray-400 '>
                    Don't have an account yet?{' '}
                    <Link href='/register' className='text-blue-700'>
                        Sign Up
                    </Link>
                </p>
            </section>
        </Layout>
    );
}
