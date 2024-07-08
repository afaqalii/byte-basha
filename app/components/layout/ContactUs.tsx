import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// // Define your schema
// const schema = z.object({
//     name: z.string().min(1, "Name is required"),
//     email: z.string().email("Invalid email address").min(1, "Email is required"),
//     message: z.string().min(1, "Message is required"),
// });

// type FormData = z.infer<typeof schema>;

const ContactUs = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    //     resolver: zodResolver(schema),
    // });

    // const onSubmit = (data: FormData) => {
    //     console.log(data);
    // };

    return (
        <div className="container flex max-[950px]:flex-col max-[950px]: bg-black shadow-xl my-10 md:my-20 py-20 px-10 rounded-tr-xl rounded-tl-xl lg:rounded-xl">
            {/* show on large screen above 768px */}
            <h1 className="text-white text-7xl mb-4 hidden  min-[950px]:block w-[40%]">Want <br /> to Elevate <br /> your brand?</h1>
            {/* show on small screen below 768px */}
            <h1 className="text-white text-4xl min-[580px]:text-7xl mb-4 min-[950px]:hidden">Want  to Elevate your brand?</h1>
            <div className="min-[950px]:w-[60%]">
                <h1 className="text-4xl text-white mb-8">Contact Us!</h1>
                <form
                    //  onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-white">Your/Company Name</label>
                        <input
                            // {...register("name")}
                            name="name"
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                        />
                        {/* {errors.name && (
                        <p className="mt-1 text-red-500">{errors.name.message}</p>
                    )} */}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white">Email</label>
                        <input
                            // {...register("email")}
                            name="email"
                            type="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                        />
                        {/* {errors.email && (
                        <p className="mt-1 text-red-500">{errors.email.message}</p>
                    )} */}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-white">Message</label>
                        <textarea
                            // {...register("message")}
                            name="message"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                        />
                        {/* {errors.message && (
                        <p className="mt-1 text-red-500">{errors.message.message}</p>
                    )} */}
                    </div>
                    <button type="submit" className="btn-yellow">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
