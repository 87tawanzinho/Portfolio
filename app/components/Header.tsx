import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="https://wa.me/5575981975144" target="blank">
        <p
          className="cursor-pointer text-gray-700 hover:text-gray-500 text-end p-4 transition-all"
          title="não se preocupe, não é um virus "
        >
          Whatsapp (clique aqui)
        </p>
      </Link>
    </div>
  );
}
