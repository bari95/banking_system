import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName:"Bari",
    lastName:'Kaneno'
  }
  return (
  
      <main className="flex h-screen w-full font-inter">
        
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className='flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden ld:hidden;'>
          
            <Image src='/icons/logo.svg' width={30} height={30} alt='logo'/>
          
          <MobileNav user={loggedIn} />
          </div>
          {children}
        </div>
      
        </main>
  );
}
