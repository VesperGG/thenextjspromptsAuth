import '@styles/global.css'
import Nav from '@components/Nav';
import Provide from '@components/Provide';
export const metdata = {
    title: "prompts",
    description: "Discover & SHARE ai proompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang ='en'>
        <body>
            <Provide>
            <div className="main">
                <div className="gradient">   </div>

                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provide>
        </body>
    </html>
  )
}

export default RootLayout