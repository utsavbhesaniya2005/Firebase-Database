import { Route, Routes } from 'react-router'
import './App.css'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowBooks from './pages/ShowBooks'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import ViewBook from './pages/ViewBook'

function App() {

  return (
    <>
      <div className="body">
        <Header />
        <Routes>
          <Route path='/' element={<ShowBooks />}></Route>
          <Route path='/add' element={<AddBook />}></Route>
          <Route path='/edit/:id' element={<EditBook />}></Route>
          <Route path='/view/:id' element={<ViewBook />} ></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App