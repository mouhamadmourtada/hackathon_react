
import Button from "./button.jsx";

export default function Navbar({ links }) {
    return (
        <div className="w-full px-4 py-2 flex justify-between bg-jay_primary shadow-lg">
            <img
                src={"../assets/test.jpg"}
                alt="Logo "
                width={40}
                height={40}
            />
            <div className="flex items-center gap-4">
                {links?.map((link) => {
                    return (
                        link?.type === "btn" ? <Button type="secondary" text={link?.name} customStyle={"text-xs"} /> :
                        <a href={link?.href} className={`text-sm text-jay_accent whitespace-nowrap hover:font-bold transition-all`}>{link?.name}</a>
                    )

                }
                )

                }

            </div>
        </div>
    )
};
