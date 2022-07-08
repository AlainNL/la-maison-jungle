import Banner from './Banner'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import logo from '../assets/logo.png'
import QuestionForm from './QuestionForm'

function App() {
    return (
      <div>
          <Banner>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La maison jungle</h1>
          </Banner>
          {/*<Cart /> */}
              <form onSubmit={QuestionForm}>
                  <input type='text' name='my_input' defaultValue='Tapez votre texte' />
                  <button type='submit'>Entrer</button>
              </form>
          <ShoppingList />
      </div> )
}

export default App
