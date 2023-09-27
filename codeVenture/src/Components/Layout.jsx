import NavBar from './NavBar/NavBar';
import Button from './ButtonPlay/Button';
function Layout({ children }) {
  return (
    <div className='w-full flex flex-col items-center'>
      <NavBar />
      <Button />
      {children}
    </div>
  );
}

export default Layout;
