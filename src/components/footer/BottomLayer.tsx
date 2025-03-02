export default function BottomLayer() {
    const items = [
        "Guides",
        "Terms of Sale",
        "Terms of Use",
        "Nike Privacy Policy",
        "Your Privacy Choices",
        "CA Supply Chains Act",
    ];

    return (
        <div className="w-full h-20 pb-10 bg-black flex space-x-6 pl-[5%]">
            {items.map((item, index) => (
                <p
                    key={index}
                    className="font-lato text-zinc-400 hover:text-white cursor-pointer"
                >
                    {item}
                </p>
            ))}
        </div>
    );
}
