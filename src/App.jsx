import { Route, Routes } from 'react-router'
import './App.css'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowRecipes from './pages/ShowRecipes'
import AddRecipe from './pages/AddRecipe'
import EditRecipe from './pages/EditRecipe'
import ViewRecipe from './pages/ViewRecipe'

function App() {

  return (
    <>
      <div className="body">
        <Header />
        <Routes>
          <Route path='/' element={<ShowRecipes />}></Route>
          <Route path='/add' element={<AddRecipe />}></Route>
          <Route path='/edit/:id' element={<EditRecipe />}></Route>
          <Route path='/view/:id' element={<ViewRecipe />} ></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App