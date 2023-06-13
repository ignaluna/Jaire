import "../styles/global.css"
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Terribles Producciones",
  description: "Productora de eventos Argentina",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Jura:wght@700&display=swap" rel="stylesheet" />
    </head>
    <body className="bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/fondoterri.png')` }} >
      <Provider>
          <main className='app'>
            <Nav />
            {children}
          </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;