// import "./Login.css"

import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    password: string;
};

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form submitted successfully:", data);
        alert(`Login successful for: ${data.email}`);
        window.location.href="/";
    };

    return (
        <div className="font-sans bg-[#101010] text-white w-[calc(100%-40px)] h-full flex justify-center items-center py-10 px-5">
            <form
                className="bg-[#1A1A1A] border border-[#2c2c2c] rounded-xl p-10 max-w-[400px] w-full shadow-[0_0_20px_rgba(212,175,55,0.1)] text-white"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex justify-start items-center w-full mb-5">
                    <button
                        type="button"
                        className="bg-transparent border-none text-white text-2xl cursor-pointer w-8 h-8 flex justify-center items-center pb-1 rounded-md transition-all duration-300 hover:text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]"
                        onClick={() => (window.location.href = "/")}
                    >
                        ×
                    </button>
                    <h2 className="text-2xl text-[#D4AF37] mx-auto">Welcome Back 👋</h2>
                </div>
                <p className="text-sm text-[#bbbbbb] mb-7 text-center">
                    Please login with your account to continue
                </p>

                <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm text-[#e0e0e0]">Email :</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full p-3 mb-1 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-[#ff4d4d] text-sm">{errors.email.message}</span>
                    )}
                </div>

                <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm text-[#e0e0e0]">Password :</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 mb-1 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && (
                        <span className="text-[#ff4d4d] text-sm">{errors.password.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#101010] border-none p-3.5 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#e6c34a] hover:-translate-y-1"
                >
                    Login
                </button>

                <p className="mt-5 text-sm text-[#999999] text-center">
                    Don’t have an account?{" "}
                    <a
                        href="/register"
                        className="text-[#D4AF37] no-underline transition-colors duration-300 hover:text-[#e6c34a]"
                    >
                        Register here
                    </a>
                </p>
            </form>
        </div>
    );
}