import Link from "next/link";

export function Footer () {
    return (
        <div className="flex w-full h-full bg-[#1F545A] items-center justify-center">
            <div className="p-4 text-white text-bold">
                <span>Desenvolvido por <Link href="http://lmsolution.com.br" target="_blank" className="text-gray-400">LM Solution.</Link></span>
            </div>
        </div>
    )
}