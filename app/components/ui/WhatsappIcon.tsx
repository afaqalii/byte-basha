import { RiWhatsappFill } from "react-icons/ri";

export const WhatsAppIcon = () => {
    return (
        <a 
            href="https://wa.me/923157021585" 
            className="fixed bottom-6 right-6 z-20 bg-white rounded-full p-1 cursor-pointer bounce-animation"
            rel="noopener noreferrer"
        >
            <RiWhatsappFill className="text-green-700 h-[50px] w-[50px]" />
        </a>
    );
};
