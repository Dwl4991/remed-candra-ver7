import {describe,test,expect} from '@jest/globals'
import LoginAdmin from '../LoginAdmin'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Store } from '../../../store'


describe('tes login admin',()=>{
    test('tes login admin',()=>{
render(
<BrowserRouter>
<Provider store={Store}>

    <LoginAdmin></LoginAdmin>
</Provider>
</BrowserRouter>
)
const tesTitle = screen.getByTestId('tes welcome')
expect(tesTitle).toHaveTextContent('Welcome, Admin BCR')
    })
})