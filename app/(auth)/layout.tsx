import Image from "next/image";




export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    
        <main className=' flex justify-between min-h-screen w-full font-inter'>
          {children}
          <div>
            <div className='auth-asset'>
              <Image 
                src = '/icons/auth-image.svg'
                alt = 'auth image'
                width={500}
                height={500}
                />
            </div>
          </div>
          </main>
    );
  }
  