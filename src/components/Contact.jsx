import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        user_email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.from_name) tempErrors.from_name = 'Name is required';
        if (!formData.user_email) {
            tempErrors.user_email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            tempErrors.user_email = 'Email is invalid';
        }
        if (!formData.message) tempErrors.message = 'Message is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setLoading(true);
        try {
            await emailjs.sendForm(
                'service_pbolle8',
                'template_6b4p5ze',
                form.current,
                { publicKey: 'lYYXUWGmsNr-bV7rT' }
            );
            setFormData({ from_name: '', user_email: '', message: '' });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('FAILED...', error.text);
            alert('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='border-b border-neutral-900 pb-20'
        >
            <h1 className='my-10 text-center text-4xl font-bold text-white'>Get In Touch</h1>

            <div className='text-center tracking-tighter bg-neutral-800 p-6 rounded-lg max-w-md mx-auto mb-10 border border-neutral-700'>
                <p className="my-2 text-lg font-semibold text-white">Oshada Dilshan</p>
                <p className="my-2 text-neutral-300 hover:text-blue-400 transition-colors">+94 70 363 3032</p>
                <p className="my-2 text-neutral-300 hover:text-blue-400 transition-colors">
                    <a href="mailto:oshadasayakkara@gmail.com">oshadasayakkara@gmail.com</a>
                </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-8 bg-neutral-900 rounded-lg shadow-xl">
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        className={`shadow appearance-none border ${errors.from_name ? 'border-red-500' : 'border-neutral-600'} rounded w-full py-3 px-4 bg-transparent text-white placeholder-neutral-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    />
                    {errors.from_name && <p className="text-red-500 text-xs mt-1">{errors.from_name}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className={`shadow appearance-none border ${errors.user_email ? 'border-red-500' : 'border-neutral-600'} rounded w-full py-3 px-4 bg-transparent text-white placeholder-neutral-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    />
                    {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`shadow appearance-none border ${errors.message ? 'border-red-500' : 'border-neutral-600'} rounded w-full py-3 px-4 bg-transparent text-white placeholder-neutral-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32 resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;