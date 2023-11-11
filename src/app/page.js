import Image from 'next/image'
import nameLogo from './jayp.png';

export default function Home() {
  return (
    <main className="overscroll-none">
      <div className="w-screen h-16 flex flex-row align-middle justify-evenly">
        <div className="w-14">
          <Image
            className='w-1, h-1 object-contain'
            src={nameLogo} // Path relative to the public folder
            alt="Jay Park Name Logo"
            width={2} // Desired width
            height={2} // Desired height
            layout="responsive" // Optional: layout behavior
          />
        </div>

      
        <div className="header flex flex-row justify-center margin-auto w-112  rounded-full gap-12 mt-4 body-font font-sans font-semibold">
            <div className="experiences">About Me</div>
            <div className="experiences">Experiences</div>
            <div className="experiences">Project</div>
            <div className="experiences">Contact Me</div>
        </div>
      </div>
    </main>
  )
}
