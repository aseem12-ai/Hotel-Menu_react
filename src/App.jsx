import menu from './data'
import { useState } from 'react'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'

// const tempCategories=menu.map((item)=>item.category)
// const tempSet=new Set(tempCategories)
// const tempItems=['all',...tempSet]

// console.log(tempItems);


// !!!important
// or except above three lines we can make into one line like below

const allCategories=['all',...new Set(menu.map((item)=>item.category))]

function App() {

const [menuItems,setMenuItems]=useState(menu)


const [categories,setCategories]=useState(allCategories)

const filterItems=(category)=>{
  // console.log(category);
  if(category=='all'){
    setMenuItems(menu)
    return
  }
  const newItems=menu.filter((item)=>item.category===category)
  setMenuItems(newItems)

}


  return (




    <main>
      <section className='menu'>
        <Title text='Our menu'/>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
       
      </section>
      
    </main>
  )
}

export default App
