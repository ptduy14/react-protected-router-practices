import Header from "./header";
import Footer from "./footer";

export default function DefaultLayout({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: '100vw', textAlign: 'center'}}>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
