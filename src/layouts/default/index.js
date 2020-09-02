
import TopNav from './TopNav'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  return (
    <div className="app-container">
      <TopNav/>
      <div className="view-wrapper">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default DefaultLayout;


