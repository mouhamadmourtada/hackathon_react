
import Button from "./button.jsx";

export default function Navbar({ links }) {
    return (
        <div className="w-full px-4  flex justify-between bg-jay_primary shadow-lg">
            <img
                src={"/images/Yamale.png"}
                alt="Logo "
                width={100}
                height={90}
            />
            <div className="flex items-center gap-4">
                {links?.map((link) => {
                    return (
                        link?.type === "btn" ? <Button type="secondary" text={link?.name} customStyle={"text-xs"} onClick={link?.onClick} /> :
                        <a href={link?.href} className={`text-sm text-jay_accent whitespace-nowrap hover:font-bold transition-all`}>{link?.name}</a>
                    )

                }
                )

                }

            </div>
        </div>
    )
};
