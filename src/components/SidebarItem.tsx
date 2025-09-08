'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";

interface Prop {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SiderbarItem = ({ icon, path, title }: Prop) => {
  const pathName = usePathname();


  return (
    <>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      {/* <li>
        <Link href="/dashboard/rest-todos" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
          <CiBookmarkCheck size={30} />
          <span className="-mr-1 font-medium">Dashboard</span>
        </Link>
      </li> */}
      <li>
        <a href={path} className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group 
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white 
          ${path === pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}`}>
          {icon}
          <span className="group-hover:text-gray-700">{title}</span>
        </a>
      </li>
    </>
  );
}