import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { backendApi } from "../../../api.ts";
import {getUserFromToken, type UserData} from "../../../auth/auth.ts";

type FormData = {
    username: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const authenticateUser = async (data: FormData) => {
        try {
            const response = await backendApi.post('/auth/login', {
                username: data.username,
                password: data.password
            });

            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const user : UserData = getUserFromToken(accessToken);

            localStorage.setItem('username', user.username as string)
            localStorage.setItem('role', user.role as string)

            alert("Successfully logged in!");
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    };

    return (
        <div className="font-sans bg-[#101010] text-white w-[calc(100%-40px)] h-full flex justify-center items-center py-10 px-5">
            <form
                className="bg-[#1A1A1A] border border-[#2c2c2c] rounded-xl p-10 max-w-[400px] w-full shadow-[0_0_20px_rgba(212,175,55,0.1)] text-white"
                onSubmit={handleSubmit(authenticateUser)}
            >
                <div className="flex justify-start items-center w-full mb-5">
                    <button
                        type="button"
                        className="bg-transparent border-none text-white text-2xl cursor-pointer w-8 h-8 flex justify-center items-center pb-1 rounded-md transition-all duration-300 hover:text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]"
                        onClick={() => navigate("/")}
                    >
                        ×
                    </button>
                    <h2 className="text-2xl text-[#D4AF37] mx-auto">Welcome Back 👋</h2>
                </div>
                <p className="text-sm text-[#bbbbbb] mb-7 text-center">
                    Please login with your account to continue
                </p>

                <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm text-[#e0e0e0]">Username :</label>
                    <input
                        type="text"
                        placeholder="username"
                        className="w-full p-3 mb-1 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none"
                        {...register("username", {
                            required: "Username is required",
                        })}
                    />
                    {errors.username && (
                        <span className="text-[#ff4d4d] text-sm">{errors.username.message}</span>
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
