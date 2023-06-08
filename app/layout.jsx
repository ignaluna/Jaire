import "../styles/global.css"
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Terribles Producciones",
  description: "Productora de eventos Argentina",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body class="bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/fondoterri.png')` }} >
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