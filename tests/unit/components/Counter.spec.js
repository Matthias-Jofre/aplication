import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', ()=>{

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    // test('Debe hacer match con snapshot', () =>{

    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()

    // })

    test('h2 debe tener el valor por defecto "Counter"', () => {
        
        // const wrapper = shallowMount( Counter )
        
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')
    })

    test('el valor por defecto debe ser 100 en el <p>', () => {
        
        // const wrapper = shallowMount( Counter )

        // const pTags = wrapper.findAll('p')

        const value = wrapper.find('[data-testid="counter"]').text()

        // console.log(pTags);

        // expect( pTags[1].text() ).toBe('100')

        expect( value ).toBe('100')
    })

    test('Debe incrementar en 1 el valor del contador', async() => {

        // const wrapper = shallowMount( Counter )

        const [ decreaseBtn, increaseBtn ] = wrapper.findAll('button')

        // const decreaseBtn = wrapper.find('button')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        // let value = wrapper.find('[data-testid="counter"]').text()

        // expect( value ).toBe('99')

        // const increaseBtn = wrapper.findAll('button') [1]

        // await increaseBtn.trigger('click')

        // await increaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('101')

    })

    test('Debe de establecer el valor por defecto', () => {

        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number( value )).toBe( start )

    })

    test('Debe mostrar la prop title', () => {
        
        const title = 'Hola mundo!!!!!'

        const wrapper = shallowMount( Counter, {
            props: {
                title,
            }
        })

        expect( wrapper.find('h2').text() ).toBe( title )
    })
})