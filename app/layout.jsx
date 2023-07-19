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
    <Provider>
      <body className="bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/fondos/fondoterri.png')` }} >
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </Provider>
  </html>
);

export default RootLayout;