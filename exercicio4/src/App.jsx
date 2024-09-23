import React from "react"
import './App'


function App() {

    const items =['item1','item2','item3','item4','item5'];

    return <section className='pai-todos'>
        <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
            <header style={{backgroundColor:'brown',color:'white',padding:'15px'}}>
                <h1 style={{fontSize:'50px'}}>Página digital</h1>
            </header>

            <main style={{flex:'1',padding:'30px', fontSize:'20px'}}>
                <h3>Conteúdo</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tempora iste deleniti illum, nesciunt saepe tempore officiis quae commodi, blanditiis, delectus quos. Illum quasi assumenda laboriosam tenetur asperiores iure sequi?
                    Lorem ipsum dolor sit, amet consectetur radicalising elit. Voluptatum tempora iste deleniti illum, nesciunt saepe tempore officiis quae commodi, blanditiis, delectus quos. Illum quasi assumenda laboriosam tenetur asperiores iure sequi?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tempora iste deleniti illum, nesciunt saepe tempore officiis quae commodi, blanditiis, delectus quos. Illum quasi assumenda laboriosam tenetur asperiores iure sequi?
                </p>
            </main>

            <div style={{padding:'20px',backgroundColor:'black',}}>
                <h1 style={{display:'flex', padding:'15px',color:'white'}}>Itens</h1>
                <ul style={{listStyle:'none',fontSize:'20px',color:'white'}}>
                    {items.map((item, index) =><li key={index}>{item}</li>)}
                </ul>
            </div>

            <footer style={{fontSize:'20px',padding:'15px',textAlign:'center'}}>
                <p>@Direitos Reservados</p>
            </footer>
        </div>
    </section>
}

export default App
